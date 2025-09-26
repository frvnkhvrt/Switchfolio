"use client"
import React, { useState } from "react"
import { personaService } from "@/services/personaService"
import { useSwitch } from "../Context/SwitchContext"
import { ProfileHeader } from "./InfoCard/ProfileHeader"
import { SocialLinks } from "./InfoCard/SocialLinks"
import { ProfileImageModal } from "./InfoCard/ProfileImageModal"

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
            className="cursor-pointer hover:brightness-75 transition duration-200 select-none w-1/3 md:w-auto"
            role="button"
            tabIndex={0}
            aria-label={`View ${currentPersona.name}'s profile image`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setIsModalOpen(true)
              }
            }}
          >
            <img
              src={currentPersona.image}
              alt={`${currentPersona.name}'s profile picture`}
              className="pro-pic"
              width={200}
              height={200}
              loading="eager"
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
