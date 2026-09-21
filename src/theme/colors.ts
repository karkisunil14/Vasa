/**
 * Design tokens: colors.
 * Mirrors the `@theme` color variables defined in `src/global.css`.
 * Use this file when you need a raw hex value in JS (e.g. icon `color` props,
 * SVG fills, `StatusBar` backgrounds) instead of a `className`.
 */
export const colors = {
  // Brand
  primary: "#6C4EF5", // Lingua Purple
  primaryDark: "#5B3BF6", // Lingua Deep Purple
  accentBlue: "#4D8BFF", // Lingua Blue
  accentGreen: "#21C16B", // Lingua Green

  // Semantic
  success: "#21C16B",
  warning: "#FFC800",
  streak: "#FF8A00",
  error: "#FF4D4F",
  info: "#4D8BFF",

  // Neutrals
  ink: "#0D132B", // Text / Primary
  muted: "#6B7280", // Text / Secondary
  border: "#E5E7EB",
  surface: "#F6F7FB",
  background: "#FFFFFF",
} as const;

export type ColorToken = keyof typeof colors;
