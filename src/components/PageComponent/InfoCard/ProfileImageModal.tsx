import React from "react"
import Image from "next/image"
import { Persona } from "@/types"
import { AnimatePresence, motion } from "framer-motion"
import { COMPONENT_SIZES } from "@/constants"

interface ProfileImageModalProps {
  isOpen: boolean
  onClose: () => void
  persona: Persona
}

export const ProfileImageModal: React.FC<ProfileImageModalProps> = ({
  isOpen,
  onClose,
  persona
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          style={{ zIndex: 50 }}
        >
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </motion.button>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="w-[600px] max-w-[90vw] md:max-w-[25vw] rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id="modal-title" className="sr-only">
              {persona.name}&apos;s profile picture
            </h2>
            <Image
              src={persona.image}
              alt={`${persona.name}&apos;s profile picture - enlarged view`}
              className="rounded-lg w-full h-full object-contain"
              width={COMPONENT_SIZES.modalImage.width}
              height={COMPONENT_SIZES.modalImage.height}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}