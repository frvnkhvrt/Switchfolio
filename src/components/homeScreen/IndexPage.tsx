/**
 * Index Page
 * Main page component that assembles all portfolio sections
 * Uses dynamic imports for optimal bundle size
 */

"use client"
import React, { memo, useMemo } from "react"
import dynamic from "next/dynamic"
import Screen from "@/layout/Screen"
import AnimatedWrapper from "@/utils/AnimatedWrapper"
import { useSwitch } from "../Context/SwitchContext"
import Nav from "../PageComponent/Nav"
import PersonaSwitchTransition from "../Transitions/PersonaSwitchTransition"
import { getCurrentPersona } from "@/services/personaService"
import type { AnimationVariant, Persona } from "@/types"

// ============================================================================
// DYNAMIC COMPONENT REGISTRY
// ============================================================================

const SectionComponents = {
  InfoCard: dynamic(() => import("../PageComponent/InfoCard")),
  AboutMe: dynamic(() => import("../PageComponent/AboutMe")),
  HireMe: dynamic(() => import("../PageComponent/HireMe")),
  Skills: dynamic(() => import("../PageComponent/Skills")),
  Projects: dynamic(() => import("../PageComponent/Projects")),
  Writings: dynamic(() => import("../PageComponent/Writings")),
  SupportMe: dynamic(() => import("../PageComponent/SupportMe")),
  Footer: dynamic(() => import("../PageComponent/Footer")),
}

// ============================================================================
// SECTION DEFINITIONS
// ============================================================================

type SectionContext = {
  persona: Persona
  isSwitchOn: boolean
}

interface SectionDefinition {
  id: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: React.ComponentType<any>
  variant: AnimationVariant
  delay?: number
  getProps?: (context: SectionContext) => Record<string, unknown>
  shouldRender?: (context: SectionContext) => boolean
}

const SECTION_DEFINITIONS: SectionDefinition[] = [
  {
    id: "info-card",
    Component: SectionComponents.InfoCard,
    variant: "blur",
    getProps: ({ persona }) => ({ persona }),
  },
  {
    id: "about-me",
    Component: SectionComponents.AboutMe,
    variant: "slideUp",
    getProps: ({ persona }) => ({ persona }),
  },
  {
    id: "hire-me",
    Component: SectionComponents.HireMe,
    variant: "slideUp",
  },
  {
    id: "skills",
    Component: SectionComponents.Skills,
    variant: "fade",
  },
  {
    id: "projects",
    Component: SectionComponents.Projects,
    variant: "blur",
    shouldRender: () => false,
  },
  {
    id: "writings",
    Component: SectionComponents.Writings,
    variant: "blur",
    shouldRender: () => false,
  },
  {
    id: "support-me",
    Component: SectionComponents.SupportMe,
    variant: "slideUp",
    shouldRender: () => false,
  },
]

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
