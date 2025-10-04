/**
 * Toast Hook
 * Manages toast notifications state and actions
 */

"use client"

import { useState, useCallback } from "react"

interface ToastItem {
  id: string
  message: string
  type?: 'success' | 'error' | 'info' | 'warning'
  duration?: number
}

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastItem[]>([])

  const addToast = useCallback((
    message: string,
    type: 'success' | 'error' | 'info' | 'warning' = 'info',
    duration: number = 5000
  ) => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    const toast: ToastItem = { id, message, type, duration }

    setToasts(prev => [...prev, toast])

    return id
  }, [])

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }, [])

  const clearAllToasts = useCallback(() => {
    setToasts([])
  }, [])

  // Convenience methods
  const success = useCallback((message: string, duration?: number) =>
    addToast(message, 'success', duration), [addToast])

  const error = useCallback((message: string, duration?: number) =>
    addToast(message, 'error', duration), [addToast])

  const warning = useCallback((message: string, duration?: number) =>
    addToast(message, 'warning', duration), [addToast])

  const info = useCallback((message: string, duration?: number) =>
    addToast(message, 'info', duration), [addToast])

  return {
    toasts,
    addToast,
    removeToast,
    clearAllToasts,
    success,
    error,
    warning,
    info
  }
}