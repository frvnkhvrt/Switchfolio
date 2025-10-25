"use client"
import React, { memo } from "react"
import dynamic from "next/dynamic"
import Screen from "@/layout/Screen"
import AnimatedWrapper from "@/utils/AnimatedWrapper"
import { useSwitch } from "../Context/SwitchContext"
import Nav from "../PageComponent/Nav"
import PersonaSwitchTransition from "../Transitions/PersonaSwitchTransition"
import { getCurrentPersona } from "@/services/personaService"
import { ANIMATION_DELAYS } from "@/constants"

// Lazy load components for better performance
const InfoCard = dynamic(() => import("../PageComponent/InfoCard"))
const AboutMe = dynamic(() => import("../PageComponent/AboutMe"))
const HireMe = dynamic(() => import("../PageComponent/HireMe"))
const Skills = dynamic(() => import("../PageComponent/Skills"))
const SupportMe = dynamic(() => import("../PageComponent/SupportMe"))
const Footer = dynamic(() => import("../PageComponent/Footer"))

// Dynamic imports for components
const Projects = dynamic(() => import("../PageComponent/Projects"))
const Writings = dynamic(() => import("../PageComponent/Writings"))

// Configuration for page sections to improve maintainability and readability
interface PageSection {
  id: string;
  component: React.ComponentType<any>
  delay: number
  variant: "blur" | "slideUp" | "fade"
  condition?: (isSwitchOn: boolean) => boolean
  props?: any
}

const IndexPage: React.FC = memo(() => {
  const { isSwitchOn } = useSwitch()
  const currentPersona = getCurrentPersona(isSwitchOn)

  const pageSections: PageSection[] = [
    { id: "info-card", component: InfoCard, delay: ANIMATION_DELAYS.short, variant: "blur", props: { persona: currentPersona } },
    { id: "about-me", component: AboutMe, delay: ANIMATION_DELAYS.medium, variant: "slideUp", props: { persona: currentPersona } },
    { id: "hire-me", component: HireMe, delay: ANIMATION_DELAYS.long, variant: "slideUp" },
    { id: "skills", component: Skills, delay: ANIMATION_DELAYS.extra, variant: "fade" },
    { id: "projects", component: Projects, delay: ANIMATION_DELAYS.super, variant: "slideUp" },
    { id: "writings", component: Writings, delay: ANIMATION_DELAYS.hyper, variant: "slideUp" },
    { id: "support-me", component: SupportMe, delay: ANIMATION_DELAYS.mega, variant: "slideUp" },
  ]

  return (
    <>
      <Screen>
        <main id="main-content" role="main" aria-label="Main content">
          <PersonaSwitchTransition>
            <div className="flex flex-col gap-6">
              {pageSections.map((section) => {
                const { id, component: Component, delay, variant, condition, props } = section
                if (condition && !condition(isSwitchOn)) return null
                return (
                  <AnimatedWrapper key={id} delay={delay} variant={variant}>
                    <Component {...props} />
                  </AnimatedWrapper>
                )
              })}
            </div>
            <AnimatedWrapper delay={ANIMATION_DELAYS.giga} variant="fade">
              <Footer persona={currentPersona} />
            </AnimatedWrapper>
          </PersonaSwitchTransition>
        </main>
        <Nav />
      </Screen>
    </>
  )
})

IndexPage.displayName = "IndexPage"

export default IndexPage
