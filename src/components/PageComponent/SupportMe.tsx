"use client"
import React from "react"
import SectionTitle from "../SectionTitle"
import { Icon } from "@iconify/react"
import { motion, useReducedMotion } from "framer-motion"
import { HOVER_ANIMATIONS } from "@/constants"

const SupportMe = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="flex flex-col gap-3 sm:gap-4" aria-labelledby="support-me-heading">
      <SectionTitle title="Support Me" level={2} className="mb-1" />
      <div className="flex flex-col gap-3 sm:gap-4">
        <div className="flex flex-wrap items-center gap-3 mt-1 sm:mt-2">
          <motion.a
            className="btn font-semibold"
            target="_blank"
            href="https://buymeacoffee.com/frankhurt"
            rel="noopener noreferrer"
            whileHover={shouldReduceMotion ? {} : HOVER_ANIMATIONS.button}
            whileTap={shouldReduceMotion ? {} : HOVER_ANIMATIONS.tap}
            aria-label="Support my work on Buy Me a Coffee (opens in new tab)"
          >
            <Icon icon="simple-icons:buymeacoffee" className="text-yellow-400 text-lg" aria-hidden="true" />
            <span>Buy Me a Coffee</span>
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default SupportMe
