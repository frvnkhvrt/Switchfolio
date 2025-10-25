"use client"
import React from "react"
import SectionTitle from "../SectionTitle"
import { Persona } from "@/types"

interface AboutMeProps {
  persona: Persona
}

const AboutMe: React.FC<AboutMeProps> = ({ persona }) => {
  return (
    <section className="flex flex-col gap-1">
      <SectionTitle title="About" level={4} />
      <div className="flex flex-col gap-3">
        <div
          className="flex flex-col gap-2 text-sm md:text-base leading-relaxed"
          aria-label={`${persona.name}'s about section`}
        >
          {persona.about.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutMe
