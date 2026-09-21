import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center gap-2 bg-background px-6">
      <Text className="h1 text-primary">lingua</Text>
      <Text className="body-md text-muted text-center">
        Design system wired up — Poppins + Lingua color
      </Text>
      <Link href="/onboarding" className="h4 text-primary mt-4">
        View onboarding →
      </Link>
    </View>
  );
}
