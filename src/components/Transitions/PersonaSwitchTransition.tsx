/**
 * Persona Switch Transition Component
 * Smooth morphing transition when switching between personas
 */

"use client"

import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { useSwitch } from "../Context/SwitchContext"

interface PersonaSwitchTransitionProps {
  children: React.ReactNode
}

export const PersonaSwitchTransition: React.FC<PersonaSwitchTransitionProps> = ({
  children
}) => {
  const { isSwitchOn } = useSwitch()
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      key={isSwitchOn ? 'frankhurt' : 'francisco'}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.25,
        ease: [0.43, 0.13, 0.23, 0.96],
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  )
}

export default PersonaSwitchTransition