import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        backgroundCream: "#f6f7eb", // New background cream
        folderCream: "#f5f5dc", // Cream background like manila folders
        folderWhite: "#ffffff", // Pure white
        inkBlack: "#000000", // Black ink
        inkGray: "#333333", // Dark gray ink
        folderTan: "#d2b48c", // Tan for folder accents
        folderBeige: "#f5deb3", // Beige borders
        folderBrown: "#8b4513", // Brown for emphasis
        primaryBlue: "#3e43f0", // Blue for buttons, borders, fonts
        darkerBlue: "#1e3a8a", // Darker blue for dark theme background
      },
      boxShadow: {
        'sm': '4px 4px 0px 0px rgba(62, 67, 240, 0.15)',
        'DEFAULT': '4px 4px 0px 0px rgba(62, 67, 240, 0.15)',
        'dark-sm': '4px 4px 0px 0px rgba(255, 255, 255, 0.1)',
        'dark': '4px 4px 0px 0px rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config
