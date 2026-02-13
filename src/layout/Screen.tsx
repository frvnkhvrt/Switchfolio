"use client"

import React from "react"
import dynamic from "next/dynamic"

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false })

interface ScreenProps {
  children: React.ReactNode
  className?: string
}

/**
 * Screen component - provides consistent layout wrapper
 * Can be used for both main screens and sub-screens
 */
const Screen: React.FC<ScreenProps> = ({ children, className = "" }) => {
  return (
    <div className={`screen ${className}`.trim()}>
        <CustomCursor />
        {children}
    </div>
  )
}

export default Screen
