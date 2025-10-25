"use client"
import React from "react"
import { getCurrentPersona } from "@/services/personaService"
import SectionTitle from "../SectionTitle"
import { useSwitch } from "../Context/SwitchContext"



const AboutMe: React.FC = () => {
  const { isSwitchOn } = useSwitch()
  const currentPersona = getCurrentPersona(isSwitchOn)

  return (
    <section className="flex flex-col gap-1">
      <SectionTitle title="About" level={4} />
      <div className="flex flex-col gap-3">
        <div
          className="flex flex-col gap-2 text-sm md:text-base leading-relaxed"
          aria-label={`${currentPersona.name}'s about section`}
        >
          {currentPersona.about.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutMe
