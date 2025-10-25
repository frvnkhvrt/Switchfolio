"use client"
import React, { createContext, useContext, useMemo } from "react"
import { SwitchContextType } from "@/types"
import { usePersistentSwitch } from "@/hooks/usePersistentSwitch"
import { useDocumentTheme } from "@/hooks/useDocumentTheme"

export const SwitchContext = createContext<SwitchContextType | undefined>(undefined)

export const SwitchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isSwitchOn, isLoaded, toggleSwitch } = usePersistentSwitch()

  useDocumentTheme(isSwitchOn, isLoaded)

  const theme = isSwitchOn ? 'dark' : 'light'

  const contextValue = useMemo<SwitchContextType>(() => ({
    isSwitchOn,
    toggleSwitch,
    theme,
  }), [isSwitchOn, toggleSwitch, theme])

  return (
    <SwitchContext.Provider value={contextValue}>
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
