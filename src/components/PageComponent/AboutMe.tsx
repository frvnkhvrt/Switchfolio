"use client"
import React from "react"
import { personaService } from "@/services/personaService"
import SectionTitle from "../SectionTitle"
import { useSwitch } from "../Context/SwitchContext"

const AboutMe: React.FC = () => {
  const { isSwitchOn } = useSwitch()
  const currentPersona = personaService.getCurrentPersona(isSwitchOn)

  return (
    <section className="flex flex-col gap-0.5">
      <SectionTitle title="About" />
      <div className="flex flex-col gap-2">
        <div
          dangerouslySetInnerHTML={{
            __html: currentPersona.about,
          }}
          className="flex flex-col gap-1"
          aria-label={`${currentPersona.name}'s about section`}
        />
      </div>
    </section>
  )
}

export default AboutMe
