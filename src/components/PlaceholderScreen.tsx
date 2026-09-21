import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type PlaceholderScreenProps = {
  title: string;
};

export function PlaceholderScreen({ title }: PlaceholderScreenProps) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="h2 text-ink">{title}</Text>
        <Text className="body-md text-muted mt-2">Coming soon</Text>
      </View>
    </SafeAreaView>
  );
}
