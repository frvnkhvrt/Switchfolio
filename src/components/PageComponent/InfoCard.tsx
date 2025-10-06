"use client"

import React, { memo, useMemo } from "react"
import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { getCurrentPersona } from "@/services/personaService"
import { useSwitch } from "../Context/SwitchContext"
import { SocialLinks } from "@/components/PageComponent/InfoCard/SocialLinks"
import { COMPONENT_SIZES } from "@/constants"

/**
 * InfoCard component - displays persona profile information
 * Shows avatar, name, bio, and social links
 */
const InfoCard: React.FC = memo(() => {
  const { isSwitchOn } = useSwitch()
  const shouldReduceMotion = useReducedMotion()

  // Memoize persona to prevent unnecessary recalculations
  const currentPersona = useMemo(
    () => getCurrentPersona(isSwitchOn),
    [isSwitchOn]
  )

  return (
    <section aria-labelledby="profile-heading" className="mb-3 md:mb-4">
      <div className="flex flex-col">
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-center sm:items-start">
          <motion.div
            className="select-none w-40 sm:w-36 md:w-auto rounded-sm flex-shrink-0"
            whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -3 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Image
              src={currentPersona.image}
              alt={`${currentPersona.name}'s profile picture`}
              className="pro-pic"
              width={COMPONENT_SIZES.profileImageModal.width}
              height={COMPONENT_SIZES.profileImageModal.height}
              priority
            />
          </motion.div>

          <div className="flex flex-col gap-3 flex-1 min-w-0 text-center sm:text-left">
            <h1 id="profile-heading" className="head-name">
              {currentPersona.name}
            </h1>
            <p className="text-sm md:text-base leading-relaxed">{currentPersona.bio}</p>
            <div className="mt-2">
              <SocialLinks links={currentPersona.links} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

InfoCard.displayName = "InfoCard"

export default InfoCard
