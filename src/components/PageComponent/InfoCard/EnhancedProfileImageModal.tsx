/**
 * Enhanced Profile Image Modal
 * Accessible modal for viewing profile images with proper focus management
 */

import React from "react"
import Image from "next/image"
import { Persona } from "@/types"
import AccessibleModal from "@/components/Accessibility/AccessibleModal"
import { COMPONENT_SIZES } from "@/constants"

interface EnhancedProfileImageModalProps {
  isOpen: boolean
  onClose: () => void
  persona: Persona
}

export const EnhancedProfileImageModal: React.FC<EnhancedProfileImageModalProps> = ({
  isOpen,
  onClose,
  persona
}) => {
  return (
    <AccessibleModal
      isOpen={isOpen}
      onClose={onClose}
      title=""
      size="lg"
      closeOnBackdropClick={true}
    >
      <div className="flex items-center justify-center">
        <Image
          src={persona.image}
          alt={`${persona.name}'s profile picture - enlarged view`}
          className="rounded-lg w-full h-auto object-contain max-h-[70vh]"
          width={COMPONENT_SIZES.modalImage.width}
          height={COMPONENT_SIZES.modalImage.height}
          priority
        />
      </div>
    </AccessibleModal>
  )
}

export default EnhancedProfileImageModal