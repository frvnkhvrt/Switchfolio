/**
 * Animated Wrapper
 * Advanced animation techniques with accessibility support
 */

"use client"

import React from "react"
import { motion, useReducedMotion, Variants } from "framer-motion"
import { useSwitch } from "@/components/Context/SwitchContext"
import { designSystem } from "@/constants/designSystem"

interface AnimatedWrapperProps {
  children: React.ReactNode
  delay?: number
  variant?: 'fade' | 'slide' | 'scale' | 'blur' | 'rotate' | 'slideUp' | 'slideDown'
  duration?: number
  className?: string
}

// Animation variants with advanced techniques
const animationVariants: Record<string, Variants> = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slide: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  slideDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },
  blur: {
    initial: { 
      opacity: 0, 
      y: 20, 
      filter: "blur(10px)" 
    },
    animate: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)" 
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      filter: "blur(10px)" 
    },
  },
  rotate: {
    initial: { 
      opacity: 0, 
      rotate: -10,
      scale: 0.95
    },
    animate: { 
      opacity: 1, 
      rotate: 0,
      scale: 1
    },
    exit: { 
      opacity: 0, 
      rotate: 10,
      scale: 0.95
    },
  },
}

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
  duration = 0.6,
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
        duration: animationDuration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier easing
        ...designSystem.animation.spring.default,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedWrapper