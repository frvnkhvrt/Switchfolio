/**
 * Accessibility Hooks
 * Custom React hooks for accessibility features
 */

import { useEffect, useRef, useState, useCallback } from 'react'
import { FocusManager, ScreenReaderUtils, keys } from '@/utils/accessibility'

/**
 * Hook for managing focus trap in modals and overlays
 */
export const useFocusTrap = (isActive: boolean) => {
  const containerRef = useRef<HTMLElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!isActive || !containerRef.current) return

    // Store previously focused element
    previousFocusRef.current = document.activeElement as HTMLElement

    // Focus first focusable element
    const firstFocusable = FocusManager.getFirstFocusable(containerRef.current)
    firstFocusable?.focus()

    // Handle Tab key for focus trap
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === keys.TAB && containerRef.current) {
        FocusManager.trapFocus(containerRef.current, e)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      // Restore focus when trap is deactivated
      FocusManager.restoreFocus(previousFocusRef.current)
    }
  }, [isActive])

  return containerRef
}

/**
 * Hook for handling Escape key to close modals/overlays
 */
export const useEscapeKey = (callback: () => void, isActive: boolean = true) => {
  useEffect(() => {
    if (!isActive) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === keys.ESCAPE) {
        callback()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [callback, isActive])
}

/**
 * Hook for preventing body scroll when modal is open
 */
export const useBodyScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    if (isLocked) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${scrollbarWidth}px`
    } else {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }

    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [isLocked])
}

/**
 * Hook for announcing messages to screen readers
 */
export const useScreenReaderAnnouncement = () => {
  const announce = useCallback(
    (message: string, politeness: 'polite' | 'assertive' = 'polite') => {
      ScreenReaderUtils.announce(message, politeness)
    },
    []
  )

  return announce
}

/**
 * Hook for detecting reduced motion preference
 */
export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return prefersReducedMotion
}

/**
 * Hook for detecting keyboard navigation
 */
export const useKeyboardUser = () => {
  const [isKeyboardUser, setIsKeyboardUser] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === keys.TAB) {
        setIsKeyboardUser(true)
        document.body.classList.add('keyboard-user')
      }
    }

    const handleMouseDown = () => {
      setIsKeyboardUser(false)
      document.body.classList.remove('keyboard-user')
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('mousedown', handleMouseDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('mousedown', handleMouseDown)
    }
  }, [])

  return isKeyboardUser
}

/**
 * Hook for managing ARIA live region announcements
 */
export const useLiveRegion = () => {
  const [message, setMessage] = useState('')
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)

  const announce = useCallback((newMessage: string, duration: number = 1000) => {
    setMessage(newMessage)
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    
    timeoutRef.current = setTimeout(() => {
      setMessage('')
    }, duration)
  }, [])

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return { announce, message }
}

/**
 * Hook for keyboard shortcuts
 */
export const useKeyboardShortcut = (
  key: string,
  callback: () => void,
  options: {
    ctrl?: boolean
    shift?: boolean
    alt?: boolean
    meta?: boolean
  } = {}
) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const { ctrl = false, shift = false, alt = false, meta = false } = options

      const ctrlMatch = ctrl ? e.ctrlKey : !e.ctrlKey
      const shiftMatch = shift ? e.shiftKey : !e.shiftKey
      const altMatch = alt ? e.altKey : !e.altKey
      const metaMatch = meta ? e.metaKey : !e.metaKey

      if (
        e.key.toLowerCase() === key.toLowerCase() &&
        ctrlMatch &&
        shiftMatch &&
        altMatch &&
        metaMatch
      ) {
        e.preventDefault()
        callback()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [key, callback, options])
}

/**
 * Hook for managing roving tabindex in component groups
 */
export const useRovingTabIndex = (itemCount: number) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, index: number) => {
      let newIndex = index

      switch (e.key) {
        case keys.ARROW_RIGHT:
        case keys.ARROW_DOWN:
          e.preventDefault()
          newIndex = (index + 1) % itemCount
          break
        case keys.ARROW_LEFT:
        case keys.ARROW_UP:
          e.preventDefault()
          newIndex = (index - 1 + itemCount) % itemCount
          break
        case keys.HOME:
          e.preventDefault()
          newIndex = 0
          break
        case keys.END:
          e.preventDefault()
          newIndex = itemCount - 1
          break
        default:
          return
      }

      setActiveIndex(newIndex)
    },
    [itemCount]
  )

  const getTabIndex = useCallback(
    (index: number) => (index === activeIndex ? 0 : -1),
    [activeIndex]
  )

  return { activeIndex, setActiveIndex, handleKeyDown, getTabIndex }
}

/**
 * Hook for detecting high contrast mode
 */
export const useHighContrast = () => {
  const [prefersHighContrast, setPrefersHighContrast] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-contrast: high)')
    setPrefersHighContrast(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersHighContrast(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return prefersHighContrast
}

/**
 * Hook for managing focus visible state
 */
export const useFocusVisible = () => {
  const [isFocusVisible, setIsFocusVisible] = useState(false)
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleFocus = () => setIsFocusVisible(true)
    const handleBlur = () => setIsFocusVisible(false)
    const handleMouseDown = () => setIsFocusVisible(false)

    element.addEventListener('focus', handleFocus)
    element.addEventListener('blur', handleBlur)
    element.addEventListener('mousedown', handleMouseDown)

    return () => {
      element.removeEventListener('focus', handleFocus)
      element.removeEventListener('blur', handleBlur)
      element.removeEventListener('mousedown', handleMouseDown)
    }
  }, [])

  return { isFocusVisible, elementRef }
}

/**
 * Hook for accessible disclosure (expand/collapse) pattern
 */
export const useDisclosure = (defaultOpen: boolean = false) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const contentRef = useRef<HTMLElement>(null)

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  const open = useCallback(() => {
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
  }, [])

  const getButtonProps = useCallback(
    () => ({
      ref: buttonRef,
      'aria-expanded': isOpen,
      'aria-controls': contentRef.current?.id,
      onClick: toggle,
    }),
    [isOpen, toggle]
  )

  const getContentProps = useCallback(
    (id: string) => ({
      ref: contentRef,
      id,
      hidden: !isOpen,
      'aria-hidden': !isOpen,
    }),
    [isOpen]
  )

  return {
    isOpen,
    toggle,
    open,
    close,
    getButtonProps,
    getContentProps,
  }
}