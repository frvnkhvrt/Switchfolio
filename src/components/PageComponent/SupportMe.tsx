"use client"
import React from "react"
import SectionTitle from "../SectionTitle"
import { Icon } from "@iconify/react"
import { motion, useReducedMotion } from "framer-motion"
import { HOVER_ANIMATIONS } from "@/constants"

const SupportMe = () => {
  const supportMessage = "Support my work and future projects."
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="flex flex-col gap-1">
      <SectionTitle title="Support Me" level={4} />
      <div className="flex flex-col gap-1">
        <p className="text-sm md:text-base leading-relaxed">{supportMessage}</p>
        <div className="flex flex-wrap items-center gap-3 mt-1">
          <motion.a
            className="btn font-semibold"
            target="_blank"
            href="https://buymeacoffee.com/frankhurt"
            whileHover={shouldReduceMotion ? {} : HOVER_ANIMATIONS.button}
            whileTap={shouldReduceMotion ? {} : HOVER_ANIMATIONS.tap}
          >
            <Icon icon="simple-icons:buymeacoffee" className="text-yellow-400 text-lg" />
            Buy Me a Coffee
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default SupportMe
