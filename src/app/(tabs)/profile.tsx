import { useClerk } from "@clerk/expo";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useLanguageStore } from "@/store/languageStore";

export default function Profile() {
  const { signOut } = useClerk();
  const clearSelectedLanguage = useLanguageStore((state) => state.clearSelectedLanguage);

  const handleClearLanguage = () => {
    clearSelectedLanguage();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="h2 text-ink">Profile</Text>
        <Text className="body-md text-muted mt-2">Coming soon</Text>

        <TouchableOpacity onPress={() => signOut()} className="mt-10">
          <Text className="h4 text-muted">Sign Out</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleClearLanguage} className="mt-6">
          <Text className="body-sm text-error">Clear Language (Test)</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
