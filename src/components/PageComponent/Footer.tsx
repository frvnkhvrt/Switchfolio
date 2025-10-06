"use client"
import React from "react"
import { personaService } from "@/services/personaService"
import { useSwitch } from "../Context/SwitchContext"
import { LINK_ATTRIBUTES, ARIA_LABELS } from "@/constants"

const Footer: React.FC = () => {
  const { isSwitchOn } = useSwitch()
  const currentPersona = personaService.getCurrentPersona(isSwitchOn)

  return (
    <footer className="md:mb-12 mb-16">
      <div className="border-t-2 border-primaryBlue dark:border-backgroundCream my-6" />
      <div className="flex flex-col gap-2.5 items-center">
        <div className="flex flex-wrap gap-4 items-center md:text-base text-sm">
          {currentPersona.footerLinks.map((link) => (
            <a
              key={link.id}
              className="select-none md:text-base text-xl text-primaryBlue hover:opacity-75 flex gap-1 items-center transition duration-100"
              target={LINK_ATTRIBUTES.target}
              rel={LINK_ATTRIBUTES.rel}
              href={link.link}
              aria-label={ARIA_LABELS.socialLink(link.name)}
            >
              <span className="sr-only">{link.name}</span>
              <span className="hidden md:block">{link.name}</span>
            </a>
          ))}
        </div>
        <p className="text-sm">
          © 2025 {currentPersona.shortName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
