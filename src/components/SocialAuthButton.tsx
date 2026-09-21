import { Ionicons } from "@expo/vector-icons";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

const PROVIDERS = {
  google: {
    icon: "logo-google",
    color: "#EA4335",
    label: "Continue with Google",
  },
  facebook: {
    icon: "logo-facebook",
    color: "#1877F2",
    label: "Continue with Facebook",
  },
  apple: {
    icon: "logo-apple",
    color: "#000000",
    label: "Continue with Apple",
  },
} as const;

type SocialAuthButtonProps = {
  provider: keyof typeof PROVIDERS;
  onPress?: () => void;
  loading?: boolean;
  disabled?: boolean;
};

export function SocialAuthButton({
  provider,
  onPress,
  loading = false,
  disabled = false,
}: SocialAuthButtonProps) {
  const { icon, color, label } = PROVIDERS[provider];

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled || loading}
      style={{ opacity: disabled && !loading ? 0.6 : 1 }}
      className="flex-row items-center justify-center gap-3 rounded-2xl border border-border py-3.5"
    >
      {loading ? (
        <ActivityIndicator color={color} size="small" />
      ) : (
        <Ionicons name={icon} size={20} color={color} />
      )}
      <Text className="h4 text-ink">{label}</Text>
    </TouchableOpacity>
  );
}
