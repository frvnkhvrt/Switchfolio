"use client"
import React, { createContext, useContext, useEffect, useState, useMemo, useCallback } from "react"
import { SwitchContextType } from "@/types"

const SwitchContext = createContext<SwitchContextType | undefined>(undefined)

export const SwitchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Safely load initial value from localStorage
    try {
      const storedValue = localStorage.getItem("isSwitchOn")
      if (storedValue !== null) {
        const parsedValue = JSON.parse(storedValue)
        if (typeof parsedValue === 'boolean') {
          setIsSwitchOn(parsedValue)
        }
      }
    } catch (error) {
      console.warn("Failed to load switch state from localStorage:", error)
      // Clear corrupted data
      localStorage.removeItem("isSwitchOn")
    } finally {
      setIsLoaded(true)
    }
  }, [])

  useEffect(() => {
    if (isLoaded) {
      if (isSwitchOn) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }, [isSwitchOn, isLoaded])

  const toggleSwitch = useCallback(() => {
    setIsSwitchOn((prev) => {
      const newValue = !prev
      try {
        localStorage.setItem("isSwitchOn", JSON.stringify(newValue))
      } catch (error) {
        console.error("Failed to save switch state to localStorage:", error)
      }
      return newValue
    })
  }, [])

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
