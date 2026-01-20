"use client"
import SectionTitle from "../SectionTitle"
import { emailLink, hireText } from "@/data/Common/data"
import { Icon } from "@iconify/react"
import { motion, useReducedMotion } from "framer-motion"
import { HOVER_ANIMATIONS } from "@/constants"
import { SCROLL_VARIANTS } from "@/constants/animations"

const HireMe = () => {
  const shouldReduceMotion = useReducedMotion()
  
  return (
    <motion.section 
      className="flex flex-col gap-3 sm:gap-4" 
      aria-labelledby="hire-me-heading"
      variants={SCROLL_VARIANTS.fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <SectionTitle title="Get in touch" level={4} className="mb-1" />
      <div className="flex flex-col gap-3 sm:gap-4">
        <p id="hire-me-heading" className="text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
          {hireText}
        </p>
        <div className="mt-1 sm:mt-2">
          <motion.a 
            className="btn btn-glow cta-glow font-semibold"
            target="_blank"
            rel="noopener noreferrer"
            href={emailLink}
            whileHover={shouldReduceMotion ? {} : HOVER_ANIMATIONS.button}
            whileTap={shouldReduceMotion ? {} : HOVER_ANIMATIONS.tap}
            aria-label="Send me an email to discuss opportunities (opens in mail app)"
          >
            <Icon icon="mdi:briefcase" className="text-lg" aria-hidden="true" />
            <span>Hire Me</span>
          </motion.a>
        </div>
      </div>
    </motion.section>
  )
}

export default HireMe
