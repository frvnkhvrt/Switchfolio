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
    <section aria-labelledby="profile-heading" className="mb-3 md:mb-4">
      <div className="flex flex-col">
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-center sm:items-start">
          <motion.div
            className="select-none w-40 sm:w-36 md:w-auto rounded-sm flex-shrink-0"
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
              priority
            />
          </motion.div>

          <div className="flex flex-col gap-3 flex-1 min-w-0 text-center sm:text-left">
            <h1 id="profile-heading" className="head-name">
              {persona.name}
            </h1>
            <p className="text-sm md:text-base leading-relaxed">{persona.bio}</p>
            <div className="mt-2">
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
