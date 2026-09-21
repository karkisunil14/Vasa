import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

type TodayPlanItemProps = {
  icon: keyof typeof Ionicons.glyphMap;
  iconBgClassName: string;
  iconColor: string;
  title: string;
  subtitle: string;
  completed: boolean;
  onToggle: () => void;
};

export function TodayPlanItem({
  icon,
  iconBgClassName,
  iconColor,
  title,
  subtitle,
  completed,
  onToggle,
}: TodayPlanItemProps) {
  return (
    <View className="flex-row items-center gap-3 py-3">
      <View className={`h-11 w-11 items-center justify-center rounded-xl ${iconBgClassName}`}>
        <Ionicons name={icon} size={20} color={iconColor} />
      </View>

      <View className="flex-1">
        <Text className="h4 text-ink">{title}</Text>
        <Text className="body-sm text-muted mt-0.5">{subtitle}</Text>
      </View>

      <Pressable
        onPress={onToggle}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: completed }}
        className={`h-7 w-7 items-center justify-center rounded-full ${
          completed ? "bg-primary" : "border-2 border-border"
        }`}
      >
        {completed && <Ionicons name="checkmark" size={16} color="#ffffff" />}
      </Pressable>
    </View>
  );
}
