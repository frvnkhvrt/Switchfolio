import type { Config } from "tailwindcss"
import { colors, fontFamily } from "./src/constants/theme"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        shimmer: 'shimmer 2s infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      colors: {
        ...colors,
      },
      boxShadow: {
        'sm': '2px 2px 0 0 rgba(0,0,0,1)',
        'DEFAULT': '4px 4px 0 0 rgba(0,0,0,1)',
        'neo': '4px 4px 0 0 rgba(0,0,0,1)',
        'neo-lg': '6px 6px 0 0 rgba(0,0,0,1)',
        'neo-xl': '10px 10px 0 0 rgba(0,0,0,1)',
        'dark-sm': '2px 2px 0 0 rgba(255,255,255,1)',
        'dark': '4px 4px 0 0 rgba(255,255,255,1)',
      },
      borderRadius: {
        'none': '0',
        'sm': '0',
        'DEFAULT': '0',
        'md': '0',
        'lg': '0',
        'xl': '0',
        '2xl': '0',
        '3xl': '0',
        'full': '9999px',
      },
      borderWidth: {
        'DEFAULT': '2px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
      fontFamily,
    },
  },
  plugins: [],
} satisfies Config
