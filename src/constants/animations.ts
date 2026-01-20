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

/**
 * Scroll-triggered animation variants
 * For use with Framer Motion's whileInView
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
  slideFromLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
    },
  },
} as const

/**
 * Stagger container variants
 * Parent wrapper for staggered children animations
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
 * For children inside stagger containers
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
 * For interactive card hover effects
 */
export const TILT_CONFIG = {
  maxTilt: 5, // degrees
  perspective: 1000,
  scale: 1.02,
  transitionDuration: 0.3,
} as const

/**
 * Text reveal animation variants
 * For character-by-character or word-by-word reveals
 */
export const TEXT_REVEAL = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1,
      },
    },
  },
  character: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  },
  word: {
    hidden: { opacity: 0, y: 15, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  },
} as const

/**
 * Premium spring configurations
 * For more natural, physics-based animations
 */
export const PREMIUM_SPRINGS = {
  smooth: { type: "spring", stiffness: 100, damping: 20 },
  snappy: { type: "spring", stiffness: 400, damping: 30 },
  bouncy: { type: "spring", stiffness: 300, damping: 15 },
  gentle: { type: "spring", stiffness: 80, damping: 25 },
} as const

/**
 * Float animation for decorative elements
 */
export const FLOAT_ANIMATION = {
  y: [0, -8, 0] as number[],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
}

/**
 * Glow pulse animation for buttons/CTAs
 */
export const GLOW_PULSE = {
  boxShadow: [
    "0 0 20px rgba(62, 67, 240, 0.3)",
    "0 0 30px rgba(62, 67, 240, 0.5)",
    "0 0 20px rgba(62, 67, 240, 0.3)",
  ] as string[],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
}
