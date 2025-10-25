/**
 * Animated Wrapper
 * Provides consistent entrance animations with accessibility support
 * Automatically respects user's reduced motion preferences
 */

"use client"

import React, { memo } from "react"
import { motion, useReducedMotion, Variants } from "framer-motion"
import { useSwitch } from "@/components/Context/SwitchContext"
import { DURATIONS, ENTRANCE_VARIANTS, ENTRANCE_TRANSITION } from "@/constants/animations"
import type { AnimatedWrapperProps, AnimationVariant } from "@/types"

/**
 * Unified animation variants from constants
 */
const animationVariants: Record<AnimationVariant, Variants> = ENTRANCE_VARIANTS

/**
 * Reduced motion variants for accessibility
 * Simple fade without any movement or blur
 */
const reducedMotionVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

/**
 * AnimatedWrapper Component
 * Wraps children with entrance animations that respect user preferences
 * 
 * @param children - React elements to animate
 * @param delay - Animation delay in seconds (ignored if reduced motion)
 * @param variant - Animation type (fade, blur, slideUp, etc.)
 * @param duration - Animation duration in seconds
 * @param className - Optional CSS classes
 */
const AnimatedWrapper: React.FC<AnimatedWrapperProps> = memo(({
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

  // Adjust duration for reduced motion (nearly instant)
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
})

AnimatedWrapper.displayName = 'AnimatedWrapper'

export default AnimatedWrapper