/**
 * TextReveal Component
 * Reusable text animation wrapper for word-by-word reveals
 */

"use client"

import React, { memo } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { TEXT_REVEAL } from "@/constants/animations"

interface TextRevealProps {
  text: string
  className?: string
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
  delay?: number
}

const TextReveal: React.FC<TextRevealProps> = memo(({
  text,
  className = "",
  as: Component = "span",
  delay = 0,
}) => {
  const shouldReduceMotion = useReducedMotion()
  const words = text.split(" ")

  // If reduced motion, render text normally
  if (shouldReduceMotion) {
    return <Component className={className}>{text}</Component>
  }

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={TEXT_REVEAL.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-[0.25em]"
          variants={TEXT_REVEAL.word}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
})

TextReveal.displayName = "TextReveal"

export default TextReveal
