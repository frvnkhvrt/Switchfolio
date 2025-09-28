import type { Config } from "tailwindcss"
import { colors, shadows, fontFamily } from "./src/constants/theme"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors,
      boxShadow: {
        'sm': shadows.light,
        'DEFAULT': shadows.light,
        'dark-sm': shadows.dark,
        'dark': shadows.dark,
      },
      fontFamily,
    },
  },
  plugins: [],
} satisfies Config
