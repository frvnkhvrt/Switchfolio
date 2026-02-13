"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { HOVER_ANIMATIONS } from "@/constants"
import type { Persona } from "@/types"

interface PersonaSwitcherProps {
    isSwitchOn: boolean
    onToggle: () => void
    shouldReduceMotion: boolean
    nextPersona: Persona
}

const PersonaSwitcher: React.FC<PersonaSwitcherProps> = ({
    isSwitchOn,
    onToggle,
    nextPersona,
}) => {
    return (
        <button
            onClick={onToggle}
            className="group relative w-12 h-12 flex items-center justify-center bg-white dark:bg-black border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-0 focus-visible:outline-4 focus-visible:outline-offset-2"
            aria-label={`Switch to ${nextPersona.name} persona`}
            aria-pressed={isSwitchOn}
        >
            <div className="relative w-10 h-10 overflow-hidden border border-black dark:border-white group-hover:invert transition-all duration-0">
                <Image
                    src={nextPersona.image}
                    alt=""
                    fill
                    className="object-cover grayscale group-hover:grayscale-0"
                    priority
                />
            </div>
            
            {/* Corner decal */}
            <div className="absolute top-0 right-0 w-2 h-2 bg-black dark:bg-white" />
            
            {/* Label on hover (optional, maybe too cluttered for 80px width) */}
        </button>
    )
}

export default PersonaSwitcher
