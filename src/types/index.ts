/**
 * Type Definitions
 * Organized by domain for better maintainability
 */

// ============================================================================
// CORE DOMAIN TYPES
// ============================================================================

/**
 * Represents a user persona with all associated data
 */
export interface Persona {
  id: PersonaId
  name: string
  shortName: string
  headline: string
  subheadline: string
  bio: string
  about: string[]
  image: string
  links: SocialLink[]
}

/**
 * Valid persona identifiers
 */
export type PersonaId = 'francisco' | 'frankhurt'

/**
 * Social media link with icon
 */
export interface SocialLink {
  id: number
  name: string
  link: string
  icon: string
}

// ============================================================================
// PORTFOLIO CONTENT TYPES
// ============================================================================

/**
 * Portfolio project with status and metadata
 */
export interface PortfolioProject {
  id: number
  img: string
  title: string
  status: ProjectStatus
  content: string
  url: string
  github: string
  skill: string[]
  results?: string[]
  caseStudy?: CaseStudy
}

/**
 * Project status indicator
 */
export type ProjectStatus = 'building' | 'running'

/**
 * Detailed project case study
 */
export interface CaseStudy {
  problem: string
  solution: string
  challenges: string
  results: string
  learnings: string
}

/**
 * Writing/blog post entry
 */
export interface Writing {
  id: number
  img: string
  head: string
  des: string
  link: string
}

/**
 * Portfolio skill entry
 */
export interface PortfolioSkill {
  id: number
  icon: string
  text: string
  link?: string
}

/**
 * Navigation link with icon
 */
export interface NavLink {
  id: number
  name: string
  link: string
  icon: string
}

// ============================================================================
// CONTEXT TYPES
// ============================================================================

/**
 * Switch context for persona toggling
 */
export interface SwitchContextType {
  isSwitchOn: boolean
  toggleSwitch: () => void
  theme: Theme
  isTransitioning: boolean
}

// ============================================================================
// COMPONENT PROP TYPES
// ============================================================================

/**
 * Base props for layout/screen wrapper components (optional use)
 */
export interface BaseLayoutProps {
  children: React.ReactNode
}

/**
 * Props for animated wrapper components
 */
export interface AnimatedWrapperProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
  variant?: AnimationVariant
}

/**
 * Available animation variants
 */
export type AnimationVariant = 'blur' | 'slideUp' | 'slideDown' | 'slide' | 'fade' | 'scale' | 'rotate'

// ============================================================================
// UI STATE TYPES
// ============================================================================

/**
 * Theme mode type
 */
export type Theme = 'light' | 'dark'

/**
 * Responsive viewport breakpoints
 */
export type Viewport = 'mobile' | 'tablet' | 'desktop'

/**
 * Loading state with optional error
 */
export interface LoadingState {
  isLoading: boolean
  error?: string | null
}

// ============================================================================
// ERROR HANDLING TYPES
// ============================================================================

/**
 * Application error structure
 */
export interface AppError {
  code: string
  message: string
  details?: unknown
  timestamp?: Date
}

/**
 * Error severity levels
 */
export type ErrorSeverity = 'info' | 'warning' | 'error' | 'critical'

// ============================================================================
// UTILITY TYPES
// ============================================================================

/**
 * Generic callback function type
 */
export type Callback<T = void> = () => T

/**
 * Generic async callback function type
 */
export type AsyncCallback<T = void> = () => Promise<T>

/**
 * Extract readonly array type
 */
export type ReadonlyArrayType<T> = T extends readonly (infer U)[] ? U : never