/**
 * Design System — Single Source of Truth
 * Neobrutalist token architecture
 */

// ============================================================================
// SPACING SCALE (4px base unit)
// ============================================================================

export const spacing = {
  0: '0',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
} as const

// ============================================================================
// TYPOGRAPHY
// ============================================================================

export const typography = {
  fontSize: {
    xs: 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
    sm: 'clamp(0.875rem, 0.825rem + 0.25vw, 1rem)',
    base: 'clamp(1rem, 0.95rem + 0.25vw, 1.125rem)',
    lg: 'clamp(1.125rem, 1.05rem + 0.375vw, 1.25rem)',
    xl: 'clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem)',
    '2xl': 'clamp(1.5rem, 1.35rem + 0.75vw, 1.875rem)',
    '3xl': 'clamp(1.875rem, 1.65rem + 1.125vw, 2.25rem)',
    '4xl': 'clamp(2.25rem, 1.95rem + 1.5vw, 3rem)',
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const

// ============================================================================
// SEMANTIC COLOR SYSTEM
// ============================================================================

export const colors = {
  // Core semantic tokens — these are what components use
  surface: {
    DEFAULT: '#ffffff',     // Light mode background
    dark: '#000000',        // Dark mode background
  },
  ink: {
    DEFAULT: '#000000',     // Light mode text
    dark: '#ffffff',        // Dark mode text
  },
  'ink-secondary': {
    DEFAULT: '#4b5563',     // Light mode secondary text
    dark: '#d1d5db',        // Dark mode secondary text
  },
  'surface-alt': {
    DEFAULT: '#f3f4f6',     // Light mode alt surface (expanded areas, nav cells)
    dark: '#111827',        // Dark mode alt surface
  },
  accent: '#ecd4b4',       // Accent color (same both modes)
  brand: '#3e43f0',        // Brand blue
  cta: '#FFD700',          // CTA yellow (same both modes)
  'status-ok': '#22c55e',  // Status indicator green

  // Brand scale (for rare use)
  primary: {
    400: '#8b96f8',
    500: '#3e43f0',
    600: '#3538d4',
  },
} as const

// ============================================================================
// SHADOWS (Neobrutalist — hard offset, no blur)
// ============================================================================

export const shadows = {
  sm: '2px 2px 0 0 rgba(0,0,0,1)',
  DEFAULT: '4px 4px 0 0 rgba(0,0,0,1)',
  neo: '4px 4px 0 0 rgba(0,0,0,1)',
  'neo-lg': '6px 6px 0 0 rgba(0,0,0,1)',
  'neo-xl': '10px 10px 0 0 rgba(0,0,0,1)',
  'dark-sm': '2px 2px 0 0 rgba(255,255,255,1)',
  dark: '4px 4px 0 0 rgba(255,255,255,1)',
} as const

// ============================================================================
// Z-INDEX SCALE
// ============================================================================

export const zIndex = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  modalBackdrop: 40,
  modal: 50,
  popover: 60,
  tooltip: 70,
  notification: 80,
  bootSequence: 10000,
  /** Full-screen overlays (boot transition, mode transition, custom cursor) */
  fullScreenOverlay: 10001,
} as const

// ============================================================================
// BREAKPOINTS
// ============================================================================

export const breakpoints = {
  xs: '320px',
  sm: '375px',
  md: '768px',
  lg: '1024px',
  xl: '1440px',
  '2xl': '2560px',
} as const

// ============================================================================
// ACCESSIBILITY
// ============================================================================

export const touchTarget = {
  minimum: '44px',
  comfortable: '48px',
  large: '56px',
} as const

export const focusRing = {
  width: '2px',
  offset: '2px',
  style: 'solid',
  color: {
    light: colors.brand,
    dark: colors.accent,
  },
} as const

// ============================================================================
// COMPOSITE EXPORT
// ============================================================================

export const designSystem = {
  spacing,
  typography,
  colors,
  shadows,
  zIndex,
  breakpoints,
  touchTarget,
  focusRing,
} as const

export type DesignSystem = typeof designSystem