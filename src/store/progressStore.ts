import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type ProgressStore = {
  xp: number;
  dailyGoalXp: number;
  streak: number;
  completedLessonIds: string[];
  hasHydrated: boolean;
  toggleLessonComplete: (lessonId: string, xpReward: number) => void;
  setHasHydrated: (hasHydrated: boolean) => void;
};

export const useProgressStore = create<ProgressStore>()(
  persist(
    (set, get) => ({
      xp: 0,
      dailyGoalXp: 20,
      streak: 1,
      completedLessonIds: [],
      hasHydrated: false,
      toggleLessonComplete: (lessonId, xpReward) => {
        const { completedLessonIds, xp } = get();
        const isCompleted = completedLessonIds.includes(lessonId);

        set({
          completedLessonIds: isCompleted
            ? completedLessonIds.filter((id) => id !== lessonId)
            : [...completedLessonIds, lessonId],
          xp: isCompleted ? Math.max(0, xp - xpReward) : xp + xpReward,
        });
      },
      setHasHydrated: (hasHydrated) => set({ hasHydrated }),
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
