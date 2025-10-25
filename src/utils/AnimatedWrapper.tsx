/**
 * Animated Wrapper
 * Advanced animation techniques with accessibility support
 */

"use client"

import React from "react"
import { motion, useReducedMotion, Variants } from "framer-motion"
import { useSwitch } from "@/components/Context/SwitchContext"
import { DURATIONS, ENTRANCE_VARIANTS, ENTRANCE_TRANSITION } from "@/constants/animations"

interface AnimatedWrapperProps {
  children: React.ReactNode
  delay?: number
  variant?: 'fade' | 'slide' | 'scale' | 'blur' | 'rotate' | 'slideUp' | 'slideDown'
  duration?: number
  className?: string
}

// Use unified animation variants
const animationVariants: Record<string, Variants> = ENTRANCE_VARIANTS

// Reduced motion variants (simplified animations)
const reducedMotionVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({
  children, 
  delay = 0,
  variant = 'blur',
  duration = DURATIONS.normal,
  className = '',
}) => {
  const { isSwitchOn } = useSwitch()
  const shouldReduceMotion = useReducedMotion()
  
  // Use simplified animation if user prefers reduced motion
  const selectedVariants = shouldReduceMotion 
    ? reducedMotionVariants 
    : animationVariants[variant]

  // Adjust duration for reduced motion
  const animationDuration = shouldReduceMotion ? 0.01 : duration

  return (
    <motion.div
      key={String(isSwitchOn)}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={selectedVariants}
      transition={{
        ...ENTRANCE_TRANSITION,
        duration: animationDuration,
        delay: shouldReduceMotion ? 0 : delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedWrapper