/**
 * Application Constants
 * Centralized constants for consistency across the application
 */

// ============================================================================
// ACCESSIBILITY CONSTANTS
// ============================================================================

/**
 * Standard attributes for external links
 */
export const LINK_ATTRIBUTES = {
  target: "_blank" as const,
  rel: "noopener noreferrer" as const,
} as const

/**
 * ARIA label generators for accessibility
 */
export const ARIA_LABELS = {
  profileImage: (name: string) => `View ${name}'s profile image`,
  socialLink: (name: string) => `${name} (opens in new tab)`,
  projectStatus: (title: string, status: string) => `${title} project - ${status}`,
  expandableSection: (isExpanded: boolean) => isExpanded ? 'Collapse section' : 'Expand section',
} as const

// ============================================================================
// COMPONENT DIMENSIONS
// ============================================================================

/**
 * Standard component sizes for consistency
 */
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

// ============================================================================
// UI BEHAVIOR CONSTANTS
// ============================================================================

/**
 * Animation delays for staggered entrance effects (in seconds)
 * @deprecated Use 0 delay for instant feedback - kept for backward compatibility
 */
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

/**
 * Default visibility settings for lists
 */
export const LIST_VISIBILITY = {
  defaultVisible: 2,
  showMoreIncrement: 5,
} as const

// ============================================================================
// LAYOUT CONSTANTS
// ============================================================================

/**
 * Layout dimensions and spacing
 */
export const LAYOUT = {
  maxWidth: '900px',
  navBottomOffset: '1.5rem',
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
  contentGap: {
    small: '0.75rem',
    medium: '1.5rem',
    large: '2rem',
  },
} as const

/**
 * Navigation bar configuration
 */
export const NAVIGATION = {
  height: '64px',
  bottomOffset: '1.5rem',
  iconSize: '1.5rem',
  profileImageSize: 48,
  gapBetweenItems: '1rem',
  animationStagger: 0.1,
} as const

// ============================================================================
// TIMING CONSTANTS
// ============================================================================

/**
 * Interaction timing values (in milliseconds)
 */
export const TIMING = {
  clickDelay: 300,
  hoverDelay: 150,
  debounceDelay: 250,
  tooltipDelay: 500,
  transitionDuration: 200,
} as const

/**
 * Image dimension presets for Next.js Image optimization
 */
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

// ============================================================================
// RESPONSIVE BREAKPOINTS
// ============================================================================

/**
 * Responsive breakpoint values (matches Tailwind and designSystem)
 */
export const BREAKPOINTS = {
  xs: 320,
  sm: 375,
  md: 768,
  lg: 1024,
  xl: 1440,
  '2xl': 2560,
} as const

// ============================================================================
// RE-EXPORTS FROM OTHER MODULES
// ============================================================================

/**
 * Hover animations from unified animation system
 */
export { HOVER_PRESETS as HOVER_ANIMATIONS } from './animations'

/**
 * Design system tokens for use in components
 */
export { designSystem } from './designSystem'
export { colors, shadows, borderRadius, fontFamily } from './theme'