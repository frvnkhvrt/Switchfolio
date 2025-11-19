/**
 * Index Page
 * Main page component that assembles all portfolio sections
 * Uses dynamic imports for optimal bundle size
 */

"use client"
import React, { memo, useMemo } from "react"

import Screen from "@/layout/Screen"
import AnimatedWrapper from "@/utils/AnimatedWrapper"
import { useSwitch } from "../Context/SwitchContext"
import Nav from "../PageComponent/Nav"
import PersonaSwitchTransition from "../Transitions/PersonaSwitchTransition"
import { getCurrentPersona } from "@/services/personaService"
import { SECTION_DEFINITIONS, SectionComponents, SectionContext } from "@/config/sections"

// ============================================================================
// COMPONENT
// ============================================================================

const IndexPage: React.FC = memo(() => {
  const { isSwitchOn } = useSwitch()
  const persona = getCurrentPersona(isSwitchOn)

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
        variant: definition.variant,
        delay: definition.delay ?? 0,
        props: definition.getProps ? definition.getProps(sectionContext) : undefined,
      }))
  ), [sectionContext])

  return (
    <Screen>
      <main id="main-content" role="main" aria-label="Main content">
        <PersonaSwitchTransition>
          <div className="flex flex-col gap-6">
            {sectionsToRender.map(({ id, Component, delay, variant, props }) => (
              <AnimatedWrapper key={id} delay={delay} variant={variant}>
                <Component {...props} />
              </AnimatedWrapper>
            ))}
          </div>

          <AnimatedWrapper delay={0} variant="fade">
            <SectionComponents.Footer persona={persona} />
          </AnimatedWrapper>
        </PersonaSwitchTransition>
      </main>

      <Nav />
    </Screen>
  )
})

IndexPage.displayName = "IndexPage"

export default IndexPage
