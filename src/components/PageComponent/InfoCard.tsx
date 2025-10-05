"use client"
import React from "react"
import Image from "next/image"
import { personaService } from "@/services/personaService"
import { useSwitch } from "../Context/SwitchContext"
import { ProfileHeader } from "@/components/PageComponent/InfoCard/ProfileHeader"
import { SocialLinks } from "@/components/PageComponent/InfoCard/SocialLinks"
import { COMPONENT_SIZES } from "@/constants"

const InfoCard: React.FC = () => {
  const { isSwitchOn } = useSwitch()
  const currentPersona = personaService.getCurrentPersona(isSwitchOn)

  return (
    <section>
      <div className="flex flex-col gap-1.5">
        <ProfileHeader />
        <div className="flex gap-2 items-center">
          <div className="select-none w-1/3 md:w-auto rounded-sm">
            <Image
              src={currentPersona.image}
              alt={`${currentPersona.name}'s profile picture`}
              className="pro-pic"
              width={COMPONENT_SIZES.profileImageModal.width}
              height={COMPONENT_SIZES.profileImageModal.height}
              priority
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex gap-3 items-center">
              <h1 className="head-name">
                {currentPersona.name}
              </h1>
            </div>
            <p>{currentPersona.bio}</p>
            <SocialLinks links={currentPersona.links} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfoCard
