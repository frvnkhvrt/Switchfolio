"use client"
import React from "react"
import SectionTitle from "../SectionTitle"
import { Icon } from "@iconify/react"

const SupportMe = () => {
  
  // Francisco (isSwitchOn = false): Professional tone
  // Frankhurt (isSwitchOn = true): Casual, edgy tone
  // const supportMessage = isSwitchOn
  //   ? "Dig my vibe? Fuel my grind."
  //   : "Support my work and future projects."
  const supportMessage = ""

  return (
    <section className="flex flex-col gap-1">
      <SectionTitle title="Support Me" level={4} />
      <div className="flex flex-col gap-1">
        <p className="text-sm md:text-base leading-relaxed">{supportMessage}</p>
        <div className="flex flex-wrap items-center gap-3 mt-1">
          <a
            className="btn font-semibold"
            target="_blank"
            href="https://buymeacoffee.com/frankhurt"
          >
            <Icon icon="simple-icons:buymeacoffee" className="text-yellow-400 text-lg" />
            Buy Me a Coffee
          </a>
        </div>
      </div>
    </section>
  )
}

export default SupportMe
