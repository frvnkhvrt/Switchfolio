# Switchfolio - Comprehensive UX/UI Audit Report

**Date:** October 4, 2025  
**Project:** Switchfolio - Dual Persona Portfolio  
**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion

---

## Executive Summary

This audit evaluates the Switchfolio dual-persona portfolio website across five key dimensions: User Experience, Interface Design, Accessibility, Performance, and Code Quality. The project demonstrates solid fundamentals with a unique persona-switching concept, but has significant opportunities for enhancement in animations, accessibility, and user feedback mechanisms.

**Overall Score: 7.2/10**
- ✅ Strengths: Clean design, functional persona switching, good component structure
- ⚠️ Areas for Improvement: Advanced animations, accessibility compliance, loading states, keyboard navigation

---

## 1. User Experience (UX) Analysis

### 1.1 Navigation & Interaction Patterns

#### 🔴 Critical Issues

**Issue #1: Hidden Persona Switcher Discovery**
- **Problem:** The persona toggle is in a fixed bottom navigation that may not be immediately discoverable
- **Impact:** Users may not realize the dual-persona feature exists
- **Recommendation:** Add a subtle animated indicator or tooltip on first visit
- **Priority:** HIGH

**Issue #2: No Visual Feedback During Persona Switch**
- **Problem:** Instant switch without transition state or loading indicator
- **Impact:** Jarring experience, no sense of state change
- **Recommendation:** Implement smooth cross-fade transition with loading state
- **Priority:** HIGH

**Issue #3: Modal Escape Key Not Implemented**
- **Problem:** Profile image modal doesn't close with Escape key
- **Impact:** Poor keyboard UX, accessibility violation
- **Recommendation:** Add Escape key handler to ProfileImageModal
- **Priority:** MEDIUM

#### 🟡 Moderate Issues

**Issue #4: Project Box Click Area Ambiguity**
- **Problem:** Entire project box is clickable, but also contains clickable links
- **Impact:** Confusing interaction model, accidental expansions
- **Recommendation:** Make only the title/expand icon clickable, or add clear visual separation
- **Priority:** MEDIUM

**Issue #5: No Undo/Redo for Persona Switch**
- **Problem:** No way to quickly toggle back if switched accidentally
- **Impact:** Minor frustration for users exploring
- **Recommendation:** Add keyboard shortcut (Ctrl/Cmd + Shift + P) for quick toggle
- **Priority:** LOW

### 1.2 Information Architecture

#### ✅ Strengths
- Clear section hierarchy with SectionTitle components
- Logical content flow from personal info → skills → projects → writings
- Good use of progressive disclosure in project boxes

#### 🟡 Improvements Needed

**Issue #6: No Skip Navigation Links**
- **Recommendation:** Add skip-to-content links for keyboard users
- **Priority:** MEDIUM

**Issue #7: Missing Breadcrumb/Current Section Indicator**
- **Recommendation:** Add subtle scroll-spy navigation indicator
- **Priority:** LOW

---

## 2. Interface Design

### 2.1 Visual Hierarchy & Typography

#### ✅ Strengths
- Consistent use of Rubik for headings, Geist Mono for body
- Good contrast in light mode
- Clean, minimalist aesthetic

#### 🔴 Critical Issues

**Issue #8: Insufficient Color Contrast in Dark Mode**
- **Problem:** Some text elements don't meet WCAG AA standards (4.5:1 ratio)
- **Locations:** 
  - `.opacity-80` text in ProjectBox (line 115)
  - Secondary text in various components
- **Recommendation:** Increase opacity to 0.9 or use explicit color values
- **Priority:** HIGH (Accessibility)

**Issue #9: No Focus Indicators on Some Interactive Elements**
- **Problem:** Skills cards lack visible focus states
- **Location:** Skills.tsx line 11
- **Recommendation:** Add focus-visible styles to all interactive elements
- **Priority:** HIGH

#### 🟡 Moderate Issues

