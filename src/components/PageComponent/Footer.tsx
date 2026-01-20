"use client"
import React from "react"
import { motion } from "framer-motion"
import { Persona } from "@/types"
import { SCROLL_VARIANTS } from "@/constants/animations"

interface FooterProps {
  persona: Persona
}

const Footer: React.FC<FooterProps> = ({ persona }) => {
  return (
    <footer className="md:mb-12 mb-16">
      <motion.div 
        className="footer-divider my-8 reveal-mask" 
        aria-hidden="true"
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
      <motion.div 
        className="flex flex-col gap-4 items-center"
        variants={SCROLL_VARIANTS.fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 font-medium tracking-wide">
          © 2025 {persona.shortName}. All rights reserved.
        </p>
      </motion.div>
    </footer>
  )
}

export default Footer
