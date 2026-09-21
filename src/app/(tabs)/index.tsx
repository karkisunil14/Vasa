import { useUser } from "@clerk/expo";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { TodayPlanItem } from "@/components/TodayPlanItem";
import { images } from "@/constants/images";
import { getLanguageById } from "@/data/languages";
import { getLessonsByUnitId, getLessonsByLanguageId } from "@/data/lessons";
import { getUnitsByLanguageId } from "@/data/units";
import { useLanguageStore } from "@/store/languageStore";
import { getTodayKey, useProgressStore } from "@/store/progressStore";
import { colors } from "@/theme";
import type { Lesson } from "@/types/learning";

function getPlanMeta(lesson: Lesson) {
  if (lesson.type === "vocabulary") {
    return {
      icon: "chatbubbles-outline" as const,
      iconBgClassName: "bg-[#FCE9E8]",
      iconColor: colors.error,
      title: "New words",
      subtitle: `${lesson.vocabulary.length} words`,
    };
  }

  if (lesson.type === "chat") {
    return {
      icon: "headset-outline" as const,
      iconBgClassName: "bg-[#EDE9FE]",
      iconColor: colors.primary,
      title: "AI Conversation",
      subtitle: lesson.description,
    };
  }

  return {
    icon: "book-outline" as const,
    iconBgClassName: "bg-[#EDE9FE]",
    iconColor: colors.primary,
    title: "Lesson",
    subtitle: lesson.description,
  };
}

export default function Home() {
  const router = useRouter();
  const { user } = useUser();

  const selectedLanguageId = useLanguageStore((state) => state.selectedLanguageId);
  const dailyXp = useProgressStore((state) => state.dailyXp);
  const dailyXpDate = useProgressStore((state) => state.dailyXpDate);
  const dailyGoalXp = useProgressStore((state) => state.dailyGoalXp);
  const streak = useProgressStore((state) => state.streak);
  const completedLessonIds = useProgressStore((state) => state.completedLessonIds);
  const toggleLessonComplete = useProgressStore((state) => state.toggleLessonComplete);
  const hasHydrated = useProgressStore((state) => state.hasHydrated);
  const languageHasHydrated = useLanguageStore((state) => state.hasHydrated);
  const clearSelectedLanguage = useLanguageStore((state) => state.clearSelectedLanguage);

  const language = selectedLanguageId ? getLanguageById(selectedLanguageId) : undefined;

  useEffect(() => {
    if (languageHasHydrated && selectedLanguageId && !language) {
      clearSelectedLanguage();
      router.replace("/language-selection");
    }
  }, [languageHasHydrated, selectedLanguageId, language, clearSelectedLanguage, router]);

  if (!hasHydrated || !languageHasHydrated || !language) {
    return null;
  }

  const todayXp = dailyXpDate === getTodayKey() ? dailyXp : 0;

  const units = getUnitsByLanguageId(language.id);
  const currentUnit = units[0];
  const unitLessons = currentUnit ? getLessonsByUnitId(currentUnit.id) : [];
  const todaysLessons = unitLessons.slice(0, 3);

  const greetingLesson = getLessonsByLanguageId(language.id)[0];
  const helloWord = greetingLesson?.vocabulary[0]?.term.split(" (")[0] ?? "Hello";
  const firstName = user?.firstName ?? "there";

  const goalProgress = Math.min(100, Math.round((todayXp / dailyGoalXp) * 100));

  const goToLearn = () => router.push("/(tabs)/learn");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 12, paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-3">
            <Image
              source={{ uri: language.flag }}
              style={{ width: 40, height: 40, borderRadius: 20 }}
              contentFit="cover"
            />
            <Text className="h3 text-ink">
              {helloWord}, {firstName}! 👋
            </Text>
          </View>

          <View className="flex-row items-center gap-3">
            <View className="flex-row items-center gap-1 rounded-full bg-[#FFF1E0] px-3 py-1.5">
              <Ionicons name="flame" size={16} color={colors.streak} />
              <Text className="h4 text-ink">{streak}</Text>
            </View>
            <Ionicons name="notifications-outline" size={22} color={colors.ink} />
          </View>
        </View>

        {/* Daily goal */}
        <View className="mt-5 flex-row items-center justify-between rounded-3xl bg-[#FDF1E6] p-5">
          <View className="flex-1 pr-3">
            <Text className="body-md text-muted">Daily goal</Text>
            <Text className="h1 text-ink mt-1 text-[28px]">
              {todayXp} <Text className="h3 text-muted">/ {dailyGoalXp} XP</Text>
            </Text>
            <View className="mt-3 h-2 w-full overflow-hidden rounded-full bg-[#F5E1C8]">
              <View
                className="h-2 rounded-full bg-streak"
                style={{ width: `${goalProgress}%` }}
              />
            </View>
          </View>
          <Image source={images.treasure} style={{ width: 72, height: 72 }} contentFit="contain" />
        </View>

        {/* Continue learning */}
        {currentUnit ? (
          <View className="mt-5 overflow-hidden rounded-3xl">
            <LinearGradient
              colors={[colors.primary, colors.accentBlue]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{ padding: 20 }}
            >
              <View className="flex-row items-center justify-between">
                <View className="flex-1 pr-2">
                  <Text className="body-sm text-white/80">Continue learning</Text>
                  <Text className="h1 text-white mt-1 text-[26px]">{language.name}</Text>
                  <Text className="body-md text-white/80 mt-1">
                    A1 • Unit {currentUnit.order}
                  </Text>

                  <TouchableOpacity
                    activeOpacity={0.85}
                    onPress={goToLearn}
                    className="mt-4 self-start rounded-full bg-white px-5 py-2.5"
                  >
                    <Text className="h4 text-primary">Continue</Text>
                  </TouchableOpacity>
                </View>

                <Image source={images.palace} style={{ width: 110, height: 110 }} contentFit="contain" />
              </View>
            </LinearGradient>
          </View>
        ) : (
          <View className="mt-5 items-center rounded-3xl border border-border bg-surface p-6">
            <Text className="h4 text-ink">Lessons coming soon</Text>
            <Text className="body-sm text-muted mt-1 text-center">
              We&apos;re still building the {language.name} course. Check back soon!
            </Text>
          </View>
        )}

        {/* Today's plan */}
        {todaysLessons.length > 0 && (
          <>
            <View className="mt-6 flex-row items-center justify-between">
              <Text className="h3 text-ink">Today&apos;s plan</Text>
              <TouchableOpacity onPress={goToLearn}>
                <Text className="body-md text-primary">View all</Text>
              </TouchableOpacity>
            </View>

            <View className="mt-1">
              {todaysLessons.map((lesson) => {
                const meta = getPlanMeta(lesson);
                return (
                  <TodayPlanItem
                    key={lesson.id}
                    icon={meta.icon}
                    iconBgClassName={meta.iconBgClassName}
                    iconColor={meta.iconColor}
                    title={meta.title}
                    subtitle={meta.subtitle}
                    completed={completedLessonIds.includes(lesson.id)}
                    onToggle={() => toggleLessonComplete(lesson.id, lesson.xpReward)}
                  />
                );
              })}
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
