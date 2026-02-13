"use client"
import React, { createContext, useContext, useMemo, useState, useEffect } from "react"
import { SwitchContextType } from "@/types"
import { usePersistentSwitch } from "@/hooks/usePersistentSwitch"
import { useDocumentTheme } from "@/hooks/useDocumentTheme"
import { getCurrentPersona } from "@/services/personaService"

export const SwitchContext = createContext<SwitchContextType | undefined>(undefined)

export const SwitchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isSwitchOn, isLoaded, toggleSwitch } = usePersistentSwitch()
  const [announcement, setAnnouncement] = useState("")

  useDocumentTheme(isSwitchOn, isLoaded)

  const theme = isSwitchOn ? 'dark' : 'light'
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Announce persona changes to screen readers
  useEffect(() => {
    if (!isLoaded) return
    const persona = getCurrentPersona(isSwitchOn)
    setAnnouncement(`Switched to ${persona.name}'s profile. ${persona.bio}.`)
  }, [isSwitchOn, isLoaded])

  const handleToggle = React.useCallback(() => {
    if (isTransitioning) return
    
    setIsTransitioning(true)
    
    // COVER PHASE (500ms)
    setTimeout(() => {
      toggleSwitch()
      
      // REVEAL PHASE (500ms)
      setTimeout(() => {
        setIsTransitioning(false)
      }, 500)
    }, 500)
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
      {isLoaded ? children : null}
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
