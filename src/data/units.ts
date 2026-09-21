import { placeholderImage } from "@/lib/images";
import { Unit } from "@/types/learning";

export const units: Unit[] = [
  {
    id: "spanish-basics-1",
    languageId: "spanish",
    order: 1,
    title: "Basics 1",
    description: "Greetings, introductions, and everyday words.",
    image: placeholderImage("spanish-basics-1"),
  },
  {
    id: "french-basics-1",
    languageId: "french",
    order: 1,
    title: "Basics 1",
    description: "Greetings, introductions, and everyday words.",
    image: placeholderImage("french-basics-1"),
  },
  {
    id: "japanese-basics-1",
    languageId: "japanese",
    order: 1,
    title: "Basics 1",
    description: "Greetings, introductions, and everyday words.",
    image: placeholderImage("japanese-basics-1"),
  },
  {
    id: "korean-basics-1",
    languageId: "korean",
    order: 1,
    title: "Basics 1",
    description: "Greetings, introductions, and everyday words.",
    image: placeholderImage("korean-basics-1"),
  },
  {
    id: "german-basics-1",
    languageId: "german",
    order: 1,
    title: "Basics 1",
    description: "Greetings, introductions, and everyday words.",
    image: placeholderImage("german-basics-1"),
  },
  {
    id: "chinese-basics-1",
    languageId: "chinese",
    order: 1,
    title: "Basics 1",
    description: "Greetings, introductions, and everyday words.",
    image: placeholderImage("chinese-basics-1"),
  },
  {
    id: "nepali-basics-1",
    languageId: "nepali",
    order: 1,
    title: "Basics 1",
    description: "Greetings, introductions, and everyday words.",
    image: placeholderImage("nepali-basics-1"),
  },
];

export const getUnitsByLanguageId = (languageId: string): Unit[] =>
  units
    .filter((unit) => unit.languageId === languageId)
    .sort((a, b) => a.order - b.order);
