"use client"
import SectionTitle from "../SectionTitle"
import { emailLink, hireText } from "@/data/Common/data"
import { Icon } from "@iconify/react"
import { motion, useReducedMotion } from "framer-motion"
import { HOVER_ANIMATIONS } from "@/constants"

const HireMe = () => {
  const shouldReduceMotion = useReducedMotion()
  
  return (
    <section className="flex flex-col gap-1">
      <SectionTitle title="Get in touch" level={4} />
      <div className="flex flex-col gap-3">
        <p className="text-sm md:text-base leading-relaxed">{hireText}</p>
        <div className="mt-1">
          <motion.a 
            className="btn font-semibold" 
            target="_blank" 
            href={emailLink}
            whileHover={shouldReduceMotion ? {} : HOVER_ANIMATIONS.button}
            whileTap={shouldReduceMotion ? {} : HOVER_ANIMATIONS.tap}
          >
            <Icon icon="mdi:briefcase" className="text-lg" />
            Hire me
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default HireMe
