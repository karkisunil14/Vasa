import { useAuth, useClerk, useUser } from "@clerk/expo";
import { Redirect, useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

import { getLanguageById } from "@/data/languages";
import { useLanguageStore } from "@/store/languageStore";

export default function Index() {
  const router = useRouter();
  const { isLoaded, isSignedIn } = useAuth();
  const { user } = useUser();
  const { signOut } = useClerk();
  const selectedLanguageId = useLanguageStore((state) => state.selectedLanguageId);
  const selectedLanguage = selectedLanguageId ? getLanguageById(selectedLanguageId) : undefined;

  if (!isLoaded) {
    return null;
  }

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <View className="flex-1 items-center justify-center gap-2 bg-background px-6">
      <Text className="h1 text-primary">lingua</Text>
      <Text className="body-md text-muted text-center">
        You&apos;re signed in
        {user?.primaryEmailAddress ? ` as ${user.primaryEmailAddress.emailAddress}` : ""}.
      </Text>
      <TouchableOpacity
        onPress={() => router.push("/language-selection")}
        className="mt-6 rounded-full bg-primary px-6 py-3"
      >
        <Text className="h4 text-white">
          {selectedLanguage ? `Learning ${selectedLanguage.name}` : "Choose a language"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => signOut()} className="mt-4">
        <Text className="h4 text-primary">Sign out</Text>
      </TouchableOpacity>
    </View>
  );
}
