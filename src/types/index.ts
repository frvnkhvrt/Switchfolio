// Core application types
export interface Persona {
  id: string
  name: string
  shortName: string
  bio: string
  about: string
  image: string
  contact: string
  links: SocialLink[]
  contactLinks: ContactLink[]
  footerLinks: FooterLink[]
}

export interface SocialLink {
  id: number
  name: string
  link: string
  icon: string
}

export interface ContactLink {
  id: number
  name: string
  link: string
  icon: string
}

export interface FooterLink {
  id: number
  name: string
  link: string
  icon: string
}

// Context types
export interface SwitchContextType {
  isSwitchOn: boolean
  toggleSwitch: () => void
  theme: 'light' | 'dark'
}

// Component prop types
export interface ScreenProps {
  children: React.ReactNode
}

export interface AnimatedWrapperProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export interface InfoTipProps {
  text: string
  children: React.ReactNode
}

// API and data types
export interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
  github?: string
}

export interface Skill {
  id: number
  name: string
  level: number
  category: string
}

// Utility types
export type Theme = 'light' | 'dark'
export type Viewport = 'mobile' | 'tablet' | 'desktop'

// Error types
export interface AppError {
  code: string
  message: string
  details?: unknown
}

// Loading states
export interface LoadingState {
  isLoading: boolean
  error?: string | null
}