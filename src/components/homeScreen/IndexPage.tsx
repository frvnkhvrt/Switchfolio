"use client"
import dynamic from "next/dynamic"
import Screen from "@/layout/Screen"
import AnimatedWrapper from "@/utils/AnimatedWrapper"
import { useSwitch } from "../Context/SwitchContext"
import Nav from "../PageComponent/Nav"
import PersonaSwitchTransition from "../Transitions/PersonaSwitchTransition"
import { SkeletonCard, SkeletonProject, SkeletonSkills, SkeletonWriting } from "../Loading/SkeletonLoader"

// Lazy load components for better performance with branded skeleton loaders
const InfoCard = dynamic(() => import("../PageComponent/InfoCard"), {
  loading: () => <SkeletonCard />
})
const AboutMe = dynamic(() => import("../PageComponent/AboutMe"), {
  loading: () => <SkeletonCard className="h-24" />
})
const ReachOut = dynamic(() => import("../PageComponent/ReachOut"), {
  loading: () => <SkeletonCard className="h-20" />
})
const HireMe = dynamic(() => import("../PageComponent/HireMe"), {
  loading: () => <SkeletonCard className="h-16" />
})
const Skills = dynamic(() => import("../PageComponent/Skills"), {
  loading: () => <SkeletonSkills />
})
const SupportMe = dynamic(() => import("../PageComponent/SupportMe"), {
  loading: () => <SkeletonCard className="h-20" />
})
const Footer = dynamic(() => import("../PageComponent/Footer"), {
  loading: () => <SkeletonCard className="h-12" />
})

// Dynamic imports for components
const Projects = dynamic(() => import("../PageComponent/Projects"), {
  loading: () => (
    <div className="space-y-3">
      <SkeletonProject />
      <SkeletonProject />
    </div>
  )
})
const Writings = dynamic(() => import("../PageComponent/Writings"), {
  loading: () => <SkeletonWriting />
})

const IndexPage = () => {
  const { isSwitchOn } = useSwitch()

  return (
    <>
      <Screen>
        <main id="main-content" role="main">
          <PersonaSwitchTransition>
            <div className="flex flex-col gap-4">
            <AnimatedWrapper delay={0.15} variant="blur">
              <InfoCard />
            </AnimatedWrapper>
            <AnimatedWrapper delay={0.25} variant="slideUp">
              <AboutMe />
            </AnimatedWrapper>
            {!isSwitchOn && (
              <AnimatedWrapper delay={0.45} variant="slideUp">
                <HireMe />
              </AnimatedWrapper>
            )}
            <AnimatedWrapper delay={0.55} variant="fade">
              <Skills />
            </AnimatedWrapper>
            <AnimatedWrapper delay={0.65} variant="slideUp">
              <Projects />
            </AnimatedWrapper>
            <AnimatedWrapper delay={0.75} variant="slideUp">
              <Writings />
            </AnimatedWrapper>
            <AnimatedWrapper delay={0.95} variant="slideUp">
              <SupportMe />
            </AnimatedWrapper>
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
}

export default IndexPage
