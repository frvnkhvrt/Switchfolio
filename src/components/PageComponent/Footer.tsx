"use client"
import React from "react"
import { Persona } from "@/types"

interface FooterProps {
  persona: Persona
}

const Footer: React.FC<FooterProps> = ({ persona }) => {
  return (
    <footer className="md:mb-12 mb-16">
      <div className="border-t-2 border-primaryBlue dark:border-folderCream my-8" />
      <div className="flex flex-col gap-4 items-center">
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          © 2025 {persona.shortName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
