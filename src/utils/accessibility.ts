/**
 * Accessibility Utilities
 * Comprehensive helpers for WCAG 2.1 AA compliance
 */

// ARIA Labels Generator
export const ariaLabels = {
  // Navigation
  skipToContent: 'Skip to main content',
  skipToNav: 'Skip to navigation',
  mainNav: 'Main navigation',
  socialNav: 'Social media links',
  
  // Persona Switching
  personaSwitch: (currentPersona: string, nextPersona: string) =>
    `Switch from ${currentPersona} to ${nextPersona} persona`,
  personaSwitched: (persona: string, bio: string) =>
    `Switched to ${persona}, ${bio}`,
  
  // Interactive Elements
  expandSection: (section: string) => `Expand ${section} section`,
  collapseSection: (section: string) => `Collapse ${section} section`,
  openModal: (content: string) => `Open ${content} modal`,
  closeModal: 'Close modal',
  
  // Forms
  required: 'Required field',
  optional: 'Optional field',
  error: (field: string, message: string) => `${field} error: ${message}`,
  
  // Status
  loading: 'Loading content',
  success: 'Action completed successfully',
  errorStatus: 'An error occurred',
  
  // Links
  externalLink: (destination: string) => `${destination} (opens in new tab)`,
  downloadLink: (filename: string) => `Download ${filename}`,
  
  // Images
  profileImage: (name: string) => `${name}'s profile picture`,
  decorative: '',
  
  // Projects
  projectCard: (title: string, status: string) =>
    `Project: ${title}. Status: ${status}. Click to view details.`,
  projectExpanded: (title: string) => `${title} project details expanded`,
  projectCollapsed: (title: string) => `${title} project details collapsed`,
} as const

// Keyboard Navigation Keys
export const keys = {
  ENTER: 'Enter',
  SPACE: ' ',
  ESCAPE: 'Escape',
  TAB: 'Tab',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  HOME: 'Home',
  END: 'End',
} as const

// Check if key is an activation key (Enter or Space)
export const isActivationKey = (key: string): boolean => {
  return key === keys.ENTER || key === keys.SPACE
}

// Check if key is an arrow key
export const isArrowKey = (key: string): boolean => {
  const arrowKeys = [keys.ARROW_UP, keys.ARROW_DOWN, keys.ARROW_LEFT, keys.ARROW_RIGHT]
  return arrowKeys.includes(key as typeof arrowKeys[number])
}

// Focus Management
export class FocusManager {
  private static focusableSelectors = [
    'a[href]',
    'button:not([disabled])',
    'textarea:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
  ].join(', ')

  // Get all focusable elements within a container
  static getFocusableElements(container: HTMLElement): HTMLElement[] {
    return Array.from(
      container.querySelectorAll<HTMLElement>(this.focusableSelectors)
    )
  }

  // Get first focusable element
  static getFirstFocusable(container: HTMLElement): HTMLElement | null {
    const elements = this.getFocusableElements(container)
    return elements[0] || null
  }

  // Get last focusable element
  static getLastFocusable(container: HTMLElement): HTMLElement | null {
    const elements = this.getFocusableElements(container)
    return elements[elements.length - 1] || null
  }

  // Trap focus within container
  static trapFocus(container: HTMLElement, event: KeyboardEvent): void {
    if (event.key !== keys.TAB) return

    const focusableElements = this.getFocusableElements(container)
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    if (event.shiftKey) {
      // Shift + Tab
      if (document.activeElement === firstElement) {
        event.preventDefault()
        lastElement?.focus()
      }
    } else {
      // Tab
      if (document.activeElement === lastElement) {
        event.preventDefault()
        firstElement?.focus()
      }
    }
  }

  // Restore focus to previous element
  static restoreFocus(element: HTMLElement | null): void {
    if (element && typeof element.focus === 'function') {
      // Use setTimeout to ensure DOM is ready
      setTimeout(() => element.focus(), 0)
    }
  }
}

// Screen Reader Utilities
export class ScreenReaderUtils {
  // Create a live region for announcements
  static createLiveRegion(
    politeness: 'polite' | 'assertive' = 'polite'
  ): HTMLDivElement {
    const liveRegion = document.createElement('div')
    liveRegion.setAttribute('role', 'status')
    liveRegion.setAttribute('aria-live', politeness)
    liveRegion.setAttribute('aria-atomic', 'true')
    liveRegion.className = 'sr-only'
    document.body.appendChild(liveRegion)
    return liveRegion
  }

