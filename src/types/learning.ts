// Core types for the hardcoded learning content system.
// Languages contain units, units contain lessons, and lessons contain the
// vocabulary/phrases/activities/AI teacher context needed to run them.

export type LessonType = "video" | "audio" | "chat" | "vocabulary";

export type ActivityType = "multiple-choice" | "translate" | "listen" | "match";

export interface Language {
  id: string;
  name: string;
  nativeName: string;
  /** CDN URL to the flag image (e.g. https://flagcdn.com/w320/{code}.png) */
  flag: string;
  description: string;
  /** Display label for the language selection screen, e.g. "28.4M learners" */
  learners: string;
}

export interface Unit {
  id: string;
  languageId: string;
  order: number;
  title: string;
  description: string;
}

export interface VocabularyItem {
  id: string;
  term: string;
  translation: string;
  pronunciation?: string;
  exampleSentence?: string;
}

export interface Phrase {
  id: string;
  text: string;
  translation: string;
  audioPrompt?: string;
}

export interface Activity {
  id: string;
  type: ActivityType;
  prompt: string;
  options?: string[];
  correctAnswer: string;
}

// Context fed to the Vision Agent AI teacher for audio-based lessons.
export interface AITeacherPrompt {
  systemPrompt: string;
  greeting: string;
  focusAreas: string[];
}

export interface Lesson {
  id: string;
  unitId: string;
  languageId: string;
  order: number;
  title: string;
  description: string;
  type: LessonType;
  xpReward: number;
  goal: string;
  vocabulary: VocabularyItem[];
  phrases: Phrase[];
  activities: Activity[];
  aiTeacherPrompt: AITeacherPrompt;
}
