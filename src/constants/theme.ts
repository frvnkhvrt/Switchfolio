/**
 * Tailwind Theme Bridge
 * Maps designSystem tokens to Tailwind-compatible format
 */

import { designSystem } from './designSystem'

// Semantic colors mapped for Tailwind consumption
export const colors = {
  surface: {
    DEFAULT: designSystem.colors.surface.DEFAULT,
    dark: designSystem.colors.surface.dark,
  },
  ink: {
    DEFAULT: designSystem.colors.ink.DEFAULT,
    dark: designSystem.colors.ink.dark,
  },
  'ink-secondary': {
    DEFAULT: designSystem.colors['ink-secondary'].DEFAULT,
    dark: designSystem.colors['ink-secondary'].dark,
  },
  'surface-alt': {
    DEFAULT: designSystem.colors['surface-alt'].DEFAULT,
    dark: designSystem.colors['surface-alt'].dark,
  },
  accent: designSystem.colors.accent,
  brand: designSystem.colors.brand,
  cta: designSystem.colors.cta,
  'status-ok': designSystem.colors['status-ok'],

  /** @deprecated Use semantic tokens: surface, ink, accent, brand */
  backgroundCream: designSystem.colors.surface.DEFAULT,
  inkBlack: designSystem.colors.ink.DEFAULT,
  darkerBlue: designSystem.colors.surface.dark,
  backgroundCreamDark: designSystem.colors.ink.dark,
  folderTan: designSystem.colors.accent,
  primaryBlue: designSystem.colors.brand,
  folderCream: designSystem.colors.accent,
  folderWhite: designSystem.colors.surface.DEFAULT,
} as const

// Shadow values
export const shadows = {
  light: '4px 4px 0px 0px rgba(62, 67, 240, 0.15)',
  dark: '4px 4px 0px 0px rgba(255, 255, 255, 0.1)',
} as const

// Border radius (Neobrutalist: always 0)
export const borderRadius = '0'

// Font families
export const fontFamily = {
  sans: ['Rubik', 'sans-serif'],
  mono: ['Geist Mono', 'monospace'],
}