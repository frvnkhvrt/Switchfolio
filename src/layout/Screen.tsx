"use client"

import React from "react"
import dynamic from "next/dynamic"

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false })

interface ScreenComponentProps {
  children: React.ReactNode
  className?: string
}

/**
 * Screen component - provides consistent layout wrapper
 * Can be used for both main screens and sub-screens
 */
const Screen: React.FC<ScreenComponentProps> = ({ children, className = "" }) => {
  return (
    <div className={`screen min-h-screen transition-colors duration-0 ${className}`.trim()}>
        <CustomCursor />
        {children}
    </div>
  )
}

export default Screen
