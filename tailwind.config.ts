import type { Config } from "tailwindcss"

import defaultThemePreset from "./tailwind-theme-preset"

export default {
  darkMode: ["selector"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  presets: [defaultThemePreset],
} satisfies Config
