import { Language } from "@/types/learning";

export const languages: Language[] = [
  {
    id: "spanish",
    name: "Spanish",
    nativeName: "Español",
    flag: "https://flagcdn.com/w320/es.png",
    description: "Speak the language of over 20 countries.",
    learners: "28.4M learners",
  },
  {
    id: "french",
    name: "French",
    nativeName: "Français",
    flag: "https://flagcdn.com/w320/fr.png",
    description: "The language of art, food, and diplomacy.",
    learners: "19.4M learners",
  },
  {
    id: "japanese",
    name: "Japanese",
    nativeName: "日本語",
    flag: "https://flagcdn.com/w320/jp.png",
    description: "Unlock a new alphabet and a rich culture.",
    learners: "12.7M learners",
  },
  {
    id: "korean",
    name: "Korean",
    nativeName: "한국어",
    flag: "https://flagcdn.com/w320/kr.png",
    description: "Dive into K-pop, K-dramas, and Korean culture.",
    learners: "9.3M learners",
  },
  {
    id: "german",
    name: "German",
    nativeName: "Deutsch",
    flag: "https://flagcdn.com/w320/de.png",
    description: "A gateway to Central Europe's biggest economy.",
    learners: "8.1M learners",
  },
  {
    id: "chinese",
    name: "Chinese",
    nativeName: "中文",
    flag: "https://flagcdn.com/w320/cn.png",
    description: "Learn the most spoken language in the world.",
    learners: "7.4M learners",
  },
  {
    id: "nepali",
    name: "Nepali",
    nativeName: "नेपाली",
    flag: "https://flagcdn.com/w320/np.png",
    description: "The language of the Himalayas and vibrant culture.",
    learners: "1.2M learners",
  },
];

export const getLanguageById = (languageId: string): Language | undefined =>
  languages.find((language) => language.id === languageId);
