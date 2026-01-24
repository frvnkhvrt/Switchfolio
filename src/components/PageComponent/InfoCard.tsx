"use client"

import React, { memo } from "react"
import Image from "next/image"
import { motion, useReducedMotion, useMotionValue, useTransform } from "framer-motion"
import { SocialLinks } from "@/components/PageComponent/InfoCard/SocialLinks"
import { COMPONENT_SIZES, HOVER_ANIMATIONS } from "@/constants"
import { SCROLL_VARIANTS, FLOAT_ANIMATION } from "@/constants/animations"
import { Persona } from "@/types"

interface InfoCardProps {
  persona: Persona
}

/**
 * InfoCard component - displays persona profile information
 * Shows avatar, name, bio, and social links
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
      className="flex flex-col gap-4 mb-4 md:mb-6 lg:mb-8"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6 lg:gap-8">
          <motion.div
            className="select-none rounded-sm flex-shrink-0 mx-auto sm:mx-0 card-3d-tilt perspective-1000"
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
            <Image
              src={persona.image}
              alt={`${persona.name}'s profile picture`}
              className="pro-pic"
              width={COMPONENT_SIZES.profileImageModal.width}
              height={COMPONENT_SIZES.profileImageModal.height}
              sizes="(max-width: 640px) 160px, 210px"
              priority
            />
          </motion.div>

          <motion.div 
            className="flex flex-col gap-3 flex-1 min-w-0 text-center sm:text-left"
            variants={SCROLL_VARIANTS.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h1 id="profile-heading" className="head-name break-words heading-tight text-shadow-subtle">
              {persona.name}
            </h1>
            <p id="profile-summary" className="text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
              {persona.bio}
            </p>
            <div
              className="mt-2 sm:mt-3"
              role="navigation"
              aria-label={`${persona.name}'s social profiles`}
            >
              <SocialLinks links={persona.links} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
})

InfoCard.displayName = "InfoCard"

export default InfoCard
