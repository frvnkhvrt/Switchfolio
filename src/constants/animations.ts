/**
 * Unified Animation System
 * Single source of truth for all animations across the site
 */

/**
 * Animation Durations (in seconds)
 */
export const DURATIONS = {
  instant: 0.1,
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  emphasis: 1.5,
} as const

/**
 * Animation Easings
 */
export const EASINGS = {
  default: [0.25, 0.46, 0.45, 0.94] as const,
  out: "easeOut" as const,
  inOut: "easeInOut" as const,
  spring: { type: "spring" as const, stiffness: 300, damping: 30 },
} as const

/**
 * Hover Animation Presets
 */
export const HOVER_PRESETS = {
  button: {
    scale: 1.05,
    transition: { duration: DURATIONS.fast, ease: EASINGS.out }
  },
  card: {
    scale: 1.03,
    y: -2,
    transition: { duration: DURATIONS.fast, ease: EASINGS.out }
  },
  icon: {
    scale: 1.1,
    transition: { duration: DURATIONS.fast, ease: EASINGS.out }
  },
  tap: {
    scale: 0.95,
    transition: { duration: DURATIONS.instant }
  },
} as const

/**
 * Entrance Animation Variants
 */
export const ENTRANCE_VARIANTS = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  blur: {
    initial: { opacity: 0, scale: 0.95, y: 10 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: -10 },
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
  /** Page section entrance: blur + slide up (IndexPage sections) */
  blurUp: {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  /** Simple fade for stagger children (hidden/visible keys) */
  fadeStagger: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
} as const

/** Transition for blurUp section entrance */
export const BLUR_UP_TRANSITION = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1] as const,
} as const

/**
 * Standard entrance transition
 */
export const ENTRANCE_TRANSITION = {
  duration: DURATIONS.normal,
  ease: EASINGS.default,
} as const

/**
 * Infinite animation (status dots, decorative elements)
 */
export const INFINITE_ANIMATION = {
  duration: DURATIONS.emphasis,
  repeat: Infinity,
  ease: EASINGS.inOut,
} as const

/**
 * CSS Transition Strings
 */
export const CSS_TRANSITIONS = {
  colors: `transition-colors duration-200 ease-out`,
  all: `transition-all duration-200 ease-out`,
  transform: `transition-transform duration-200 ease-out`,
  opacity: `transition-opacity duration-200 ease-out`,
} as const

/**
 * Scroll-triggered animation variants
 */
export const SCROLL_VARIANTS = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
    },
  },
} as const

/**
 * Stagger container variants
 */
export const STAGGER_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
} as const

/**
 * Stagger item variants
 */
export const STAGGER_ITEM = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
} as const

/**
 * 3D Tilt effect configuration
 */
export const TILT_CONFIG = {
  maxTilt: 5,
  perspective: 1000,
  scale: 1.02,
  transitionDuration: 0.3,
} as const
