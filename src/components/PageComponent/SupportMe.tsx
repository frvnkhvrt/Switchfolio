"use client"
import React from "react"
import SectionTitle from "../SectionTitle"
import { Icon } from "@iconify/react"
import { useSwitch } from "../Context/SwitchContext"

const SupportMe = () => {
  const { isSwitchOn } = useSwitch()
  
  // Francisco (isSwitchOn = false): Professional tone
  // Frankhurt (isSwitchOn = true): Casual, edgy tone
  // const supportMessage = isSwitchOn
  //   ? "Dig my vibe? Fuel my grind."
  //   : "Support my work and future projects."
  const supportMessage = ""

  return (
    <section className="flex flex-col gap-2">
      <SectionTitle title="Support Me" level={4} />
      <div className="flex flex-col gap-2">
        <p>{supportMessage}</p>
        <div className="flex flex-wrap items-center gap-2">
          <a
            className="btn"
            target="_blank"
            href="https://github.com/sponsors/frvnkhvrt"
          >
            <Icon icon="simple-icons:githubsponsors" className="text-pink-400" />
            GitHub Sponsors
          </a>
          <a
            className="btn"
            target="_blank"
            href="https://buymeacoffee.com/frankhurt"
          >
            <Icon icon="simple-icons:buymeacoffee" className="text-yellow-400" />
            Buy Me a Coffee
          </a>
        </div>
      </div>
    </section>
  )
}

export default SupportMe
