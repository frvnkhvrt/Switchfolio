/**
 * Custom Cursor Component
 * Neobrutalist Crosshair
 */

"use client"

import React, { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

const CustomCursor = () => {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  const [hoverState, setHoverState] = useState<"default" | "pointer" | "text">("default")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
      
      // Check target for hover state
      const target = e.target as HTMLElement
      const isClickable = target.closest("a, button, [role='button']")
      const isText = target.closest("input, textarea, [contenteditable='true']")
      
      if (isText) setHoverState("text")
      else if (isClickable) setHoverState("pointer")
      else setHoverState("default")
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener("mousemove", moveCursor)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [cursorX, cursorY, isVisible])

  if (!isVisible) return null

  return (
    <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
            x: cursorXSpring,
            y: cursorYSpring,
            translateX: "-50%",
            translateY: "-50%",
        }}
    >
        {/* CROSSHAIR */}
        <motion.div 
            className="relative flex items-center justify-center"
            animate={hoverState}
            variants={{
                default: { scale: 1 },
                pointer: { scale: 1.5, rotate: 45 },
                text: { scale: 0.5, opacity: 0 }
            }}
        >
            {/* Horizontal Line */}
            <div className="absolute h-[2px] w-6 bg-white" />
            {/* Vertical Line */}
            <div className="absolute w-[2px] h-6 bg-white" />
            
            {/* Box for Pointer */}
            <motion.div 
                className="absolute border-2 border-white w-8 h-8"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                    opacity: hoverState === "pointer" ? 1 : 0,
                    scale: hoverState === "pointer" ? 1 : 0.5
                }}
                transition={{ duration: 0.1 }}
            />
        </motion.div>
    </motion.div>
  )
}

export default CustomCursor
