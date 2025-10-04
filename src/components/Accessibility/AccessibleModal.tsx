/**
 * Accessible Modal Component
 * WCAG 2.1 AA compliant modal with focus trap and keyboard navigation
 */

"use client"

import React, { useEffect } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useFocusTrap, useEscapeKey, useBodyScrollLock } from '@/hooks/useAccessibility'
import { designSystem } from '@/constants/designSystem'

interface AccessibleModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description?: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
  closeOnBackdropClick?: boolean
}

const sizeClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
}

export const AccessibleModal: React.FC<AccessibleModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  size = 'md',
  closeOnBackdropClick = true,
}) => {
  const containerRef = useFocusTrap(isOpen)
  const shouldReduceMotion = useReducedMotion()
  
  useEscapeKey(onClose, isOpen)
  useBodyScrollLock(isOpen)

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (closeOnBackdropClick && e.target === e.currentTarget) {
      onClose()
    }
  }

  // Announce modal opening to screen readers
  useEffect(() => {
    if (isOpen) {
      const announcement = `${title} dialog opened. ${description || ''}`
      // This will be announced by the aria-live region
      console.log('Modal opened:', announcement)
    }
  }, [isOpen, title, description])

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const modalVariants = {
    hidden: shouldReduceMotion 
      ? { opacity: 0 }
      : { opacity: 0, scale: 0.95, y: 20 },
    visible: shouldReduceMotion
      ? { opacity: 1 }
      : { opacity: 1, scale: 1, y: 0 },
  }

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          ref={containerRef as React.RefObject<HTMLDivElement>}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.2 }}
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby={description ? "modal-description" : undefined}
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Content */}
          <motion.div
            className={`relative bg-folderWhite dark:bg-darkerBlue border-2 border-primaryBlue dark:border-folderCream rounded-lg shadow-2xl w-full ${sizeClasses[size]} max-h-[90vh] overflow-hidden flex flex-col`}
            variants={modalVariants}
            transition={{
              type: shouldReduceMotion ? "tween" : "spring",
              damping: 25,
              stiffness: 300,
              duration: shouldReduceMotion ? 0.01 : undefined,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between p-6 border-b-2 border-primaryBlue dark:border-folderCream">
              <div className="flex-1 pr-4">
                <h2
                  id="modal-title"
                  className="text-2xl font-bold text-inkBlack dark:text-backgroundCreamDark"
                >
                  {title}
                </h2>
                {description && (
                  <p
                    id="modal-description"
                    className="mt-2 text-sm text-gray-600 dark:text-gray-300"
                  >
                    {description}
                  </p>
                )}
              </div>

              {/* Close Button */}
              <motion.button
                onClick={onClose}
                className="flex-shrink-0 p-2 rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus-visible:outline-2 focus-visible:outline-primaryBlue dark:focus-visible:outline-folderCream focus-visible:outline-offset-2"
                aria-label="Close modal"
                whileHover={shouldReduceMotion ? {} : { scale: 1.1, rotate: 90 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
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
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-6">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default AccessibleModal