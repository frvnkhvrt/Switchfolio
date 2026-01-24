/**
 * Navigation Component
 * Accessible, animated navigation with persona switcher
 */

"use client"

import React, { memo, useRef } from "react"
import { motion, useReducedMotion, useMotionValue, useSpring } from "framer-motion"
import { Icon } from "@iconify/react"
import { useSwitch } from "../Context/SwitchContext"
import { navLinks } from "@/data/Common/data"
import { getCurrentPersona } from "@/services/personaService"
import { NAVIGATION, LAYOUT } from "@/constants"
import { DURATIONS } from "@/constants/animations"

const NAV_CONTAINER_MOTION = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    type: "spring",
    stiffness: 260,
    damping: 20,
    delay: 0.2,
  },
} as const

const getLinkMotion = (shouldReduceMotion: boolean, index: number) => ({
  initial: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    delay: shouldReduceMotion ? 0 : index * NAVIGATION.animationStagger,
    duration: shouldReduceMotion ? 0.01 : DURATIONS.normal,
  },
})

import PersonaSwitcher from "./PersonaSwitcher"

/**
 * Individual Magnetic Nav Item
 * Handles its own physics for smooth magnetic attraction
 */
const MagneticNavItem = ({ nav, index, shouldReduceMotion }: { nav: typeof navLinks[0], index: number, shouldReduceMotion: boolean }) => {
  const ref = useRef<HTMLDivElement>(null)
  
  // Physics values
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Smooth springs for the magnetic effect - Heavily damped to prevent bouncing
  const springConfig = { damping: 40, stiffness: 200, mass: 0.8 }
  const xSpring = useSpring(x, springConfig)
  const ySpring = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (shouldReduceMotion || !ref.current) return
    
    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current.getBoundingClientRect()
    
    // Calculate distance from center
    const centerX = left + width / 2
    const centerY = top + height / 2
    
    const distanceX = clientX - centerX
    const distanceY = clientY - centerY

    // Apply magnetic pull (capped)
    x.set(distanceX * 0.4)
    y.set(distanceY * 0.4)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const linkMotion = getLinkMotion(shouldReduceMotion, index)

  return (
    <motion.div
      key={nav.id}
      role="listitem"
      initial={linkMotion.initial}
      animate={linkMotion.animate}
      transition={linkMotion.transition}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.a
        className="flex items-center justify-center p-1.5 sm:p-2 rounded-sm transition-colors duration-[200ms] hover:text-primaryBlue dark:hover:text-folderCream focus-visible:outline-2 focus-visible:outline-primaryBlue dark:focus-visible:outline-folderCream"
        href={nav.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${nav.name} (opens in new tab)`}
        style={{ x: xSpring, y: ySpring }}
        whileHover={shouldReduceMotion ? {} : {
          scale: 1.25,
          transition: { duration: 0.2, ease: "easeOut" }
        }}
        whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
      >
        <Icon icon={nav.icon} className="text-3xl sm:text-[40px]" aria-hidden="true" />
      </motion.a>
    </motion.div>
  )
}

const NavigationLinks: React.FC<{ shouldReduceMotion: boolean }> = ({ shouldReduceMotion }) => (
  <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 md:gap-2.5" role="list">
    {navLinks.map((nav, index) => (
      <MagneticNavItem 
        key={nav.id} 
        nav={nav} 
        index={index} 
        shouldReduceMotion={shouldReduceMotion} 
      />
    ))}
  </div>
)

const Nav: React.FC = memo(() => {
  const { isSwitchOn, toggleSwitch } = useSwitch()
  const prefersReducedMotion = useReducedMotion()
  const shouldReduceMotion = prefersReducedMotion ?? false
  const nextPersona = getCurrentPersona(!isSwitchOn)
  const navBottomOffset = `calc(${NAVIGATION.bottomOffset} + var(--safe-area-bottom))`

  return (
    <nav
      className="fixed inset-x-0 flex items-end justify-center px-3 sm:px-4"
      style={{
        bottom: navBottomOffset,
        zIndex: LAYOUT.navZIndex,
      }}
      aria-label="Main navigation"
      id="navigation"
    >
      <motion.div
        className="nav-glassmorphism relative inline-flex items-center justify-between gap-2 sm:gap-2.5 px-2 sm:px-3 py-2 sm:py-2.5 rounded-2xl shadow-lg dark:shadow-dark-lg text-primaryBlue dark:text-folderCream"
        initial={NAV_CONTAINER_MOTION.initial}
        animate={NAV_CONTAINER_MOTION.animate}
        transition={NAV_CONTAINER_MOTION.transition}
      >
        <NavigationLinks shouldReduceMotion={shouldReduceMotion} />

        <div
          className="h-10 w-[2px] bg-primaryBlue dark:bg-folderCream"
          role="separator"
          aria-hidden="true"
        />

        <PersonaSwitcher
          isSwitchOn={isSwitchOn}
          onToggle={toggleSwitch}
          shouldReduceMotion={shouldReduceMotion}
          nextPersona={nextPersona}
        />

        <motion.div
          className="nav-status-indicator float-animation absolute -top-2 -right-2 h-3 w-3 rounded-full bg-success-DEFAULT"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{
            delay: 1,
            duration: 0.5,
            ease: "easeOut",
          }}
          aria-hidden="true"
        />
      </motion.div>
    </nav>
  )
})

Nav.displayName = "Nav"

export default Nav