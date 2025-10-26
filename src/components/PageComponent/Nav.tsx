/**
 * Navigation Component
 * Accessible, animated navigation with persona switcher
 */

"use client"

import React, { useState, useRef, memo, useCallback } from "react"
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion"
import Image from "next/image"
import { Icon } from "@iconify/react"
import { useSwitch } from "../Context/SwitchContext"
import { navLinks } from "@/data/Common/data"
import { getCurrentPersona } from "@/services/personaService"
import { designSystem } from "@/constants/designSystem"
import { NAVIGATION, LAYOUT, HOVER_ANIMATIONS } from "@/constants"
import { DURATIONS } from "@/constants/animations"
import type { Persona } from "@/types"

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

const usePersonaSwitcherMotion = (isEnabled: boolean) => {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springConfig = designSystem.animation.spring.default
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (!isEnabled || !ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    x.set((event.clientX - centerX) * 0.15)
    y.set((event.clientY - centerY) * 0.15)
  }, [isEnabled, x, y])

  const resetMotion = useCallback(() => {
    x.set(0)
    y.set(0)
  }, [x, y])

  return {
    ref,
    springX,
    springY,
    handleMouseMove,
    resetMotion,
  }
}

const NavigationLinks: React.FC<{ shouldReduceMotion: boolean }> = ({ shouldReduceMotion }) => (
  <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 md:gap-2.5" role="list">
    {navLinks.map((nav, index) => {
      const linkMotion = getLinkMotion(shouldReduceMotion, index)

      return (
        <motion.div
          key={nav.id}
          role="listitem"
          initial={linkMotion.initial}
          animate={linkMotion.animate}
          transition={linkMotion.transition}
        >
          <motion.a
            className="flex items-center justify-center p-1.5 sm:p-2 rounded-sm transition-colors duration-[200ms] hover:text-primaryBlue dark:hover:text-folderCream focus-visible:outline-2 focus-visible:outline-primaryBlue dark:focus-visible:outline-folderCream"
            href={nav.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${nav.name} (opens in new tab)`}
            whileHover={shouldReduceMotion ? {} : HOVER_ANIMATIONS.icon}
            whileTap={shouldReduceMotion ? {} : HOVER_ANIMATIONS.tap}
          >
            <Icon icon={nav.icon} className="text-3xl sm:text-[40px]" aria-hidden="true" />
          </motion.a>
        </motion.div>
      )
    })}
  </div>
)

interface PersonaSwitcherProps {
  isSwitchOn: boolean
  onToggle: () => void
  shouldReduceMotion: boolean
  nextPersona: Persona
}

const PersonaSwitcher: React.FC<PersonaSwitcherProps> = ({
  isSwitchOn,
  onToggle,
  shouldReduceMotion,
  nextPersona,
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const {
    ref,
    springX,
    springY,
    handleMouseMove,
    resetMotion,
  } = usePersonaSwitcherMotion(!shouldReduceMotion)

  const handleMouseLeave = () => {
    setIsHovered(false)
    resetMotion()
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      onToggle()
    }
  }

  return (
    <motion.div
      ref={ref}
      className="relative rounded-sm cursor-pointer p-1 focus-visible:outline-2 focus-visible:outline-primaryBlue dark:focus-visible:outline-folderCream focus-visible:outline-offset-2"
      onClick={onToggle}
      onKeyDown={handleKeyDown}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={shouldReduceMotion ? {} : { x: springX, y: springY }}
      whileHover={shouldReduceMotion ? {} : HOVER_ANIMATIONS.button}
      whileTap={shouldReduceMotion ? {} : HOVER_ANIMATIONS.tap}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      role="button"
      tabIndex={0}
      aria-label={`Switch to ${nextPersona.name} persona`}
      aria-pressed={isSwitchOn}
    >
      <motion.div
        animate={shouldReduceMotion ? {} : {
          rotate: isHovered ? [0, -5, 5, -5, 0] : 0,
        }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={nextPersona.image}
          alt={`Switch to ${nextPersona.name}'s profile`}
          className="rounded-sm ring-2 ring-primaryBlue dark:ring-folderCream"
          width={NAVIGATION.profileImageSize}
          height={NAVIGATION.profileImageSize}
          priority
        />
      </motion.div>

      {!shouldReduceMotion && (
        <motion.div
          className="absolute inset-0 rounded-sm bg-primaryBlue dark:bg-folderCream pointer-events-none"
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 0, opacity: 0 }}
          whileTap={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.4 }}
          aria-hidden="true"
        />
      )}
    </motion.div>
  )
}

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
        className="relative inline-flex items-center justify-between gap-2 sm:gap-2.5 bg-folderWhite text-primaryBlue border-2 border-primaryBlue px-2 sm:px-3 py-2 sm:py-2.5 rounded-none dark:shadow-dark-sm dark:bg-darkerBlue dark:border-folderCream dark:text-folderCream"
        style={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}
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
          className="absolute -top-2 -right-2 h-3 w-3 rounded-full bg-success-DEFAULT"
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