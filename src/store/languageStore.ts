import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type LanguageStore = {
  selectedLanguageId: string | null;
  setSelectedLanguage: (languageId: string) => void;
};

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set) => ({
      selectedLanguageId: null,
      setSelectedLanguage: (languageId) => set({ selectedLanguageId: languageId }),
    }),
    {
      name: "language-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
