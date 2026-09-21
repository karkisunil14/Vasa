import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Stack, useRouter } from "expo-router";
import { useMemo, useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { LanguageCard } from "@/components/LanguageCard";
import { images } from "@/constants/images";
import { languages } from "@/data/languages";
import { useLanguageStore } from "@/store/languageStore";
import { colors } from "@/theme";

export default function LanguageSelection() {
  const router = useRouter();
  const selectedLanguageId = useLanguageStore((state) => state.selectedLanguageId);
  const setSelectedLanguage = useLanguageStore((state) => state.setSelectedLanguage);

  const [query, setQuery] = useState("");
  const [pendingId, setPendingId] = useState(selectedLanguageId);

  const filteredLanguages = useMemo(
    () =>
      languages.filter((language) =>
        language.name.toLowerCase().includes(query.trim().toLowerCase()),
      ),
    [query],
  );

  const handleConfirm = () => {
    if (!pendingId) return;
    setSelectedLanguage(pendingId);
    router.back();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <Stack.Screen options={{ headerShown: false }} />

      <View className="flex-row items-center px-2 py-3">
        <TouchableOpacity
          onPress={() => router.back()}
          className="h-9 w-9 items-center justify-center"
        >
          <Ionicons name="chevron-back" size={24} color={colors.ink} />
        </TouchableOpacity>
        <View className="flex-1 items-center">
          <Text className="h3 text-ink">Choose a language</Text>
        </View>
        <View className="h-9 w-9" />
      </View>

      <ScrollView
        className="flex-1 px-6"
        contentContainerStyle={{ paddingBottom: 32 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="mt-2 flex-row items-center gap-2 rounded-full bg-surface px-4 py-3">
          <Ionicons name="search" size={18} color={colors.muted} />
          <TextInput
            className="body-lg text-ink flex-1"
            value={query}
            onChangeText={setQuery}
            placeholder="Search languages"
            placeholderTextColor={colors.muted}
          />
        </View>

        <Text className="h4 text-ink mb-3 mt-6">Popular</Text>

        <View className="gap-3">
          {filteredLanguages.map((language) => (
            <LanguageCard
              key={language.id}
              language={language}
              selected={pendingId === language.id}
              onPress={() => setPendingId(language.id)}
            />
          ))}
        </View>

        <TouchableOpacity
          activeOpacity={0.85}
          onPress={handleConfirm}
          disabled={!pendingId}
          className="mt-6 items-center justify-center rounded-full bg-primary py-4"
          style={{ opacity: pendingId ? 1 : 0.5 }}
        >
          <Text className="h4 text-white">Confirm</Text>
        </TouchableOpacity>

        <Image
          source={images.earth}
          style={{ width: "100%", height: 220, marginTop: 24 }}
          contentFit="contain"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
