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