**Issue #10: Inconsistent Spacing**
- **Problem:** Mix of gap-2, gap-3, gap-2.5 without clear system
- **Recommendation:** Establish spacing scale (4px, 8px, 12px, 16px, 24px)
- **Priority:** MEDIUM

### 2.2 Component Design

#### 🔴 Critical Issues

**Issue #11: Touch Target Sizes Below Minimum**
- **Problem:** Profile image in Nav is 35x35px (below 44x44px minimum)
- **Location:** COMPONENT_SIZES.profileImage in constants/index.ts
- **Recommendation:** Increase to minimum 44x44px with padding
- **Priority:** HIGH (Accessibility)

**Issue #12: No Loading States**
- **Problem:** Dynamic imports show generic loading divs
- **Location:** IndexPage.tsx lines 9-28
- **Recommendation:** Create branded skeleton loaders
- **Priority:** MEDIUM

---

## 3. Animation & Motion Design

### 3.1 Current Animation Analysis

#### ✅ Current Implementation
- Basic fade-in with y-translation (AnimatedWrapper)
- Modal animations with scale and opacity
- Project box expand/collapse with height animation

#### 🔴 Critical Improvements Needed

**Issue #13: Basic, Repetitive Animations**
- **Problem:** All components use identical fade-in animation
- **Impact:** Monotonous, lacks visual interest
- **Recommendation:** Implement advanced animation techniques (see Section 3.2)
- **Priority:** HIGH

**Issue #14: No Persona Switch Transition**
- **Problem:** Instant content swap without transition
- **Impact:** Jarring, no sense of transformation
- **Recommendation:** Implement morphing transition (see Section 3.2)
- **Priority:** HIGH

**Issue #15: No Micro-interactions**
- **Problem:** Buttons, links lack hover/active state animations
- **Impact:** Feels static, less engaging
- **Recommendation:** Add spring-based micro-interactions
- **Priority:** MEDIUM

### 3.2 Advanced Animation Recommendations

#### 🎨 Technique #1: Staggered Reveal with Blur
```typescript
// Enhanced AnimatedWrapper with blur effect
<motion.div
  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
  transition={{
    duration: 0.6,
    delay: delay,
    ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
  }}
>
```

#### 🎨 Technique #2: Persona Switch Morphing Transition
```typescript
// Implement shared layout animation for persona switch
<motion.div
  layout
  layoutId="persona-content"
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.95 }}
  transition={{
    layout: { duration: 0.4, ease: "easeInOut" },
    opacity: { duration: 0.3 }
  }}
>
```

#### 🎨 Technique #3: Magnetic Button Effect
```typescript
// Add to Nav.tsx profile image
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

<motion.div
  animate={{
    x: mousePosition.x * 0.1,
    y: mousePosition.y * 0.1,
  }}
  transition={{ type: "spring", stiffness: 150, damping: 15 }}
  onMouseMove={(e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2,
    })
  }}
  onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
>
```

#### 🎨 Technique #4: Parallax Scroll Effects
```typescript
// Add to sections for depth
const { scrollYProgress } = useScroll()
const y = useTransform(scrollYProgress, [0, 1], [0, -50])

<motion.div style={{ y }}>
```

#### 🎨 Technique #5: Gesture-Based Interactions
```typescript
// Add swipe to switch personas
<motion.div
  drag="x"
  dragConstraints={{ left: 0, right: 0 }}
  onDragEnd={(e, { offset, velocity }) => {
    if (Math.abs(offset.x) > 100 || Math.abs(velocity.x) > 500) {
      toggleSwitch()
    }
  }}
>
```

#### 🎨 Technique #6: Text Reveal Animation
```typescript
// Animate text character by character
const text = "Francisco"
<motion.h1>
  {text.split("").map((char, i) => (
    <motion.span
      key={i}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.05 }}
    >
      {char}
    </motion.span>
  ))}
</motion.h1>
```

