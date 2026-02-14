"use client"

import React, { useRef, useEffect, useState } from "react"
import { motion, useMotionValue, useAnimationFrame } from "framer-motion"

interface MarqueeProps {
  children: React.ReactNode
  className?: string
  speed?: number // pixels per second
  direction?: "left" | "right"
}

const Marquee: React.FC<MarqueeProps> = ({
  children,
  className = "",
  speed = 60,
  direction = "left",
}) => {
  const [contentWidth, setContentWidth] = useState(0)
  const [containerWidth, setContainerWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  
  // Use a motion value for X to avoid re-renders during animation
  const x = useMotionValue(0)

  useEffect(() => {
    let lastContent = 0
    let lastContainer = 0
    let stableCount = 0

    const measure = () => {
      if (contentRef.current && containerRef.current) {
        const cWidth = contentRef.current.scrollWidth
        const containerW = containerRef.current.offsetWidth

        if (cWidth > 0) {
          if (cWidth === lastContent && containerW === lastContainer) {
            stableCount += 1
          } else {
            stableCount = 0
          }
          lastContent = cWidth
          lastContainer = containerW
          setContentWidth(cWidth)
          setContainerWidth(containerW)
        }
      }
    }

    measure()

    const resizeObserver = new ResizeObserver(() => measure())
    if (contentRef.current) resizeObserver.observe(contentRef.current)
    if (containerRef.current) resizeObserver.observe(containerRef.current)

    const intervalId = setInterval(() => {
      measure()
      if (stableCount >= 2) {
        clearInterval(intervalId)
      }
    }, 500)

    const stopInterval = setTimeout(() => clearInterval(intervalId), 3000)

    return () => {
      resizeObserver.disconnect()
      clearInterval(intervalId)
      clearTimeout(stopInterval)
    }
  }, [children])

  // Animation loop using useAnimationFrame for maximum precision and synchronization
  useAnimationFrame((time, delta) => {
    if (contentWidth === 0) return

    const moveBy = (speed * delta) / 1000
    let newX = x.get()

    if (direction === "left") {
      newX -= moveBy
      // Reset when we've moved past one full set of content
      if (newX <= -contentWidth) {
        newX += contentWidth
      }
    } else {
      newX += moveBy
      if (newX >= 0) {
        newX -= contentWidth
      }
    }
    
    x.set(newX)
  })

  // Determine how many copies are needed to cover the container and one extra for the gapless loop
  const copiesCount = contentWidth > 0 ? Math.ceil(containerWidth / contentWidth) + 2 : 2

  return (
    <div 
        className={`overflow-hidden flex w-full relative ${className}`} 
        ref={containerRef}
    >
      <motion.div
        className="flex shrink-0 h-full items-center"
        style={{ x, width: "max-content" }}
      >
        {/* The first copy we measure */}
        <div ref={contentRef} className="flex shrink-0">
          {children}
        </div>
        
        {/* Additional copies for the loop */}
        {[...Array(copiesCount - 1)].map((_, i) => (
          <div key={i} className="flex shrink-0">
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Marquee
