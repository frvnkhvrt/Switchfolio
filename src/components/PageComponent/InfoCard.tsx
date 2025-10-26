"use client"

import React, { memo } from "react"
import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { SocialLinks } from "@/components/PageComponent/InfoCard/SocialLinks"
import { COMPONENT_SIZES, HOVER_ANIMATIONS } from "@/constants"
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

  return (
    <section
      aria-labelledby="profile-heading"
      aria-describedby="profile-summary"
      className="flex flex-col gap-4 mb-4 md:mb-6 lg:mb-8"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6 lg:gap-8">
          <motion.div
            className="select-none rounded-sm flex-shrink-0 overflow-hidden mx-auto sm:mx-0"
            whileHover={shouldReduceMotion ? {} : HOVER_ANIMATIONS.card}
            whileTap={shouldReduceMotion ? {} : HOVER_ANIMATIONS.tap}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
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

          <div className="flex flex-col gap-3 flex-1 min-w-0 text-center sm:text-left">
            <h1 id="profile-heading" className="head-name break-words">
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
          </div>
        </div>
      </div>
    </section>
  )
})

InfoCard.displayName = "InfoCard"

export default InfoCard
