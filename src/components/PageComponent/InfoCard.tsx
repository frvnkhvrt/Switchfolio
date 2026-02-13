"use client"

import React, { memo } from "react"
import Image from "next/image"
import { motion, useReducedMotion, useMotionValue, useTransform } from "framer-motion"
import { SocialLinks } from "@/components/PageComponent/InfoCard/SocialLinks"
import { HOVER_ANIMATIONS } from "@/constants"
import { SCROLL_VARIANTS, FLOAT_ANIMATION } from "@/constants/animations"
import { Persona } from "@/types"

interface InfoCardProps {
  persona: Persona
}

/**
 * InfoCard component - displays persona profile information
 * Shows avatar, name, bio, social links, and availability badge
 */
const InfoCard: React.FC<InfoCardProps> = memo(({ persona }) => {
  const shouldReduceMotion = useReducedMotion()

  // 3D Tilt Effect
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  // Create dampeners for position (only move 10% of mouse distance)
  const xPos = useTransform(x, [-100, 100], [-10, 10])
  const yPos = useTransform(y, [-100, 100], [-10, 10])
  
  // Rotation (reduced to 10 degrees for subtlety)
  const rotateX = useTransform(y, [-100, 100], [10, -10])
  const rotateY = useTransform(x, [-100, 100], [-10, 10])

  return (
    <section
      aria-labelledby="profile-heading"
      aria-describedby="profile-summary"
      className="flex flex-col gap-8 mb-8 md:mb-12 lg:mb-16 pt-8 md:pt-12"
    >
      <div className="flex flex-col gap-6 md:gap-8">
        <div className="flex flex-col-reverse md:flex-row md:items-start gap-6 md:gap-10">
          <motion.div 
            className="flex flex-col gap-4 flex-1 min-w-0 text-center md:text-left"
            variants={SCROLL_VARIANTS.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-2">
              <h2 className="text-secondaryBlue dark:text-folderCream font-medium text-base md:text-lg tracking-wide uppercase">
                {persona.subheadline}
              </h2>
              <h1 id="profile-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                {persona.headline}
              </h1>
            </div>
            
            <p id="profile-summary" className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 max-w-2xl mx-auto md:mx-0">
              {persona.bio}
            </p>

            <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start mt-2">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-full">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                  </span>
                  Available for hire
                </span>
              </div>
              
              <div
                role="navigation"
                aria-label={`${persona.name}'s social profiles`}
              >
                <SocialLinks links={persona.links} />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="select-none flex-shrink-0 mx-auto md:mx-0"
            variants={SCROLL_VARIANTS.scaleUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={shouldReduceMotion ? {} : HOVER_ANIMATIONS.card}
            whileTap={shouldReduceMotion ? {} : HOVER_ANIMATIONS.tap}
            animate={shouldReduceMotion ? {} : FLOAT_ANIMATION}
            style={{ x: xPos, y: yPos, rotateX, rotateY, z: 100 }}
            onMouseMove={(e) => {
               if (shouldReduceMotion) return
               const rect = e.currentTarget.getBoundingClientRect()
               const centerX = rect.left + rect.width / 2
               const centerY = rect.top + rect.height / 2
               x.set(e.clientX - centerX)
               y.set(e.clientY - centerY)
            }}
            onMouseLeave={() => {
               if (shouldReduceMotion) return
               x.set(0)
               y.set(0)
            }}
          >
            <div className="relative w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full border-4 border-white dark:border-gray-800 shadow-xl overflow-hidden">
                <Image
                  src={persona.image}
                  alt={`${persona.name}'s profile picture`}
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 160px, (max-width: 1024px) 224px, 256px"
                  priority
                />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
})

InfoCard.displayName = "InfoCard"

export default InfoCard