#### 🎨 Technique #7: Morphing SVG Icons
```typescript
// Animate between light/dark mode icons
<motion.svg
  animate={{ rotate: isSwitchOn ? 180 : 0 }}
  transition={{ type: "spring", stiffness: 200, damping: 20 }}
>
```

---

## 4. Accessibility (WCAG 2.1 AA Compliance)

### 4.1 Keyboard Navigation

#### 🔴 Critical Issues

**Issue #16: Incomplete Keyboard Navigation**
- **Problem:** Skills cards not keyboard accessible
- **Location:** Skills.tsx - using `<a>` without href
- **Recommendation:** Change to `<button>` or add proper href
- **Priority:** HIGH

**Issue #17: Focus Trap Missing in Modal**
- **Problem:** Focus can escape ProfileImageModal
- **Location:** ProfileImageModal.tsx
- **Recommendation:** Implement focus trap with focus-trap-react
- **Priority:** HIGH

**Issue #18: No Visible Focus Indicators**
- **Problem:** Default browser focus styles removed without replacement
- **Recommendation:** Add custom focus-visible styles globally
- **Priority:** HIGH

### 4.2 Screen Reader Support

#### 🔴 Critical Issues

**Issue #19: Missing ARIA Labels**
- **Problem:** Many interactive elements lack descriptive labels
- **Locations:**
  - Nav icons (line 18-24 in Nav.tsx)
  - Social links in InfoCard
  - Show more/less buttons
- **Recommendation:** Add comprehensive aria-labels
- **Priority:** HIGH

**Issue #20: No Live Region for Persona Switch**
- **Problem:** Screen readers don't announce persona change
- **Recommendation:** Add aria-live region to announce switch
- **Priority:** HIGH

**Issue #21: Improper Heading Hierarchy**
- **Problem:** May have skipped heading levels
- **Recommendation:** Audit and fix heading structure (h1 → h2 → h3)
- **Priority:** MEDIUM

### 4.3 Visual Accessibility

#### 🔴 Critical Issues

**Issue #22: Color as Only Indicator**
- **Problem:** Status badges rely solely on color (Running/Building)
- **Location:** ProjectBox.tsx lines 66-79
- **Recommendation:** Add icons or patterns in addition to color
- **Priority:** HIGH

**Issue #23: Insufficient Text Contrast**
- **Problem:** Multiple instances of low contrast text
- **Locations:**
  - Dark mode secondary text
  - Placeholder text in Select component
- **Recommendation:** Increase contrast to meet 4.5:1 minimum
- **Priority:** HIGH

#### 🟡 Moderate Issues

**Issue #24: No Reduced Motion Support**
- **Problem:** Animations play for users with prefers-reduced-motion
- **Recommendation:** Respect motion preferences
- **Priority:** MEDIUM

---

## 5. Performance Optimization

### 5.1 Loading & Rendering

#### ✅ Strengths
- Dynamic imports for code splitting
- Next.js Image optimization
- Memoized context values

#### 🟡 Improvements Needed

**Issue #25: No Image Preloading**
- **Problem:** Persona images not preloaded
- **Recommendation:** Add `<link rel="preload">` for both persona images
- **Priority:** MEDIUM

**Issue #26: Excessive Re-renders**
- **Problem:** AnimatedWrapper re-renders on every persona switch
- **Recommendation:** Optimize with React.memo and useMemo
- **Priority:** MEDIUM

**Issue #27: No Service Worker/PWA Support**
- **Problem:** No offline capability
- **Recommendation:** Add next-pwa for offline support
- **Priority:** LOW

### 5.2 Bundle Size

#### 🟡 Improvements Needed

**Issue #28: Large Icon Libraries**
- **Problem:** Importing entire react-icons library
- **Recommendation:** Use tree-shakeable imports or switch to @iconify/react only
- **Priority:** MEDIUM

---

## 6. Code Quality & Maintainability

