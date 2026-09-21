import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { LessonCard, type LessonStatus } from "@/components/LessonCard";
import { getLessonsByUnitId } from "@/data/lessons";
import { getUnitsByLanguageId } from "@/data/units";
import { useLanguageStore } from "@/store/languageStore";
import { useProgressStore } from "@/store/progressStore";
import { colors } from "@/theme";
import type { Lesson } from "@/types/learning";

export default function Learn() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"lessons" | "practice">("lessons");
  const [isSaved, setIsSaved] = useState(false);

  const selectedLanguageId = useLanguageStore((state) => state.selectedLanguageId);
  const languageHasHydrated = useLanguageStore((state) => state.hasHydrated);
  const completedLessonIds = useProgressStore((state) => state.completedLessonIds);
  const hasHydrated = useProgressStore((state) => state.hasHydrated);

  if (!hasHydrated || !languageHasHydrated || !selectedLanguageId) {
    return null;
  }

  const units = getUnitsByLanguageId(selectedLanguageId);
  const currentUnit = units[0];
  const unitLessons = currentUnit ? getLessonsByUnitId(currentUnit.id) : [];

  const firstIncompleteIndex = unitLessons.findIndex(
    (lesson) => !completedLessonIds.includes(lesson.id),
  );
  const currentIndex = firstIncompleteIndex === -1 ? unitLessons.length - 1 : firstIncompleteIndex;
  const currentLesson = unitLessons[currentIndex];
  const completedCount = unitLessons.filter((lesson) =>
    completedLessonIds.includes(lesson.id),
  ).length;

  if (!currentUnit || !currentLesson) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <View className="flex-1 items-center justify-center px-8">
          <Text className="h3 text-ink text-center">Lessons coming soon</Text>
          <Text className="body-md text-muted mt-2 text-center">
            We&apos;re still building this course. Check back soon!
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  const getStatus = (lesson: Lesson): LessonStatus => {
    if (completedLessonIds.includes(lesson.id)) return "completed";
    if (lesson.id === currentLesson.id) return "current";
    return "locked";
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="flex-row items-start justify-between px-5 pt-3">
          <TouchableOpacity
            onPress={() => router.push("/(tabs)")}
            className="h-9 w-9 items-center justify-center"
          >
            <Ionicons name="chevron-back" size={24} color={colors.ink} />
          </TouchableOpacity>

          <View className="flex-1 px-1">
            <Text className="h2 text-ink">{currentLesson.title}</Text>
            <Text className="body-md text-muted mt-1">
              Unit {currentUnit.order} • {completedCount}/{unitLessons.length} lessons
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => setIsSaved((prev) => !prev)}
            className="h-9 w-9 items-center justify-center"
          >
            <Ionicons
              name={isSaved ? "bookmark" : "bookmark-outline"}
              size={22}
              color={colors.primary}
            />
          </TouchableOpacity>
        </View>

        {/* Hero image */}
        <Image
          source={{ uri: currentLesson.image }}
          style={{ width: "100%", height: 220, marginTop: 8 }}
          contentFit="cover"
        />

        <View className="px-5">
          {/* Tabs */}
          <View className="mt-5 flex-row rounded-full bg-surface p-1">
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => setActiveTab("lessons")}
              className={`flex-1 items-center rounded-full py-2.5 ${
                activeTab === "lessons" ? "bg-white" : ""
              }`}
            >
              <Text className={`h4 ${activeTab === "lessons" ? "text-primary" : "text-muted"}`}>
                Lessons
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => setActiveTab("practice")}
              className={`flex-1 items-center rounded-full py-2.5 ${
                activeTab === "practice" ? "bg-white" : ""
              }`}
            >
              <Text className={`h4 ${activeTab === "practice" ? "text-primary" : "text-muted"}`}>
                Practice
              </Text>
            </TouchableOpacity>
          </View>

          {/* Content */}
          {activeTab === "lessons" ? (
            <View className="mt-5 pb-8">
              {unitLessons.map((lesson) => (
                <LessonCard
                  key={lesson.id}
                  lesson={lesson}
                  status={getStatus(lesson)}
                  onPress={() =>
                    router.push(
                      lesson.type === "audio"
                        ? `/lesson/audio/${lesson.id}`
                        : `/lesson/${lesson.id}`,
                    )
                  }
                />
              ))}
            </View>
          ) : (
            <View className="mt-5 items-center rounded-3xl border border-border bg-surface p-8">
              <Ionicons name="barbell-outline" size={28} color={colors.primary} />
              <Text className="h4 text-ink mt-3">Practice mode coming soon</Text>
              <Text className="body-sm text-muted mt-1 text-center">
                Review vocabulary from completed lessons to keep your skills sharp.
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
