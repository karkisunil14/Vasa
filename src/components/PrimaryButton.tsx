import { LinearGradient } from "expo-linear-gradient";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

import { colors } from "@/theme";

type PrimaryButtonProps = {
  title: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
};

export function PrimaryButton({
  title,
  onPress,
  loading = false,
  disabled = false,
}: PrimaryButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      disabled={disabled || loading}
      className="overflow-hidden rounded-full"
      style={{ opacity: disabled ? 0.6 : 1 }}
    >
      <LinearGradient
        colors={[colors.primary, colors.primaryDark]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ alignItems: "center", justifyContent: "center", paddingVertical: 16 }}
      >
        {loading ? (
          <ActivityIndicator color="#ffffff" />
        ) : (
          <Text className="h4 text-white">{title}</Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
}
