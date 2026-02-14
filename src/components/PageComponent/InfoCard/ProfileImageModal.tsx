"use client"

import React, { useRef, useEffect, useCallback } from "react"
import Image from "next/image"
import { Persona } from "@/types"
import { AnimatePresence, motion } from "framer-motion"
import { COMPONENT_SIZES } from "@/constants"

interface ProfileImageModalProps {
  isOpen: boolean
  onClose: () => void
  persona: Persona
}

const FOCUSABLE_SELECTOR =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

function getFocusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR))
}

export const ProfileImageModal: React.FC<ProfileImageModalProps> = ({
  isOpen,
  onClose,
  persona,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const previousActiveRef = useRef<HTMLElement | null>(null)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen || !containerRef.current) return
      if (e.key === "Escape") {
        e.preventDefault()
        onClose()
        return
      }
      if (e.key !== "Tab") return
      const focusable = getFocusableElements(containerRef.current)
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    },
    [isOpen, onClose]
  )

  useEffect(() => {
    if (!isOpen) return
    previousActiveRef.current = document.activeElement as HTMLElement | null
    closeButtonRef.current?.focus()
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      previousActiveRef.current?.focus?.()
    }
  }, [isOpen, handleKeyDown])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-modal bg-black/80 flex items-center justify-center"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.button
            ref={closeButtonRef}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            className="absolute top-4 right-4 text-white hover:opacity-80 p-2 border-2 border-white focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white z-10"
            aria-label="Close modal"
            onClick={onClose}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
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
            className="w-[600px] max-w-[90vw] md:max-w-[25vw] overflow-hidden border-4 border-white"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id="modal-title" className="sr-only">
              {persona.name}&apos;s profile picture
            </h2>
            <Image
              src={persona.image}
              alt={`${persona.name}&apos;s profile picture - enlarged view`}
              className="w-full h-full object-contain"
              width={COMPONENT_SIZES.modalImage.width}
              height={COMPONENT_SIZES.modalImage.height}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
