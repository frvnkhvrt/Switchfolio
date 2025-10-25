"use client"
import React, { memo } from "react"
import dynamic from "next/dynamic"
import Screen from "@/layout/Screen"
import AnimatedWrapper from "@/utils/AnimatedWrapper"
import { useSwitch } from "../Context/SwitchContext"
import Nav from "../PageComponent/Nav"
import PersonaSwitchTransition from "../Transitions/PersonaSwitchTransition"

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
  component: React.ComponentType
  delay: number
  variant: "blur" | "slideUp" | "fade"
  condition?: (isSwitchOn: boolean) => boolean
}

const pageSections: PageSection[] = [
  { id: "info-card", component: InfoCard, delay: 0.15, variant: "blur" },
  { id: "about-me", component: AboutMe, delay: 0.25, variant: "slideUp" },
  { id: "hire-me", component: HireMe, delay: 0.45, variant: "slideUp" },
  { id: "skills", component: Skills, delay: 0.55, variant: "fade" },
  { id: "projects", component: Projects, delay: 0.65, variant: "slideUp" },
  { id: "writings", component: Writings, delay: 0.75, variant: "slideUp" },
  { id: "support-me", component: SupportMe, delay: 0.95, variant: "slideUp" },
]

const IndexPage: React.FC = memo(() => {
  const { isSwitchOn } = useSwitch()

  return (
    <>
      <Screen>
        <main id="main-content" role="main" aria-label="Main content">
          <PersonaSwitchTransition>
            <div className="flex flex-col gap-6">
              {pageSections.map((section) => {
                const { id, component: Component, delay, variant, condition } = section
                if (condition && !condition(isSwitchOn)) return null
                return (
                  <AnimatedWrapper key={id} delay={delay} variant={variant}>
                    <Component />
                  </AnimatedWrapper>
                )
              })}
            </div>
            <AnimatedWrapper delay={1.15} variant="fade">
              <Footer />
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
