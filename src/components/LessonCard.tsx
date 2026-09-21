import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Text, TouchableOpacity, View } from "react-native";

import { colors } from "@/theme";
import type { Lesson } from "@/types/learning";

export type LessonStatus = "completed" | "current" | "locked";

type LessonCardProps = {
  lesson: Lesson;
  status: LessonStatus;
  onPress: () => void;
};

export function LessonCard({ lesson, status, onPress }: LessonCardProps) {
  const isCurrent = status === "current";
  const isCompleted = status === "completed";

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className={`mb-3 flex-row items-center gap-3 rounded-2xl border px-4 py-4 ${
        isCurrent ? "border-primary bg-[#F5F3FF]" : "border-border bg-white"
      }`}
    >
      <View className="flex-1">
        <Text className={`body-sm ${isCurrent ? "text-primary" : "text-muted"}`}>
          Lesson {lesson.order}
        </Text>
        <Text className="h4 text-ink mt-0.5">{lesson.title}</Text>
        {isCurrent && <Text className="body-sm text-primary mt-0.5">In progress</Text>}
      </View>

      {isCompleted && (
        <View className="h-8 w-8 items-center justify-center rounded-full bg-success">
          <Ionicons name="checkmark" size={18} color="#ffffff" />
        </View>
      )}

      {isCurrent && (
        <Image
          source={{ uri: lesson.image }}
          style={{ width: 44, height: 44, borderRadius: 12 }}
          contentFit="cover"
        />
      )}

      {status === "locked" && <Ionicons name="lock-closed" size={20} color={colors.muted} />}
    </TouchableOpacity>
  );
}
