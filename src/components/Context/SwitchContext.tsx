"use client"
import React, { createContext, useContext, useEffect, useState } from "react"

type SwitchContextType = {
  isSwitchOn: boolean
  toggleSwitch: () => void
}

const SwitchContext = createContext<SwitchContextType | undefined>(undefined)

export const SwitchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(false)
  const [isLoaded, setIsLoaded] = useState(false) // Ensure client-side rendering

  useEffect(() => {
    // Fetch initial value from localStorage after the component mounts
    const storedValue = localStorage.getItem("isSwitchOn")
    if (storedValue !== null) {
      try {
        setIsSwitchOn(JSON.parse(storedValue))
      } catch (error) {
        console.error("Error parsing localStorage value for isSwitchOn:", error)
        // Reset to default if corrupted
        localStorage.removeItem("isSwitchOn")
      }
    }
    setIsLoaded(true) // Indicate the component has mounted
  }, [])

  const toggleSwitch = () => {
    setIsSwitchOn((prev) => {
      const newValue = !prev
      localStorage.setItem("isSwitchOn", JSON.stringify(newValue))
      return newValue
    })
  }

  return (
    <SwitchContext.Provider value={{ isSwitchOn, toggleSwitch }}>
      {isLoaded ? children : null}{" "}
      {/* Ensure children render only after mounting */}
    </SwitchContext.Provider>
  )
}

export const useSwitch = () => {
  const context = useContext(SwitchContext)
  if (!context) {
    throw new Error("useSwitch must be used within a SwitchProvider")
  }
  return context
}
