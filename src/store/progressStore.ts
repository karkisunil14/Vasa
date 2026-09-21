import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export function getTodayKey() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

type ProgressStore = {
  xp: number;
  dailyXp: number;
  dailyXpDate: string;
  dailyGoalXp: number;
  streak: number;
  completedLessonIds: string[];
  hasHydrated: boolean;
  toggleLessonComplete: (lessonId: string, xpReward: number) => void;
  setHasHydrated: (hasHydrated: boolean) => void;
  resetProgress: () => void;
};

export const useProgressStore = create<ProgressStore>()(
  persist(
    (set, get) => ({
      xp: 0,
      dailyXp: 0,
      dailyXpDate: getTodayKey(),
      dailyGoalXp: 20,
      streak: 1,
      completedLessonIds: [],
      hasHydrated: false,
      toggleLessonComplete: (lessonId, xpReward) => {
        const { completedLessonIds, xp, dailyXp, dailyXpDate } = get();
        const isCompleted = completedLessonIds.includes(lessonId);
        const todayKey = getTodayKey();
        const currentDailyXp = dailyXpDate === todayKey ? dailyXp : 0;

        set({
          completedLessonIds: isCompleted
            ? completedLessonIds.filter((id) => id !== lessonId)
            : [...completedLessonIds, lessonId],
          xp: isCompleted ? Math.max(0, xp - xpReward) : xp + xpReward,
          dailyXp: isCompleted
            ? Math.max(0, currentDailyXp - xpReward)
            : currentDailyXp + xpReward,
          dailyXpDate: todayKey,
        });
      },
      setHasHydrated: (hasHydrated) => set({ hasHydrated }),
      resetProgress: () =>
        set({
          xp: 0,
          dailyXp: 0,
          dailyXpDate: getTodayKey(),
          streak: 1,
          completedLessonIds: [],
        }),
    }),
    {
      name: "progress-storage",
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: (initialState) => () => {
        initialState.setHasHydrated(true);
      },
    },
  ),
);
