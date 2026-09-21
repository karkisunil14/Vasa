import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { getLessonById } from "@/data/lessons";
import { useProgressStore } from "@/store/progressStore";
import { colors } from "@/theme";

export default function LessonDetail() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const completedLessonIds = useProgressStore((state) => state.completedLessonIds);
  const toggleLessonComplete = useProgressStore((state) => state.toggleLessonComplete);

  const lesson = getLessonById(id);

  if (!lesson) {
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

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <Stack.Screen options={{ headerShown: false }} />

      <View className="flex-row items-center px-2 py-3">
        <TouchableOpacity onPress={() => router.back()} className="h-9 w-9 items-center justify-center">
          <Ionicons name="chevron-back" size={24} color={colors.ink} />
        </TouchableOpacity>
        <View className="flex-1 items-center">
          <Text className="h4 text-ink">{lesson.title}</Text>
        </View>
        <View className="h-9 w-9" />
      </View>

      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 32 }}>
        <Image
          source={{ uri: lesson.image }}
          style={{ width: "100%", height: 200 }}
          contentFit="cover"
        />

        <View className="px-5">
          <Text className="h2 text-ink mt-5">{lesson.title}</Text>
          <Text className="body-md text-muted mt-2">{lesson.description}</Text>

          <View className="mt-4 flex-row items-center gap-2">
            <Ionicons name="flash" size={18} color={colors.streak} />
            <Text className="body-md text-ink">{lesson.xpReward} XP</Text>
          </View>

          <Text className="h3 text-ink mt-6">Vocabulary</Text>
          <View className="mt-3 gap-3">
            {lesson.vocabulary.map((item) => (
              <View key={item.id} className="rounded-2xl border border-border bg-white p-4">
                <Text className="h4 text-ink">{item.term}</Text>
                <Text className="body-sm text-muted mt-0.5">{item.translation}</Text>
              </View>
            ))}
          </View>

          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => toggleLessonComplete(lesson.id, lesson.xpReward)}
            className={`mt-8 items-center justify-center rounded-full py-4 ${
              isCompleted ? "bg-surface" : "bg-primary"
            }`}
          >
            <Text className={`h4 ${isCompleted ? "text-muted" : "text-white"}`}>
              {isCompleted ? "Mark as incomplete" : "Mark as complete"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
