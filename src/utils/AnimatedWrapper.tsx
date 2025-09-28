"use client"

import React from "react"
import { motion } from "framer-motion"
import { useSwitch } from "@/components/Context/SwitchContext"
import { ANIMATION_DELAYS } from "@/constants"

interface AnimatedWrapperProps {
  children: React.ReactNode
  delay?: number
}

const AnimatedWrapper = ({ children, delay = 0 }: AnimatedWrapperProps) => {
  const { isSwitchOn } = useSwitch()

  return (
    <motion.div
      key={String(isSwitchOn)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: ANIMATION_DELAYS.extra / 1000,
        delay: delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedWrapper
