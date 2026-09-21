import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Text, TouchableOpacity, View } from "react-native";

import { colors } from "@/theme";
import { Language } from "@/types/learning";

type LanguageCardProps = {
  language: Language;
  selected: boolean;
  onPress: () => void;
};

export function LanguageCard({ language, selected, onPress }: LanguageCardProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className={`flex-row items-center gap-3 rounded-2xl border px-4 py-3 ${
        selected ? "border-primary bg-[#F5F3FF]" : "border-border bg-white"
      }`}
    >
      <Image
        source={{ uri: language.flag }}
        style={{ width: 48, height: 48, borderRadius: 24 }}
        contentFit="cover"
      />
      <View className="flex-1">
        <Text className="h4 text-ink">{language.name}</Text>
        <Text className="body-sm text-muted mt-0.5">{language.learners}</Text>
      </View>
      {selected ? (
        <View className="h-7 w-7 items-center justify-center rounded-full bg-primary">
          <Ionicons name="checkmark" size={16} color="#ffffff" />
        </View>
      ) : (
        <Ionicons name="chevron-forward" size={20} color={colors.muted} />
      )}
    </TouchableOpacity>
  );
}
