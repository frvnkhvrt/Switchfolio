/**
 * ScrollProgress Component
 * Animated progress bar at top of viewport showing scroll position
 */

"use client"

import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion"

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const shouldReduceMotion = useReducedMotion()
  
  // Smooth spring animation for the progress bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Don't render if reduced motion is preferred
  if (shouldReduceMotion) {
    return null
  }

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX }}
      aria-hidden="true"
    />
  )
}

export default ScrollProgress