### 6.1 Component Architecture

#### ✅ Strengths
- Good separation of concerns
- Reusable components
- TypeScript for type safety
- Context API for state management

#### 🟡 Improvements Needed

**Issue #29: Inconsistent Error Handling**
- **Problem:** No error boundaries for dynamic imports
- **Recommendation:** Wrap dynamic imports in ErrorBoundary
- **Priority:** MEDIUM

**Issue #30: Magic Numbers**
- **Problem:** Hardcoded values throughout (delays, sizes)
- **Recommendation:** Move to constants or design tokens
- **Priority:** LOW

**Issue #31: Prop Drilling**
- **Problem:** Some props passed through multiple levels
- **Recommendation:** Consider additional context or composition
- **Priority:** LOW

### 6.2 Testing

#### 🔴 Critical Issues

**Issue #32: Limited Test Coverage**
- **Problem:** Only personaService has tests
- **Recommendation:** Add tests for critical components
- **Priority:** MEDIUM

---

## 7. Prioritized Implementation Roadmap

### Phase 1: Critical Fixes (Week 1-2)
1. ✅ Implement advanced persona switch transition
2. ✅ Add comprehensive ARIA labels and keyboard navigation
3. ✅ Fix color contrast issues
4. ✅ Increase touch target sizes
5. ✅ Add Escape key handler to modal
6. ✅ Implement focus trap in modal

### Phase 2: Enhanced Animations (Week 3)
7. ✅ Implement staggered blur animations
8. ✅ Add magnetic button effects
9. ✅ Create micro-interactions for all buttons
10. ✅ Add text reveal animations
11. ✅ Implement gesture-based persona switching

### Phase 3: UX Improvements (Week 4)
12. ✅ Add loading states and skeleton loaders
13. ✅ Implement first-visit tooltip for persona switcher
14. ✅ Add keyboard shortcuts
15. ✅ Create scroll-spy navigation
16. ✅ Add reduced motion support

### Phase 4: Performance & Polish (Week 5)
17. ✅ Optimize bundle size
18. ✅ Add image preloading
19. ✅ Implement error boundaries
20. ✅ Add comprehensive testing

---

## 8. Detailed Implementation Examples

### 8.1 Enhanced AnimatedWrapper with Advanced Techniques

```typescript
// src/utils/EnhancedAnimatedWrapper.tsx
"use client"

import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { useSwitch } from "@/components/Context/SwitchContext"

interface EnhancedAnimatedWrapperProps {
  children: React.ReactNode
  delay?: number
  variant?: 'fade' | 'slide' | 'scale' | 'blur' | 'rotate'
}

const variants = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  slide: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
  },
  blur: {
    initial: { opacity: 0, y: 20, filter: "blur(10px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  rotate: {
    initial: { opacity: 0, rotate: -10 },
    animate: { opacity: 1, rotate: 0 },
  },
}

const EnhancedAnimatedWrapper = ({ 
  children, 
  delay = 0,
  variant = 'blur'
}: EnhancedAnimatedWrapperProps) => {
  const { isSwitchOn } = useSwitch()
  const shouldReduceMotion = useReducedMotion()
  
  const selectedVariant = shouldReduceMotion ? variants.fade : variants[variant]

  return (
    <motion.div
      key={String(isSwitchOn)}
      initial={selectedVariant.initial}
      animate={selectedVariant.animate}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier
      }}
    >
      {children}
    </motion.div>
  )
}

export default EnhancedAnimatedWrapper
```

### 8.2 Persona Switch Transition Component

