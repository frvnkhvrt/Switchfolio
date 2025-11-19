"use client"

import React, { useState, useRef, useCallback } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import Image from "next/image"
import { designSystem } from "@/constants/designSystem"
import { NAVIGATION, HOVER_ANIMATIONS } from "@/constants"
import type { Persona } from "@/types"

interface PersonaSwitcherProps {
    isSwitchOn: boolean
    onToggle: () => void
    shouldReduceMotion: boolean
    nextPersona: Persona
}

const usePersonaSwitcherMotion = (isEnabled: boolean) => {
    const ref = useRef<HTMLDivElement>(null)
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const springConfig = designSystem.animation.spring.default
    const springX = useSpring(x, springConfig)
    const springY = useSpring(y, springConfig)

    const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
        if (!isEnabled || !ref.current) return

        const rect = ref.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        x.set((event.clientX - centerX) * 0.15)
        y.set((event.clientY - centerY) * 0.15)
    }, [isEnabled, x, y])

    const resetMotion = useCallback(() => {
        x.set(0)
        y.set(0)
    }, [x, y])

    return {
        ref,
        springX,
        springY,
        handleMouseMove,
        resetMotion,
    }
}

const PersonaSwitcher: React.FC<PersonaSwitcherProps> = ({
    isSwitchOn,
    onToggle,
    shouldReduceMotion,
    nextPersona,
}) => {
    const [isHovered, setIsHovered] = useState(false)
    const {
        ref,
        springX,
        springY,
        handleMouseMove,
        resetMotion,
    } = usePersonaSwitcherMotion(!shouldReduceMotion)

    const handleMouseLeave = () => {
        setIsHovered(false)
        resetMotion()
    }

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault()
            onToggle()
        }
    }

    return (
        <motion.div
            ref={ref}
            className="relative rounded-sm cursor-pointer p-1 focus-visible:outline-2 focus-visible:outline-primaryBlue dark:focus-visible:outline-folderCream focus-visible:outline-offset-2"
            onClick={onToggle}
            onKeyDown={handleKeyDown}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={shouldReduceMotion ? {} : { x: springX, y: springY }}
            whileHover={shouldReduceMotion ? {} : HOVER_ANIMATIONS.button}
            whileTap={shouldReduceMotion ? {} : HOVER_ANIMATIONS.tap}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            role="button"
            tabIndex={0}
            aria-label={`Switch to ${nextPersona.name} persona`}
            aria-pressed={isSwitchOn}
        >
            <motion.div
                animate={shouldReduceMotion ? {} : {
                    rotate: isHovered ? [0, -5, 5, -5, 0] : 0,
                }}
                transition={{ duration: 0.5 }}
            >
                <Image
                    src={nextPersona.image}
                    alt={`Switch to ${nextPersona.name}'s profile`}
                    className="rounded-sm ring-2 ring-primaryBlue dark:ring-folderCream"
                    width={NAVIGATION.profileImageSize}
                    height={NAVIGATION.profileImageSize}
                    priority
                />
            </motion.div>

            {!shouldReduceMotion && (
                <motion.div
                    className="absolute inset-0 rounded-sm bg-primaryBlue dark:bg-folderCream pointer-events-none"
                    initial={{ scale: 0, opacity: 0.5 }}
                    animate={{ scale: 0, opacity: 0 }}
                    whileTap={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    aria-hidden="true"
                />
            )}
        </motion.div>
    )
}

export default PersonaSwitcher
