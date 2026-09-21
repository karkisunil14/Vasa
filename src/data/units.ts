import { Unit } from "@/types/learning";

export const units: Unit[] = [
  {
    id: "spanish-basics-1",
    languageId: "spanish",
    order: 1,
    title: "Basics 1",
    description: "Greetings, introductions, and everyday words.",
  },
  {
    id: "french-basics-1",
    languageId: "french",
    order: 1,
    title: "Basics 1",
    description: "Greetings, introductions, and everyday words.",
  },
  {
    id: "japanese-basics-1",
    languageId: "japanese",
    order: 1,
    title: "Basics 1",
    description: "Greetings, introductions, and everyday words.",
  },
  {
    id: "german-basics-1",
    languageId: "german",
    order: 1,
    title: "Basics 1",
    description: "Greetings, introductions, and everyday words.",
  },
  {
    id: "nepali-basics-1",
    languageId: "nepali",
    order: 1,
    title: "Basics 1",
    description: "Greetings, introductions, and everyday words.",
  },
];

export const getUnitsByLanguageId = (languageId: string): Unit[] =>
  units
    .filter((unit) => unit.languageId === languageId)
    .sort((a, b) => a.order - b.order);
