"use client"
import React from "react"
import { getCurrentPersona } from "@/services/personaService"
import SectionTitle from "../SectionTitle"
import { useSwitch } from "../Context/SwitchContext"

// Simple HTML sanitizer - removes potentially dangerous tags
const sanitizeHtml = (html: string): string => {
  return html.replace(/<script[^>]*>.*?<\/script>/gi, '')
    .replace(/<style[^>]*>.*?<\/style>/gi, '')
    .replace(/<iframe[^>]*>.*?<\/iframe>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+="[^"]*"/gi, '')
}

const AboutMe: React.FC = () => {
  const { isSwitchOn } = useSwitch()
  const currentPersona = getCurrentPersona(isSwitchOn)

  return (
    <section className="flex flex-col gap-1">
      <SectionTitle title="About" level={4} />
      <div className="flex flex-col gap-3">
        <div
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(currentPersona.about),
          }}
          className="flex flex-col gap-2 text-sm md:text-base leading-relaxed"
          aria-label={`${currentPersona.name}'s about section`}
        />
      </div>
    </section>
  )
}

export default AboutMe
