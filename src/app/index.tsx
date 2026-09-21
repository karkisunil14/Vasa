import { useAuth } from "@clerk/expo";
import { Redirect } from "expo-router";

import { getLanguageById } from "@/data/languages";
import { useLanguageStore } from "@/store/languageStore";

export default function Index() {
  const { isLoaded, isSignedIn } = useAuth();
  const selectedLanguageId = useLanguageStore((state) => state.selectedLanguageId);
  const hasHydrated = useLanguageStore((state) => state.hasHydrated);
  const selectedLanguage = selectedLanguageId ? getLanguageById(selectedLanguageId) : undefined;

  if (!isLoaded || !hasHydrated) {
    return null;
  }

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

  if (!selectedLanguage) {
    return <Redirect href="/language-selection" />;
  }

  return <Redirect href="/(tabs)" />;
}
