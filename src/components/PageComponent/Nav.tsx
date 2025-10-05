/**
 * Navigation Component
 * Accessible, animated navigation with persona switcher
 */

"use client"

import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion"
import Image from "next/image"
import { frankhurtImage } from "@/data/FrankhurtData/data"
import { useSwitch } from "../Context/SwitchContext"
import { franciscoImage } from "@/data/FranciscoData/data"
import { navLinks } from "@/data/Common/data"
import { Icon } from "@iconify/react"
import { ariaLabels, isActivationKey } from "@/utils/accessibility"
import { useScreenReaderAnnouncement } from "@/hooks/useAccessibility"
import { personaService } from "@/services/personaService"
import { designSystem } from "@/constants/designSystem"

const Nav = () => {
  const { isSwitchOn, toggleSwitch } = useSwitch()
  const [isHovered, setIsHovered] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const announce = useScreenReaderAnnouncement()
  const ref = useRef<HTMLDivElement>(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const springConfig = designSystem.animation.spring.default
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const currentPersona = personaService.getCurrentPersona(isSwitchOn)
  const nextPersona = personaService.getCurrentPersona(!isSwitchOn)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !ref.current) return
    
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

  const handlePersonaSwitch = () => {
    toggleSwitch()
    announce(
      ariaLabels.personaSwitched(nextPersona.name, nextPersona.bio),
      'polite'
    )
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (isActivationKey(e.key)) {
      e.preventDefault()
      handlePersonaSwitch()
    }
  }

  return (
    <nav
      className="fixed bottom-6 left-0 right-0 flex justify-center items-center z-40"
      aria-label={ariaLabels.mainNav}
      id="navigation"
    >
      <motion.div 
        className="relative bg-folderWhite text-primaryBlue border-2 border-primaryBlue px-4 py-3 rounded-none flex items-center gap-4 shadow-md dark:shadow-dark-sm dark:bg-darkerBlue dark:border-folderCream dark:text-folderCream"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20,
          delay: 0.2 
        }}
      >
        {/* Navigation Links */}
        <div className="flex gap-4 items-center" role="list">
          {navLinks.map((nav, index) => (
            <motion.div
              key={nav.id}
              role="listitem"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: shouldReduceMotion ? 0 : index * 0.1,
                duration: shouldReduceMotion ? 0.01 : 0.3
              }}
            >
              <motion.a
                className="block p-2 rounded-sm transition-colors duration-200 hover:text-primaryBlue dark:hover:text-folderCream focus-visible:outline-2 focus-visible:outline-primaryBlue dark:focus-visible:outline-folderCream"
                href={nav.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${nav.name} (opens in new tab)`}
                whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
              >
                <Icon icon={nav.icon} className="text-2xl" aria-hidden="true" />
              </motion.a>
            </motion.div>
          ))}
        </div>
        
        {/* Divider */}
        <div 
          className="h-10 w-[2px] bg-primaryBlue dark:bg-folderCream" 
          role="separator"
          aria-hidden="true"
        />
        
        {/* Persona Switcher */}
        <motion.div
          ref={ref}
          className="relative rounded-sm cursor-pointer p-1"
          onClick={handlePersonaSwitch}
          onKeyDown={handleKeyDown}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          style={shouldReduceMotion ? {} : { x: springX, y: springY }}
          whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          role="button"
          tabIndex={0}
          aria-label={ariaLabels.personaSwitch(currentPersona.name, nextPersona.name)}
          aria-pressed={isSwitchOn}
        >
          <motion.div
            animate={shouldReduceMotion ? {} : {
              rotate: isHovered ? [0, -5, 5, -5, 0] : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={isSwitchOn ? franciscoImage : frankhurtImage}
              alt={`${currentPersona.name}'s profile picture`}
              className="rounded-sm ring-2 ring-primaryBlue dark:ring-folderCream"
              width={48}
              height={48}
              priority
            />
          </motion.div>
          
          {/* Ripple effect on click */}
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

        {/* Tooltip indicator for first-time users */}
        <motion.div
          className="absolute -top-2 -right-2 w-3 h-3 bg-success-DEFAULT rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ 
            delay: 1,
            duration: 0.5,
            ease: "easeOut"
          }}
          aria-hidden="true"
        />
      </motion.div>
    </nav>
  )
}

export default Nav