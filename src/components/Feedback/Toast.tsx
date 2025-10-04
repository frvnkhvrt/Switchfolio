/**
 * Toast Notification Component
 * Accessible toast notifications with auto-dismiss
 */

"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Icon } from "@iconify/react"

interface ToastProps {
  id: string
  message: string
  type?: 'success' | 'error' | 'info' | 'warning'
  duration?: number
  onClose: (id: string) => void
}

const toastStyles = {
  success: {
    bg: 'bg-green-50 dark:bg-green-900/20',
    border: 'border-green-200 dark:border-green-800',
    text: 'text-green-800 dark:text-green-200',
    icon: 'simple-icons:check-circle',
    iconColor: 'text-green-600 dark:text-green-400'
  },
  error: {
    bg: 'bg-red-50 dark:bg-red-900/20',
    border: 'border-red-200 dark:border-red-800',
    text: 'text-red-800 dark:text-red-200',
    icon: 'simple-icons:close-circle',
    iconColor: 'text-red-600 dark:text-red-400'
  },
  warning: {
    bg: 'bg-yellow-50 dark:bg-yellow-900/20',
    border: 'border-yellow-200 dark:border-yellow-800',
    text: 'text-yellow-800 dark:text-yellow-200',
    icon: 'simple-icons:alert-circle',
    iconColor: 'text-yellow-600 dark:text-yellow-400'
  },
  info: {
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    border: 'border-blue-200 dark:border-blue-800',
    text: 'text-blue-800 dark:text-blue-200',
    icon: 'simple-icons:info-circle',
    iconColor: 'text-blue-600 dark:text-blue-400'
  }
}

export const Toast: React.FC<ToastProps> = ({
  id,
  message,
  type = 'info',
  duration = 5000,
  onClose
}) => {
  const [isVisible, setIsVisible] = useState(true)
  const styles = toastStyles[type]

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false)
        setTimeout(() => onClose(id), 300) // Allow exit animation to complete
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [duration, id, onClose])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => onClose(id), 300)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 300, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 300, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className={`max-w-sm w-full ${styles.bg} border ${styles.border} rounded-lg shadow-lg pointer-events-auto`}
          role="alert"
          aria-live="assertive"
        >
          <div className="p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Icon
                  icon={styles.icon}
                  className={`h-6 w-6 ${styles.iconColor}`}
                  aria-hidden="true"
                />
              </div>
              <div className="ml-3 w-0 flex-1">
                <p className={`text-sm font-medium ${styles.text}`}>
                  {message}
                </p>
              </div>
              <div className="ml-4 flex-shrink-0 flex">
                <button
                  onClick={handleClose}
                  className={`inline-flex ${styles.text} hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaryBlue dark:focus:ring-folderCream rounded-sm`}
                  aria-label="Dismiss notification"
                >
                  <span className="sr-only">Close</span>
                  <Icon
                    icon="simple-icons:close"
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Toast