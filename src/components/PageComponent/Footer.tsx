/**
 * Footer Component
 * Neobrutalist Sign-Off
 */

"use client"
import React from "react"
import { Persona } from "@/types"

interface FooterProps {
  persona: Persona
}

const Footer: React.FC<FooterProps> = ({ persona }) => {
  return (
    <footer className="mb-20" aria-label="Site footer">
      {/* Hard Divider */}
      <div className="border-t-4 border-black dark:border-white my-8" aria-hidden="true" />
      
      <div className="flex flex-col gap-4 items-center">
        <p className="text-sm text-ink-secondary dark:text-ink-secondary-dark mt-2 font-terminal uppercase tracking-wider">
          © {new Date().getFullYear()} {persona.shortName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
