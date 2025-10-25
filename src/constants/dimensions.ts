/**
 * Dimension-related constants for sizing consistency
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
