/**
 * Unified Theme Constants
 * Extends designSystem with Tailwind-specific and legacy mappings
 * This file serves as a bridge between the comprehensive design system
 * and Tailwind CSS configuration for backward compatibility
 */

import { designSystem } from './designSystem'

// Re-export design system colors with legacy aliases for backward compatibility
export const colors = {
  // Light theme (maps to design system)
  light: {
    bg: designSystem.colors.light.bg,
    font: designSystem.colors.light.text,
    accent: designSystem.colors.light.accent,
  },

  // Dark theme (maps to design system)
  dark: {
    bg: designSystem.colors.dark.bg,
    font: designSystem.colors.dark.text,
    accent: designSystem.colors.dark.accent,
  },

  // Semantic colors (maps to design system)
  availableGreen: designSystem.colors.success.DEFAULT,
  primaryBlue: designSystem.colors.primary[500],
  primaryLight: designSystem.colors.primary[400],
  primaryDark: designSystem.colors.primary[600],

  // Additional colors (legacy aliases)
  folderCream: designSystem.colors.dark.border,
  folderWhite: designSystem.colors.light.surface,
} as const

// Shadow values (maps to design system)
export const shadows = {
  light: designSystem.shadows.custom.light,
  dark: designSystem.shadows.custom.dark,
} as const

// Border radius (maps to design system)
export const borderRadius = designSystem.borderRadius.none

// Font families (maps to design system via explicit definition)
export const fontFamily = {
  sans: ['Rubik', 'sans-serif'],
  mono: ['Geist Mono', 'monospace'],
}