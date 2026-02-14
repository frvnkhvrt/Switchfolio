"use client"

import React from "react"
import { motion } from "framer-motion"

interface LoadingSquareProps {
  size?: "sm" | "md" | "lg"
  className?: string
  color?: string
}

const LoadingSquare: React.FC<LoadingSquareProps> = ({ 
  size = "md", 
  className = "",
  color = "currentColor" 
}) => {
  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-[3px]",
    lg: "w-12 h-12 border-4"
  }

  return (
    <motion.div
      className={`relative inline-block ${sizeClasses[size]} ${className}`}
      style={{ borderColor: color }}
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        duration: 1,
        ease: "linear"
      }}
    >
      {/* 
        Fix for "missing line" issue: 
        Explicitly defining all 4 borders and using a pseudo-element 
        to ensure perfect alignment and visibility during rotation.
      */}
      <div className="absolute inset-0 border-[inherit] opacity-20" />
      <div className="absolute inset-[-1px] border-[inherit] opacity-100" />
    </motion.div>
  )
}

export default LoadingSquare