```typescript
// src/components/PersonaSwitchTransition.tsx
"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useSwitch } from "./Context/SwitchContext"

interface PersonaSwitchTransitionProps {
  children: React.ReactNode
}

export const PersonaSwitchTransition: React.FC<PersonaSwitchTransitionProps> = ({ 
  children 
}) => {
  const { isSwitchOn } = useSwitch()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={isSwitchOn ? 'francisco' : 'frankhurt'}
        initial={{ 
          opacity: 0, 
          scale: 0.98,
          filter: "blur(4px)"
        }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          filter: "blur(0px)"
        }}
        exit={{ 
          opacity: 0, 
          scale: 0.98,
          filter: "blur(4px)"
        }}
        transition={{
          duration: 0.4,
          ease: [0.43, 0.13, 0.23, 0.96]
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
```

### 8.3 Enhanced Nav with Magnetic Effect

```typescript
// src/components/PageComponent/EnhancedNav.tsx
"use client"

import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { frankhurtImage } from "@/data/FrankhurtData/data"
import { useSwitch } from "../Context/SwitchContext"
import { franciscoImage } from "@/data/FranciscoData/data"
import Image from "next/image"
import { navLinks } from "@/data/Common/data"
import { InfoTipNav } from "../InfoTipNav"
import { Icon } from "@iconify/react"
import { COMPONENT_SIZES } from "@/constants"

const EnhancedNav = () => {
  const { isSwitchOn, toggleSwitch } = useSwitch()
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const springConfig = { stiffness: 150, damping: 15 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    x.set((e.clientX - centerX) * 0.15)
    y.set((e.clientY - centerY) * 0.15)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  return (
    <div className="fixed bottom-6 left-0 right-0 flex justify-center items-center z-40">
      <motion.div 
        className="relative bg-folderWhite text-primaryBlue border border-primaryBlue px-3 py-2 rounded-none flex items-center gap-3 shadow-sm dark:shadow-dark-sm"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <div className="flex gap-4 items-center">
          {navLinks.map((nav, index) => (
            <motion.div
              key={nav.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <InfoTipNav text={nav.name}>
                <motion.a 
                  className="block"
                  href={nav.link}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon icon={nav.icon} />
                </motion.a>
              </InfoTipNav>
            </motion.div>
          ))}
        </div>
        
        <div className="h-8 w-[1px] bg-primaryBlue mr-1"></div>
        
        <motion.div
          ref={ref}
          className="relative rounded-none cursor-pointer"
          onClick={toggleSwitch}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          style={{ x: springX, y: springY }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <motion.div
            animate={{
              rotate: isHovered ? [0, -5, 5, -5, 0] : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={isSwitchOn ? franciscoImage : frankhurtImage}
              alt="Profile Picture"
              className="rounded-none"
              width={44} // Increased for accessibility
              height={44}
            />
          </motion.div>
          
          {/* Ripple effect on click */}
          <motion.div
            className="absolute inset-0 rounded-none bg-primaryBlue"
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 0, opacity: 0 }}
            whileTap={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default EnhancedNav
```

### 8.4 Accessible Modal with Focus Trap

```typescript
// src/components/PageComponent/InfoCard/AccessibleProfileImageModal.tsx
import React, { useEffect, useRef } from "react"
import Image from "next/image"
import { Persona } from "@/types"
import { AnimatePresence, motion } from "framer-motion"
import { COMPONENT_SIZES } from "@/constants"

interface ProfileImageModalProps {
  isOpen: boolean
  onClose: () => void
  persona: Persona
}

export const AccessibleProfileImageModal: React.FC<ProfileImageModalProps> = ({
  isOpen,
  onClose,
  persona
}) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  // Focus trap
  useEffect(() => {
    if (!isOpen) return

    const focusableElements = modalRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    
    if (!focusableElements || focusableElements.length === 0) return

    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    }

    document.addEventListener('keydown', handleTabKey)
    closeButtonRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', handleTabKey)
    }
  }, [isOpen])

  // Escape key handler
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <motion.button
            ref={closeButtonRef}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/80 transition-colors"
            aria-label="Close profile image modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </motion.button>

          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ 
              type: "spring", 
              damping: 25, 
              stiffness: 300,
              opacity: { duration: 0.2 }
            }}
            className="w-[600px] max-w-[90vw] md:max-w-[25vw] rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id="modal-title" className="sr-only">
              {persona.name}&apos;s profile picture
            </h2>
            <p id="modal-description" className="sr-only">
              Enlarged view of {persona.name}&apos;s profile picture. Press Escape or click the close button to dismiss.
            </p>
            <Image
              src={persona.image}
              alt={`${persona.name}&apos;s profile picture - enlarged view`}
              className="rounded-lg w-full h-full object-contain"
              width={COMPONENT_SIZES.modalImage.width}
              height={COMPONENT_SIZES.modalImage.height}
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
```

