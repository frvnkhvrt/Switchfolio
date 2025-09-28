"use client"
import React, { useState } from "react"
import Image from "next/image"
import { personaService } from "@/services/personaService"
import { useSwitch } from "../Context/SwitchContext"
import { ProfileHeader } from "@/components/PageComponent/InfoCard/ProfileHeader"
import { SocialLinks } from "@/components/PageComponent/InfoCard/SocialLinks"
import { ProfileImageModal } from "@/components/PageComponent/InfoCard/ProfileImageModal"
import { ARIA_LABELS, COMPONENT_SIZES } from "@/constants"

const InfoCard: React.FC = () => {
  const { isSwitchOn } = useSwitch()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const currentPersona = personaService.getCurrentPersona(isSwitchOn)

  return (
    <section>
      <div className="flex flex-col gap-2">
        <ProfileHeader />
        <div className="flex gap-3 items-center">
          <div
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer hover:brightness-75 focus:brightness-75 focus:outline-none focus:ring-2 focus:ring-primaryBlue/50 dark:focus:ring-folderCream/50 transition duration-200 select-none w-1/3 md:w-auto rounded-sm"
            role="button"
            tabIndex={0}
            aria-label={ARIA_LABELS.profileImage(currentPersona.name)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setIsModalOpen(true)
              }
            }}
          >
            <Image
              src={currentPersona.image}
              alt={`${currentPersona.name}'s profile picture`}
              className="pro-pic"
              width={COMPONENT_SIZES.profileImageModal.width}
              height={COMPONENT_SIZES.profileImageModal.height}
              priority
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-4 items-center">
              <h1 className="head-name">
                {currentPersona.name}
              </h1>
            </div>
            <p>{currentPersona.bio}</p>
            <SocialLinks links={currentPersona.links} />
          </div>
        </div>
      </div>

      <ProfileImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        persona={currentPersona}
      />
    </section>
  )
}

export default InfoCard
