/**
 * Index Page
 * Main page component that assembles all portfolio sections
 */

"use client"
import React, { memo, useMemo, useState } from "react"
import { AnimatePresence } from "framer-motion"

import Screen from "@/layout/Screen"
import { useSwitch } from "../Context/SwitchContext"
import Nav from "../PageComponent/Nav"
import { getCurrentPersona } from "@/services/personaService"
import { SECTION_DEFINITIONS, SectionComponents, SectionContext } from "@/config/sections"
import TrustBar from "../PageComponent/TrustBar"
import InfoCard from "../PageComponent/InfoCard"
import BootSequence from "@/components/BootSequence"
import BootTransition from "@/components/Transitions/BootTransition"

// ============================================================================
// COMPONENT
// ============================================================================

const IndexPage: React.FC = memo(() => {
  const { isSwitchOn } = useSwitch()
  const persona = getCurrentPersona(isSwitchOn)
  const [isBooting, setIsBooting] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [showContent, setShowContent] = useState(false)

  const handleBootComplete = () => {
    setIsBooting(false)
    setIsTransitioning(true)
  }

  const handleTransitionComplete = () => {
    setIsTransitioning(false)
    setShowContent(true)
  }

  const sectionContext = useMemo<SectionContext>(() => ({
    persona,
    isSwitchOn,
  }), [persona, isSwitchOn])

  const sectionsToRender = useMemo(() => (
    SECTION_DEFINITIONS
      .filter((definition) => definition.shouldRender ? definition.shouldRender(sectionContext) : true)
      .filter(s => s.id !== 'info-card')
      .map((definition) => ({
        id: definition.id,
        Component: definition.Component,
        props: definition.getProps ? definition.getProps(sectionContext) : undefined,
      }))
  ), [sectionContext])

  return (
    <Screen className={(isBooting || isTransitioning) ? "bg-black" : ""}>
      <AnimatePresence mode="wait">
        {isBooting && (
          <BootSequence key="boot" onComplete={handleBootComplete} />
        )}
      </AnimatePresence>

      <BootTransition 
        isCompleting={isTransitioning} 
        onTransitionComplete={handleTransitionComplete} 
      />

      {showContent && (
        <>
            <main id="main-content" role="main" aria-label="Main content">
                <div className="flex flex-col">
                    {/* HARD ENTRY - NO FADE */}
                    <InfoCard persona={persona} />
                    <TrustBar />

                    {sectionsToRender.map(({ id, Component, props }) => (
                        <Component key={id} {...props} />
                    ))}
                    
                    <SectionComponents.Footer persona={persona} />
                </div>
            </main>
            <Nav />
        </>
      )}
    </Screen>
  )
})

IndexPage.displayName = "IndexPage"

export default IndexPage