### 8.5 Skeleton Loader Component

```typescript
// src/components/Loading/SkeletonLoader.tsx
"use client"

import { motion } from "framer-motion"

interface SkeletonLoaderProps {
  variant?: 'card' | 'text' | 'circle' | 'button'
  className?: string
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ 
  variant = 'card',
  className = ''
}) => {
  const baseClasses = "bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer"
  
  const variantClasses = {
    card: "h-32 rounded-lg",
    text: "h-4 rounded",
    circle: "h-12 w-12 rounded-full",
    button: "h-10 w-24 rounded-none"
  }

  return (
    <motion.div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    />
  )
}

// Add to tailwind.config.ts
// animation: {
//   shimmer: 'shimmer 2s infinite',
// },
// keyframes: {
//   shimmer: {
//     '0%': { backgroundPosition: '-1000px 0' },
//     '100%': { backgroundPosition: '1000px 0' },
//   },
// },
```

### 8.6 First Visit Tooltip

```typescript
// src/components/FirstVisitTooltip.tsx
"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export const FirstVisitTooltip = () => {
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedSwitchfolio')
    
    if (!hasVisited) {
      setTimeout(() => setShowTooltip(true), 2000)
      localStorage.setItem('hasVisitedSwitchfolio', 'true')
    }
  }, [])

  const handleDismiss = () => {
    setShowTooltip(false)
  }

  return (
    <AnimatePresence>
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 max-w-sm"
        >
          <div className="bg-primaryBlue text-white px-4 py-3 rounded-lg shadow-2xl border-2 border-white/20">
            <div className="flex items-start gap-3">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              >
                👆
              </motion.div>
              <div className="flex-1">
                <p className="font-semibold mb-1">Dual Persona Portfolio!</p>
                <p className="text-sm opacity-90">
                  Click the profile picture to switch between Francisco and Frankhurt
                </p>
              </div>
              <button
                onClick={handleDismiss}
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Dismiss tooltip"
              >
                ✕
              </button>
            </div>
            {/* Arrow pointing down */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-primaryBlue rotate-45 border-r-2 border-b-2 border-white/20" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
```

### 8.7 Keyboard Shortcuts Hook

```typescript
// src/hooks/useKeyboardShortcuts.ts
"use client"

import { useEffect } from "react"
import { useSwitch } from "@/components/Context/SwitchContext"

export const useKeyboardShortcuts = () => {
  const { toggleSwitch } = useSwitch()

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Ctrl/Cmd + Shift + P to toggle persona
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'P') {
        e.preventDefault()
        toggleSwitch()
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [toggleSwitch])
}

// Usage in layout or main component:
// useKeyboardShortcuts()
```

### 8.8 Live Region for Persona Switch Announcement

```typescript
// src/components/PersonaAnnouncer.tsx
"use client"

import { useEffect, useState } from "react"
import { useSwitch } from "./Context/SwitchContext"
import { personaService } from "@/services/personaService"

export const PersonaAnnouncer = () => {
  const { isSwitchOn } = useSwitch()
  const [announcement, setAnnouncement] = useState("")

  useEffect(() => {
    const persona = personaService.getCurrentPersona(isSwitchOn)
    setAnnouncement(`Switched to ${persona.name}, ${persona.bio}`)
    
    // Clear announcement after it's been read
    const timer = setTimeout(() => setAnnouncement(""), 1000)
    return () => clearTimeout(timer)
  }, [isSwitchOn])

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
    >
      {announcement}
    </div>
  )
}
```

