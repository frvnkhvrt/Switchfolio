import React from "react"

interface ScreenProps {
  children: React.ReactNode
  className?: string
}

/**
 * Screen component - provides consistent layout wrapper
 * Can be used for both main screens and sub-screens
 */
const Screen: React.FC<ScreenProps> = ({ children, className = "" }) => {
  return <div className={`screen ${className}`.trim()}>{children}</div>
}

export default Screen
