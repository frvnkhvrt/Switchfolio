/**
 * Comprehensive Design System
 * Establishes consistent spacing, typography, colors, and animation values
 */

// Spacing Scale (4px base unit)
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

// Typography Scale with Fluid Sizing
export const typography = {
  fontSize: {
    xs: 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)', // 12-14px
    sm: 'clamp(0.875rem, 0.825rem + 0.25vw, 1rem)', // 14-16px
    base: 'clamp(1rem, 0.95rem + 0.25vw, 1.125rem)', // 16-18px
    lg: 'clamp(1.125rem, 1.05rem + 0.375vw, 1.25rem)', // 18-20px
    xl: 'clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem)', // 20-24px
    '2xl': 'clamp(1.5rem, 1.35rem + 0.75vw, 1.875rem)', // 24-30px
    '3xl': 'clamp(1.875rem, 1.65rem + 1.125vw, 2.25rem)', // 30-36px
    '4xl': 'clamp(2.25rem, 1.95rem + 1.5vw, 3rem)', // 36-48px
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
  letterSpacing: {
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
  },
} as const

// Color System with Semantic Naming
export const colors = {
  // Brand Colors
  primary: {
    50: '#f0f4ff',
    100: '#e0e9ff',
    200: '#c7d7fe',
    300: '#a5b8fc',
    400: '#8b96f8',
    500: '#3e43f0', // Main brand color
    600: '#3538d4',
    700: '#2c2fb8',
    800: '#24279c',
    900: '#1c1f80',
  },
  
  // Neutral Colors
  neutral: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
  
  // Semantic Colors
  success: {
    light: '#86efac',
    DEFAULT: '#22c55e',
    dark: '#16a34a',
  },
  warning: {
    light: '#fcd34d',
    DEFAULT: '#f59e0b',
    dark: '#d97706',
  },
  error: {
    light: '#fca5a5',
    DEFAULT: '#ef4444',
    dark: '#dc2626',
  },
  info: {
    light: '#93c5fd',
    DEFAULT: '#3b82f6',
    dark: '#2563eb',
  },
  
  // Theme-specific
  light: {
    bg: '#f0f6ff',
    surface: '#ffffff',
    text: '#000000',
    textSecondary: '#4b5563',
    border: '#3e43f0',
    accent: '#ecd4b4',
  },
  dark: {
    bg: '#0f172a',
    surface: '#1e293b',
    text: '#f0f6ff',
    textSecondary: '#cbd5e1',
    border: '#f5f5dc',
    accent: '#ecd4b4',
  },
} as const

// Animation System
export const animation = {
  duration: {
    instant: '0.1s',
    fast: '0.15s',
    normal: '0.3s',
    slow: '0.5s',
    slower: '0.75s',
  },
  easing: {
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    spring: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
  spring: {
    gentle: { stiffness: 120, damping: 14 },
    default: { stiffness: 170, damping: 26 },
    wobbly: { stiffness: 180, damping: 12 },
    stiff: { stiffness: 260, damping: 20 },
  },
} as const

// Shadows
export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  custom: {
    light: '4px 4px 0px 0px rgba(62, 67, 240, 0.15)',
    dark: '4px 4px 0px 0px rgba(255, 255, 255, 0.1)',
  },
} as const

// Border Radius
export const borderRadius = {
  none: '0',
  sm: '0.125rem',
  DEFAULT: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  full: '9999px',
} as const

// Breakpoints
export const breakpoints = {
  xs: '320px',
  sm: '375px',
  md: '768px',
  lg: '1024px',
  xl: '1440px',
  '2xl': '2560px',
} as const

// Z-Index Scale
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
} as const

// Touch Target Sizes (Accessibility)
export const touchTarget = {
  minimum: '44px',
  comfortable: '48px',
  large: '56px',
} as const

// Focus Ring Styles
export const focusRing = {
  width: '2px',
  offset: '2px',
  style: 'solid',
  color: {
    light: colors.primary[500],
    dark: colors.light.accent,
  },
} as const

// Transition Presets
export const transitions = {
  default: `all ${animation.duration.normal} ${animation.easing.easeInOut}`,
  fast: `all ${animation.duration.fast} ${animation.easing.easeOut}`,
  slow: `all ${animation.duration.slow} ${animation.easing.spring}`,
  colors: `color ${animation.duration.normal} ${animation.easing.easeInOut}, background-color ${animation.duration.normal} ${animation.easing.easeInOut}, border-color ${animation.duration.normal} ${animation.easing.easeInOut}`,
  transform: `transform ${animation.duration.normal} ${animation.easing.spring}`,
  opacity: `opacity ${animation.duration.normal} ${animation.easing.easeInOut}`,
} as const

// Accessibility
export const a11y = {
  contrast: {
    minimum: 4.5, // WCAG AA for normal text
    large: 3, // WCAG AA for large text (18pt+)
    enhanced: 7, // WCAG AAA
  },
  focusVisible: {
    outline: `${focusRing.width} ${focusRing.style}`,
    outlineOffset: focusRing.offset,
  },
  reducedMotion: {
    duration: animation.duration.instant,
    easing: animation.easing.linear,
  },
} as const

// Export all as a single design system object
export const designSystem = {
  spacing,
  typography,
  colors,
  animation,
  shadows,
  borderRadius,
  breakpoints,
  zIndex,
  touchTarget,
  focusRing,
  transitions,
  a11y,
} as const

export type DesignSystem = typeof designSystem