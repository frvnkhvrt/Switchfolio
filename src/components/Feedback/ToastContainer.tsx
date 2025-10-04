/**
 * Toast Container Component
 * Manages multiple toast notifications
 */

"use client"

import React from "react"
import { Toast } from "./Toast"

interface ToastItem {
  id: string
  message: string
  type?: 'success' | 'error' | 'info' | 'warning'
  duration?: number
}

interface ToastContainerProps {
  toasts: ToastItem[]
  onRemove: (id: string) => void
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
}

const positionClasses = {
  'top-right': 'top-4 right-4',
  'top-left': 'top-4 left-4',
  'bottom-right': 'bottom-4 right-4',
  'bottom-left': 'bottom-4 left-4'
}

export const ToastContainer: React.FC<ToastContainerProps> = ({
  toasts,
  onRemove,
  position = 'top-right'
}) => {
  if (toasts.length === 0) return null

  return (
    <div
      className={`fixed z-50 ${positionClasses[position]} space-y-2 pointer-events-none`}
      aria-live="polite"
      aria-label="Notifications"
    >
      {toasts.map((toast) => (
        <div key={toast.id} className="pointer-events-auto">
          <Toast
            id={toast.id}
            message={toast.message}
            type={toast.type}
            duration={toast.duration}
            onClose={onRemove}
          />
        </div>
      ))}
    </div>
  )
}

export default ToastContainer