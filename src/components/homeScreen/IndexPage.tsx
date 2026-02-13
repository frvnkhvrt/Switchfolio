/**
 * Index Page
 * Main page component that assembles all portfolio sections
 * Uses dynamic imports for optimal bundle size
 */

"use client"
import React, { memo, useMemo, useState, useEffect } from "react"

import Screen from "@/layout/Screen"
import { useSwitch } from "../Context/SwitchContext"
import Nav from "../PageComponent/Nav"
import { getCurrentPersona } from "@/services/personaService"
import { SECTION_DEFINITIONS, SectionComponents, SectionContext } from "@/config/sections"
import TrustBar from "../PageComponent/TrustBar"
import InfoCard from "../PageComponent/InfoCard"
import BootSequence from "@/components/BootSequence"

// ============================================================================
// COMPONENT
// ============================================================================

const IndexPage: React.FC = memo(() => {
  const { isSwitchOn } = useSwitch()
  const persona = getCurrentPersona(isSwitchOn)
  const [isBooting, setIsBooting] = useState(true)

  // Handle Boot Sequence
  useEffect(() => {
    // Optional: Check session storage to only show boot once per session
    // const hasBooted = sessionStorage.getItem("hasBooted")
    // if (hasBooted) setIsBooting(false)
  }, [])

  const handleBootComplete = () => {
    setIsBooting(false)
    // sessionStorage.setItem("hasBooted", "true")
  }

  const sectionContext = useMemo<SectionContext>(() => ({
    persona,
    isSwitchOn,
  }), [persona, isSwitchOn])

  const sectionsToRender = useMemo(() => (
    SECTION_DEFINITIONS
      .filter((definition) => definition.shouldRender ? definition.shouldRender(sectionContext) : true)
      .map((definition) => ({
        id: definition.id,
        Component: definition.Component,
        props: definition.getProps ? definition.getProps(sectionContext) : undefined,
      }))
  ), [sectionContext])

  return (
    <Screen>
      {isBooting && <BootSequence onComplete={handleBootComplete} />}

      {!isBooting && (
        <>
            <main id="main-content" role="main" aria-label="Main content">
                <div className="flex flex-col">
                    {/* HARD ENTRY - NO FADE */}
                    <InfoCard persona={persona} />
                    <TrustBar />

                    {sectionsToRender.filter(s => s.id !== 'info-card').map(({ id, Component, props }) => (
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
