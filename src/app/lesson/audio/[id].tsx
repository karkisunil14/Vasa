import { useUser } from "@clerk/expo";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants/images";
import { getLanguageById } from "@/data/languages";
import { getLessonById } from "@/data/lessons";
import { useProgressStore } from "@/store/progressStore";
import { colors } from "@/theme";

// Illustrative feedback shown at the end of the session. There is no real
// speech evaluation yet — Vision Agents would score this from the backend.
const SESSION_FEEDBACK = [
  { label: "Speaking", value: "Excellent", color: colors.success },
  { label: "Pronunciation", value: "Great", color: colors.info },
  { label: "Grammar", value: "Good", color: colors.primary },
];

function formatDuration(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

type ControlButtonProps = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  active: boolean;
  inactiveTint?: boolean;
  onPress: () => void;
};

function ControlButton({ icon, label, active, inactiveTint, onPress }: ControlButtonProps) {
  const isOff = !active && inactiveTint;

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} className="items-center gap-2">
      <View
        className={`h-14 w-14 items-center justify-center rounded-full ${
          isOff ? "bg-[#FCE9E8]" : "bg-white"
        }`}
        style={styles.circleShadow}
      >
        <Ionicons name={icon} size={22} color={isOff ? colors.error : colors.ink} />
      </View>
      <Text className="caption text-white">{label}</Text>
    </TouchableOpacity>
  );
}

