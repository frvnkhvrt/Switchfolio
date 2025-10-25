// Common constants used across the application

// Link attributes
export const LINK_ATTRIBUTES = {
  target: "_blank" as const,
  rel: "noopener noreferrer" as const,
} as const

// Aria labels
export const ARIA_LABELS = {
  profileImage: (name: string) => `View ${name}'s profile image`,
  socialLink: (name: string) => `${name} (opens in new tab)`,
} as const

// Component sizes
export const COMPONENT_SIZES = {
  profileImage: {
    width: 35,
    height: 35,
  },
  profileImageModal: {
    width: 200,
    height: 200,
  },
  modalImage: {
    width: 600,
    height: 600,
  },
} as const

// Animation delays
export const ANIMATION_DELAYS = {
  default: 0,
  short: 0.15,
  medium: 0.25,
  long: 0.45,
  extra: 0.55,
  super: 0.65,
  hyper: 0.75,
  mega: 0.95,
  giga: 1.15,
} as const

// List visibility
export const LIST_VISIBILITY = {
  defaultVisible: 2,
} as const

// Layout constants
export const LAYOUT = {
  maxWidth: '900px',
  navBottomOffset: '1.5rem', // 24px
  navZIndex: 40,
  screenPadding: {
    mobile: '1rem',
    tablet: '1.5rem',
    desktop: '2rem',
  },
  screenPaddingBottom: {
    mobile: '4rem',
    tablet: '5rem',
    desktop: '6rem',
  },
} as const

// Navigation constants
export const NAVIGATION = {
  height: '64px',
  bottomOffset: '1.5rem',
  iconSize: '1.5rem', // 24px
  profileImageSize: 48,
  gapBetweenItems: '1rem',
  animationStagger: 0.1,
} as const

// Interaction timing (in milliseconds)
export const TIMING = {
  clickDelay: 300,
  hoverDelay: 150,
  debounceDelay: 250,
  tooltipDelay: 500,
} as const

// Image dimensions
export const IMAGE_SIZES = {
  profile: {
    small: 35,
    medium: 48,
    large: 150,
    modal: 200,
  },
  thumbnail: {
    width: 300,
    height: 200,
  },
  hero: {
    width: 1200,
    height: 630,
  },
} as const

// Responsive breakpoint values (matches Tailwind)
export const BREAKPOINTS = {
  xs: 320,
  sm: 375,
  md: 768,
  lg: 1024,
  xl: 1440,
  '2xl': 2560,
} as const

// Re-export hover animations from unified system
export { HOVER_PRESETS as HOVER_ANIMATIONS } from './animations'