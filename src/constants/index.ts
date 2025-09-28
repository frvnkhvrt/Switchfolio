// Common constants used across the application

// External links
export const EXTERNAL_LINKS = {
  googleTimeSearch: "https://www.google.com/search?q=time",
} as const

// Time formatting options
export const TIME_FORMAT_OPTIONS = {
  hour: "2-digit" as const,
  minute: "2-digit" as const,
}

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
  short: 100,
  medium: 200,
  long: 300,
  extra: 350,
} as const

// Update intervals
export const UPDATE_INTERVALS = {
  time: 1000, // 1 second
} as const