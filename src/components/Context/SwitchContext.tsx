"use client"
import React, { createContext, useContext, useMemo, useState, useEffect, useRef } from "react"
import { SwitchContextType } from "@/types"
import { usePersistentSwitch } from "@/hooks/usePersistentSwitch"
import { useDocumentTheme } from "@/hooks/useDocumentTheme"
import { getCurrentPersona } from "@/services/personaService"

const COVER_MS = 500
const REVEAL_MS = 500

export const SwitchContext = createContext<SwitchContextType | undefined>(undefined)

export const SwitchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isSwitchOn, isLoaded, toggleSwitch } = usePersistentSwitch()
  const [announcement, setAnnouncement] = useState("")

  useDocumentTheme(isSwitchOn, isLoaded)

  const theme = isSwitchOn ? 'dark' : 'light'
  const [isTransitioning, setIsTransitioning] = useState(false)

  const timeoutIdsRef = useRef<ReturnType<typeof setTimeout>[]>([])
  const isMountedRef = useRef(true)

  useEffect(() => {
    isMountedRef.current = true
    return () => {
      isMountedRef.current = false
      timeoutIdsRef.current.forEach(clearTimeout)
      timeoutIdsRef.current = []
    }
  }, [])

  // Announce persona changes to screen readers
  useEffect(() => {
    if (!isLoaded) return
    const persona = getCurrentPersona(isSwitchOn)
    setAnnouncement(`Switched to ${persona.name}'s profile. ${persona.bio}.`)
  }, [isSwitchOn, isLoaded])

  const handleToggle = React.useCallback(() => {
    if (isTransitioning) return

    setIsTransitioning(true)

    const coverId = setTimeout(() => {
      if (!isMountedRef.current) return
      toggleSwitch()

      const revealId = setTimeout(() => {
        if (!isMountedRef.current) return
        setIsTransitioning(false)
      }, REVEAL_MS)
      timeoutIdsRef.current.push(revealId)
    }, COVER_MS)
    timeoutIdsRef.current.push(coverId)
  }, [isTransitioning, toggleSwitch])

  const contextValue = useMemo<SwitchContextType>(() => ({
    isSwitchOn,
    toggleSwitch: handleToggle,
    theme,
    isTransitioning,
  }), [isSwitchOn, handleToggle, theme, isTransitioning])

  return (
    <SwitchContext.Provider value={contextValue}>
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {announcement}
      </div>
      {children}
    </SwitchContext.Provider>
  )
}

export const useSwitch = (): SwitchContextType => {
  const context = useContext(SwitchContext)
  if (!context) {
    throw new Error("useSwitch must be used within a SwitchProvider")
  }
  return context
}
