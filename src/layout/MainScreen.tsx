import React from "react"
import Screen from "./Screen"

interface MainScreenProps {
  children: React.ReactNode
}

/**
 * MainScreen component - wrapper for the main application screen
 * Uses the base Screen component with main-screen styling
 */
const MainScreen: React.FC<MainScreenProps> = ({ children }) => {
  return <Screen className="main-screen">{children}</Screen>
}

export default MainScreen