export default function AudioLesson() {
  const router = useRouter();
  const { user } = useUser();
  const { id } = useLocalSearchParams<{ id: string }>();

  const completedLessonIds = useProgressStore((state) => state.completedLessonIds);
  const toggleLessonComplete = useProgressStore((state) => state.toggleLessonComplete);

  const lesson = getLessonById(id);
  const language = lesson ? getLanguageById(lesson.languageId) : undefined;

  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isMicOn, setIsMicOn] = useState(true);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [showSubtitles, setShowSubtitles] = useState(true);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setElapsedSeconds((seconds) => seconds + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const totalSteps = lesson ? lesson.phrases.length + 2 : 1;
  const step = stepIndex % totalSteps;

  const bubble = useMemo(() => {
    if (!lesson) return null;

    if (step === 0) {
      return { primary: lesson.aiTeacherPrompt.greeting, secondary: "Let's begin! 👋" };
    }
    if (step === totalSteps - 1) {
      return {
        primary: "¡Muy bien! Great job! 🎉",
        secondary: `You practiced ${lesson.phrases.length} phrase${lesson.phrases.length === 1 ? "" : "s"}.`,
      };
    }
    const phrase = lesson.phrases[step - 1];
    return { primary: phrase.text, secondary: phrase.translation };
  }, [lesson, step, totalSteps]);

  if (!lesson || !bubble) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <Stack.Screen options={{ headerShown: false }} />
        <View className="flex-1 items-center justify-center px-8">
          <Text className="h3 text-ink">Lesson not found</Text>
          <TouchableOpacity onPress={() => router.back()} className="mt-4">
            <Text className="body-md text-primary">Go back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const isCompleted = completedLessonIds.includes(lesson.id);

  const handleSpeak = () => {
    setIsSpeaking(true);
    setTimeout(() => setIsSpeaking(false), 800);
    setStepIndex((current) => current + 1);
  };

  const handleEndCall = () => {
    if (!isCompleted) {
      toggleLessonComplete(lesson.id, lesson.xpReward);
    }
    router.back();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* Header */}
      <View className="flex-row items-center justify-between px-5 py-3">
        <TouchableOpacity
          onPress={() => router.back()}
          className="h-9 w-9 items-center justify-center"
        >
          <Ionicons name="chevron-back" size={24} color={colors.ink} />
        </TouchableOpacity>

        <View className="flex-1 ml-1">
          <Text className="h3 text-ink">AI Teacher</Text>
          <View className="mt-0.5 flex-row items-center gap-1.5">
            <View className="h-2 w-2 rounded-full bg-success" />
            <Text className="body-sm text-muted">Online</Text>
          </View>
        </View>

        <View className="flex-row items-center gap-2">
          <TouchableOpacity
            onPress={() => setIsCameraOn((value) => !value)}
            className="h-9 w-9 items-center justify-center rounded-full border border-border"
          >
            <Ionicons
              name={isCameraOn ? "videocam-outline" : "videocam-off-outline"}
              size={18}
              color={colors.ink}
            />
          </TouchableOpacity>
          <View className="h-9 min-w-[36px] items-center justify-center rounded-full border border-border px-2.5">
            <Text className="body-sm text-ink">{formatDuration(elapsedSeconds)}</Text>
          </View>
          <TouchableOpacity
            onPress={() => router.push("/(tabs)/profile")}
            className="h-9 w-9 items-center justify-center rounded-full border border-border"
          >
            <Ionicons name="person-outline" size={18} color={colors.ink} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Call / lesson area */}
      <View className="relative flex-1 overflow-hidden bg-surface">
        {/* Ambient scrim — spans the whole area so labels stay legible without a visible seam */}
        <LinearGradient
          colors={["transparent", "rgba(13,19,43,0.05)", "rgba(13,19,43,0.8)"]}
          locations={[0, 0.55, 1]}
          style={StyleSheet.absoluteFill}
        />

        {/* Lesson context pill */}
        <View className="absolute left-4 top-4 z-10 max-w-[62%] rounded-2xl bg-black/35 px-3 py-2">
          <View className="flex-row items-center gap-1.5">
            {language && (
              <Image
                source={{ uri: language.flag }}
                style={{ width: 16, height: 16, borderRadius: 8 }}
                contentFit="cover"
              />
            )}
            <Text className="body-sm text-white" numberOfLines={1}>
              {lesson.title}
            </Text>
          </View>
          <Text className="caption mt-0.5 text-white/80" numberOfLines={2}>
            {lesson.goal}
          </Text>
        </View>

        {/* Self camera preview placeholder */}
        {isCameraOn && (
          <View
            className="absolute right-4 top-4 z-10 overflow-hidden rounded-2xl border-2 border-white"
            style={styles.circleShadow}
          >
            {user?.imageUrl ? (
              <Image
                source={{ uri: user.imageUrl }}
                style={{ width: 88, height: 108 }}
                contentFit="cover"
              />
            ) : (
              <View className="h-[108px] w-[88px] items-center justify-center bg-surface">
                <Ionicons name="person" size={28} color={colors.muted} />
              </View>
            )}
          </View>
        )}

        {/* AI teacher — fills the remaining space, sitting exactly 50px above the bubble */}
        <View className="flex-1 items-center justify-end px-2" pointerEvents="none">
          <Image
            source={images.mascotWelcome}
            style={{ width: "108%", aspectRatio: 1, marginBottom: 10 }}
            contentFit="contain"
          />
        </View>

        <View className="px-5">
          <View className="mb-4 self-start rounded-3xl bg-white px-5 py-4" style={styles.circleShadow}>
            <Text className="h4 text-ink">{bubble.primary}</Text>
            <View className="mt-1 flex-row items-center justify-between">
              {showSubtitles && bubble.secondary ? (
                <Text className="body-md text-muted flex-1 pr-3">{bubble.secondary}</Text>
              ) : (
                <View className="flex-1" />
              )}
              <TouchableOpacity
                onPress={handleSpeak}
                className="h-9 w-9 items-center justify-center rounded-full bg-[#F0EDFE]"
              >
                <Ionicons
                  name={isSpeaking ? "volume-high" : "volume-medium-outline"}
                  size={18}
                  color={colors.primary}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View className="flex-row items-start justify-around px-2 pb-5 pt-1">
          <ControlButton
            icon={isCameraOn ? "videocam" : "videocam-off"}
            label="Camera"
            active={isCameraOn}
            inactiveTint
            onPress={() => setIsCameraOn((value) => !value)}
          />
          <ControlButton
            icon={isMicOn ? "mic" : "mic-off"}
            label="Mic"
            active={isMicOn}
            inactiveTint
            onPress={() => setIsMicOn((value) => !value)}
          />
          <ControlButton
            icon={showSubtitles ? "language" : "language-outline"}
            label="Subtitles"
            active={showSubtitles}
            onPress={() => setShowSubtitles((value) => !value)}
          />
          <TouchableOpacity activeOpacity={0.8} onPress={handleEndCall} className="items-center gap-2">
            <View
              className="h-14 w-14 items-center justify-center rounded-full bg-error"
              style={styles.circleShadow}
            >
              <Ionicons name="call" size={22} color="#ffffff" style={{ transform: [{ rotate: "135deg" }] }} />
            </View>
            <Text className="caption text-white">End Call</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Session feedback */}
      <View className="bg-white px-5 pb-4 pt-4">
        <View className="flex-row rounded-3xl border border-border bg-white py-4" style={styles.circleShadow}>
          {SESSION_FEEDBACK.map((item, index) => (
            <View
              key={item.label}
              className={`flex-1 items-center ${index !== 0 ? "border-l border-border" : ""}`}
            >
              <Text className="body-sm text-muted">{item.label}</Text>
              <Text className="h4 mt-1" style={{ color: item.color }}>
                {item.value}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  circleShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
});
