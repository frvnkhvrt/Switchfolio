// Core application types
export interface Persona {
  id: string
  name: string
  shortName: string
  bio: string
  about: string[]
  image: string
  links: SocialLink[]
}

export interface SocialLink {
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

// Portfolio-specific data types
export interface PortfolioProject {
  id: number
  img: string
  title: string
  status: 'building' | 'running'
  content: string
  url: string
  github: string
  skill: string[]
  caseStudy?: CaseStudy
}

export interface CaseStudy {
  problem: string
  solution: string
  challenges: string
  results: string
  learnings: string
}

export interface Writing {
  id: number
  img: string
  head: string
  des: string
  link: string
}

export interface NavLink {
  id: number
  name: string
  link: string
  icon: string
}

export interface PortfolioSkill {
  id: number
  icon: string
  text: string
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