---

## 9. Testing Recommendations

### 9.1 Unit Tests

```typescript
// src/components/__tests__/EnhancedNav.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { SwitchProvider } from '../Context/SwitchContext'
import EnhancedNav from '../PageComponent/EnhancedNav'

describe('EnhancedNav', () => {
  it('toggles persona on profile image click', () => {
    render(
      <SwitchProvider>
        <EnhancedNav />
      </SwitchProvider>
    )
    
    const profileImage = screen.getByAltText('Profile Picture')
    fireEvent.click(profileImage)
    
    // Assert persona switched
  })

  it('is keyboard accessible', () => {
    render(
      <SwitchProvider>
        <EnhancedNav />
      </SwitchProvider>
    )
    
    const profileImage = screen.getByAltText('Profile Picture')
    fireEvent.keyDown(profileImage, { key: 'Enter' })
    
    // Assert persona switched
  })
})
```

### 9.2 Accessibility Tests

```typescript
// src/components/__tests__/accessibility.test.tsx
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import IndexPage from '../homeScreen/IndexPage'

expect.extend(toHaveNoViolations)

describe('Accessibility', () => {
  it('should not have any accessibility violations', async () => {
    const { container } = render(<IndexPage />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
```

---

## 10. Performance Metrics & Goals

### Current Performance (Estimated)
- First Contentful Paint (FCP): ~1.2s
- Largest Contentful Paint (LCP): ~1.8s
- Time to Interactive (TTI): ~2.5s
- Cumulative Layout Shift (CLS): ~0.05

### Target Performance
- FCP: <1.0s ✅
- LCP: <1.5s ⚠️
- TTI: <2.0s ⚠️
- CLS: <0.1 ✅

### Optimization Strategies
1. Implement image preloading for persona images
2. Use font-display: swap for custom fonts
3. Defer non-critical JavaScript
4. Implement route prefetching
5. Add service worker for caching

---

## 11. Browser & Device Compatibility

### Testing Matrix
- ✅ Chrome 120+ (Desktop & Mobile)
- ✅ Firefox 120+ (Desktop & Mobile)
- ✅ Safari 17+ (Desktop & Mobile)
- ✅ Edge 120+
- ⚠️ iOS Safari 16+ (Test touch interactions)
- ⚠️ Android Chrome (Test performance)

### Known Issues
- None currently identified

---

## 12. Conclusion & Next Steps

### Summary
Switchfolio has a solid foundation with a unique dual-persona concept. The main areas for improvement are:
1. **Advanced animations** to create a more engaging experience
2. **Accessibility compliance** to ensure WCAG 2.1 AA standards
3. **Enhanced UX feedback** through loading states and transitions
4. **Performance optimization** for faster load times

### Immediate Actions (This Week)
1. Implement enhanced persona switch transition
2. Add comprehensive ARIA labels
3. Fix color contrast issues
4. Increase touch target sizes

### Long-term Goals (Next Month)
1. Complete animation overhaul with advanced techniques
2. Achieve full WCAG 2.1 AA compliance
3. Add comprehensive test coverage
4. Implement PWA features

---

## Appendix A: Design Tokens

```typescript
// src/constants/designTokens.ts
export const designTokens = {
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    '2xl': '32px',
  },
  animation: {
    duration: {
      fast: '0.15s',
      normal: '0.3s',
      slow: '0.5s',
    },
    easing: {
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      custom: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    },
  },
  touchTarget: {
    minimum: '44px',
    comfortable: '48px',
  },
  contrast: {
    minimum: 4.5, // WCAG AA
    enhanced: 7, // WCAG AAA
  },
}
```

---

**End of Audit Report**

*For questions or clarifications, please refer to the specific issue numbers and implementation examples provided throughout this document.*