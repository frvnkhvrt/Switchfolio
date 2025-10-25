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
import type { AnimationVariant } from "@/types"

// ============================================================================
// DYNAMIC IMPORTS
// ============================================================================

/**
 * Lazy load components for optimal bundle splitting and performance
 */
const InfoCard = dynamic(() => import("../PageComponent/InfoCard"))
const AboutMe = dynamic(() => import("../PageComponent/AboutMe"))
const HireMe = dynamic(() => import("../PageComponent/HireMe"))
const Skills = dynamic(() => import("../PageComponent/Skills"))
const Projects = dynamic(() => import("../PageComponent/Projects"))
const Writings = dynamic(() => import("../PageComponent/Writings"))
const SupportMe = dynamic(() => import("../PageComponent/SupportMe"))
const Footer = dynamic(() => import("../PageComponent/Footer"))

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

/**
 * Configuration for page sections
 * Defines section rendering behavior and animation properties
 */
interface PageSection {
  /** Unique section identifier */
  id: string
  /** React component to render */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentType<any>
  /** Animation delay in seconds (use 0 for instant) */
  delay: number
  /** Animation variant type */
  variant: AnimationVariant
  /** Optional condition to render section */
  condition?: (isSwitchOn: boolean) => boolean
  /** Props to pass to the component */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props?: any
}

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * IndexPage Component
 * Assembles all portfolio sections with animations
 */
const IndexPage: React.FC = memo(() => {
  const { isSwitchOn } = useSwitch()
  const currentPersona = getCurrentPersona(isSwitchOn)

  /**
   * Page sections configuration
   * Memoized to prevent recreating on every render
   */
  const pageSections: PageSection[] = useMemo(() => [
    { 
      id: "info-card", 
      component: InfoCard, 
      delay: 0, 
      variant: "blur", 
      props: { persona: currentPersona } 
    },
    { 
      id: "about-me", 
      component: AboutMe, 
      delay: 0, 
      variant: "slideUp", 
      props: { persona: currentPersona } 
    },
    { 
      id: "hire-me", 
      component: HireMe, 
      delay: 0, 
      variant: "slideUp" 
    },
    { 
      id: "skills", 
      component: Skills, 
      delay: 0, 
      variant: "fade" 
    },
    { 
      id: "projects", 
      component: Projects, 
      delay: 0, 
      variant: "blur" 
    },
    { 
      id: "writings", 
      component: Writings, 
      delay: 0, 
      variant: "blur" 
    },
    { 
      id: "support-me", 
      component: SupportMe, 
      delay: 0, 
      variant: "slideUp" 
    },
  ], [currentPersona])

  return (
    <>
      <Screen>
        <main id="main-content" role="main" aria-label="Main content">
          <PersonaSwitchTransition>
            {/* Portfolio Sections */}
            <div className="flex flex-col gap-6">
              {pageSections.map((section) => {
                const { id, component: Component, delay, variant, condition, props } = section
                
                // Skip section if condition is not met
                if (condition && !condition(isSwitchOn)) {
                  return null
                }
                
                return (
                  <AnimatedWrapper key={id} delay={delay} variant={variant}>
                    <Component {...props} />
                  </AnimatedWrapper>
                )
              })}
            </div>
            
            {/* Footer */}
            <AnimatedWrapper delay={0} variant="fade">
              <Footer persona={currentPersona} />
            </AnimatedWrapper>
          </PersonaSwitchTransition>
        </main>
        
        {/* Navigation */}
        <Nav />
      </Screen>
    </>
  )
})

IndexPage.displayName = "IndexPage"

export default IndexPage
