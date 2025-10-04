/**
 * First Visit Tooltip
 * Introduces users to the dual-persona switching feature
 */

"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"

export const FirstVisitTooltip = () => {
  const [showTooltip, setShowTooltip] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('hasVisitedSwitchfolio')
    
    if (!hasVisited) {
      // Show tooltip after a delay to let page load
      const timer = setTimeout(() => {
        setShowTooltip(true)
      }, 2000)

      // Mark as visited
      localStorage.setItem('hasVisitedSwitchfolio', 'true')

      return () => clearTimeout(timer)
    }
  }, [])

  const handleDismiss = () => {
    setShowTooltip(false)
  }

  const tooltipVariants = {
    hidden: shouldReduceMotion 
      ? { opacity: 0 }
      : { opacity: 0, y: 20, scale: 0.9 },
    visible: shouldReduceMotion
      ? { opacity: 1 }
      : { opacity: 1, y: 0, scale: 1 },
  }

  const pointerVariants = {
    animate: shouldReduceMotion
      ? {}
      : {
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0],
        },
  }

  return (
    <AnimatePresence>
      {showTooltip && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={tooltipVariants}
          transition={{ 
            type: shouldReduceMotion ? "tween" : "spring", 
            stiffness: 300, 
            damping: 25,
            duration: shouldReduceMotion ? 0.01 : undefined,
          }}
          className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 max-w-sm px-4"
          role="dialog"
          aria-live="polite"
          aria-label="Welcome tutorial"
        >
          <div className="bg-primaryBlue text-white px-5 py-4 rounded-lg shadow-2xl border-2 border-white/20 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              {/* Animated pointer */}
              <motion.div
                variants={pointerVariants}
                animate="animate"
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
                className="text-2xl flex-shrink-0"
                aria-hidden="true"
              >
                👆
              </motion.div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-1">
                  Dual Persona Portfolio!
                </h3>
                <p className="text-sm opacity-95 leading-relaxed">
                  Click the profile picture below to switch between <strong>Francisco</strong> and <strong>Frankhurt</strong> personas. Each has unique content and styling!
                </p>
              </div>
              
              {/* Close button */}
              <button
                onClick={handleDismiss}
                className="text-white/70 hover:text-white transition-colors flex-shrink-0 p-1 rounded focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                aria-label="Dismiss tutorial"
              >
                <svg 
                  className="w-5 h-5" 
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
              </button>
            </div>
            
            {/* Arrow pointing down */}
            <div 
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-primaryBlue rotate-45 border-r-2 border-b-2 border-white/20"
              aria-hidden="true"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FirstVisitTooltip