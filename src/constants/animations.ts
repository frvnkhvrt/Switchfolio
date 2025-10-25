/**
 * Unified Animation System
 * Single source of truth for all animations across the site
 */

/**
 * Animation Durations (in seconds)
 * Use these consistently throughout the application
 */
export const DURATIONS = {
  instant: 0.1,    // For immediate feedback
  fast: 0.2,       // For hover states and quick interactions
  normal: 0.3,     // For standard transitions
  slow: 0.5,       // For page/section transitions
  emphasis: 1.5,   // For decorative/infinite animations
} as const

/**
 * Animation Easings
 * Consistent easing curves for natural motion
 */
export const EASINGS = {
  default: [0.25, 0.46, 0.45, 0.94] as const,  // Smooth in-out
  out: "easeOut" as const,                       // Quick start, slow end
  inOut: "easeInOut" as const,                   // Balanced
  spring: { type: "spring" as const, stiffness: 300, damping: 30 },
} as const

/**
 * Hover Animation Presets
 * Consistent hover behaviors for all interactive elements
 */
export const HOVER_PRESETS = {
  // Buttons and small interactive elements
  button: {
    scale: 1.05,
    transition: { duration: DURATIONS.fast, ease: EASINGS.out }
  },
  // Cards and medium-sized interactive areas
  card: {
    scale: 1.03,
    y: -2,
    transition: { duration: DURATIONS.fast, ease: EASINGS.out }
  },
  // Icons and small targets
  icon: {
    scale: 1.1,
    transition: { duration: DURATIONS.fast, ease: EASINGS.out }
  },
  // Tap/click feedback (universal)
  tap: {
    scale: 0.95,
    transition: { duration: DURATIONS.instant }
  },
} as const

/**
 * Entrance Animation Variants
 * For page load and scroll-triggered animations
 */
export const ENTRANCE_VARIANTS = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  blur: {
    initial: { opacity: 0, y: 20, filter: "blur(10px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, y: -20, filter: "blur(10px)" },
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  slideDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },
  slide: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },
  rotate: {
    initial: { opacity: 0, rotate: -10, scale: 0.95 },
    animate: { opacity: 1, rotate: 0, scale: 1 },
    exit: { opacity: 0, rotate: 10, scale: 0.95 },
  },
} as const

/**
 * Standard transition configuration
 * Use this for entrance animations
 */
export const ENTRANCE_TRANSITION = {
  duration: DURATIONS.normal,
  ease: EASINGS.default,
} as const

/**
 * Infinite animation configuration
 * For decorative elements (status dots, arrows, etc)
 */
export const INFINITE_ANIMATION = {
  duration: DURATIONS.emphasis,
  repeat: Infinity,
  ease: EASINGS.inOut,
} as const

/**
 * CSS Transition Strings
 * For use in className or style attributes
 */
export const CSS_TRANSITIONS = {
  colors: `transition-colors duration-200 ease-out`,
  all: `transition-all duration-200 ease-out`,
  transform: `transition-transform duration-200 ease-out`,
  opacity: `transition-opacity duration-200 ease-out`,
} as const
