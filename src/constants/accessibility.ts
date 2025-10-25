/**
 * Accessibility-related constants
 */

export const LINK_ATTRIBUTES = {
  target: "_blank" as const,
  rel: "noopener noreferrer" as const,
} as const

export const ARIA_LABELS = {
  profileImage: (name: string) => `View ${name}'s profile image`,
  socialLink: (name: string) => `${name} (opens in new tab)`,
  projectStatus: (title: string, status: string) => `${title} project - ${status}`,
  expandableSection: (isExpanded: boolean) => (isExpanded ? "Collapse section" : "Expand section"),
} as const