  // Announce message to screen readers
  static announce(
    message: string,
    politeness: 'polite' | 'assertive' = 'polite'
  ): void {
    const liveRegion = this.createLiveRegion(politeness)
    liveRegion.textContent = message

    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(liveRegion)
    }, 1000)
  }
}

// Color Contrast Utilities
export class ContrastUtils {
  // Calculate relative luminance
  private static getLuminance(r: number, g: number, b: number): number {
    const [rs, gs, bs] = [r, g, b].map((c) => {
      const sRGB = c / 255
      return sRGB <= 0.03928 ? sRGB / 12.92 : Math.pow((sRGB + 0.055) / 1.055, 2.4)
    })
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
  }

  // Calculate contrast ratio between two colors
  static getContrastRatio(color1: string, color2: string): number {
    const rgb1 = this.hexToRgb(color1)
    const rgb2 = this.hexToRgb(color2)

    if (!rgb1 || !rgb2) return 0

    const lum1 = this.getLuminance(rgb1.r, rgb1.g, rgb1.b)
    const lum2 = this.getLuminance(rgb2.r, rgb2.g, rgb2.b)

    const lighter = Math.max(lum1, lum2)
    const darker = Math.min(lum1, lum2)

    return (lighter + 0.05) / (darker + 0.05)
  }

  // Convert hex to RGB
  private static hexToRgb(hex: string): { r: number; g: number; b: number } | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null
  }

  // Check if contrast meets WCAG standards
  static meetsWCAG(
    foreground: string,
    background: string,
    level: 'AA' | 'AAA' = 'AA',
    size: 'normal' | 'large' = 'normal'
  ): boolean {
    const ratio = this.getContrastRatio(foreground, background)
    
    if (level === 'AAA') {
      return size === 'large' ? ratio >= 4.5 : ratio >= 7
    }
    
    return size === 'large' ? ratio >= 3 : ratio >= 4.5
  }
}

// Reduced Motion Detection
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// High Contrast Mode Detection
export const prefersHighContrast = (): boolean => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-contrast: high)').matches
}

// Keyboard-only Navigation Detection
export const isKeyboardUser = (): boolean => {
  if (typeof window === 'undefined') return false
  
  let keyboardUser = false
  
  const handleKeyDown = () => {
    keyboardUser = true
    document.body.classList.add('keyboard-user')
  }
  
  const handleMouseDown = () => {
    keyboardUser = false
    document.body.classList.remove('keyboard-user')
  }
  
  window.addEventListener('keydown', handleKeyDown)
  window.addEventListener('mousedown', handleMouseDown)
  
  return keyboardUser
}

// Semantic HTML Helpers
export const semanticRoles = {
  navigation: 'navigation',
  main: 'main',
  complementary: 'complementary',
  contentinfo: 'contentinfo',
  banner: 'banner',
  search: 'search',
  form: 'form',
  region: 'region',
} as const

// Skip Links Configuration
export const skipLinks = [
  { href: '#main-content', label: 'Skip to main content' },
  { href: '#navigation', label: 'Skip to navigation' },
  { href: '#footer', label: 'Skip to footer' },
] as const

// Form Validation Messages
export const validationMessages = {
  required: (field: string) => `${field} is required`,
  email: 'Please enter a valid email address',
  minLength: (field: string, min: number) =>
    `${field} must be at least ${min} characters`,
  maxLength: (field: string, max: number) =>
    `${field} must not exceed ${max} characters`,
  pattern: (field: string) => `${field} format is invalid`,
  url: 'Please enter a valid URL',
  phone: 'Please enter a valid phone number',
} as const

// Export all utilities
export const a11yUtils = {
  ariaLabels,
  keys,
  isActivationKey,
  isArrowKey,
  FocusManager,
  ScreenReaderUtils,
  ContrastUtils,
  prefersReducedMotion,
  prefersHighContrast,
  isKeyboardUser,
  semanticRoles,
  skipLinks,
  validationMessages,
} as const