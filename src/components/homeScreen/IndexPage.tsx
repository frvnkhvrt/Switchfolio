"use client"
import dynamic from "next/dynamic"
import Screen from "@/layout/Screen"
import EnhancedAnimatedWrapper from "@/utils/EnhancedAnimatedWrapper"
import { useSwitch } from "../Context/SwitchContext"
import EnhancedNav from "../PageComponent/EnhancedNav"
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
const Skills = dynamic(() => import("../PageComponent/EnhancedSkills"), {
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
            <EnhancedAnimatedWrapper delay={0.15} variant="blur">
              <InfoCard />
            </EnhancedAnimatedWrapper>
            <EnhancedAnimatedWrapper delay={0.25} variant="slideUp">
              <AboutMe />
            </EnhancedAnimatedWrapper>
            <EnhancedAnimatedWrapper delay={0.35} variant="slideUp">
              <ReachOut />
            </EnhancedAnimatedWrapper>
            {!isSwitchOn && (
              <EnhancedAnimatedWrapper delay={0.45} variant="slideUp">
                <HireMe />
              </EnhancedAnimatedWrapper>
            )}
            <EnhancedAnimatedWrapper delay={0.55} variant="fade">
              <Skills />
            </EnhancedAnimatedWrapper>
            <EnhancedAnimatedWrapper delay={0.65} variant="slideUp">
              <Projects />
            </EnhancedAnimatedWrapper>
            <EnhancedAnimatedWrapper delay={0.75} variant="slideUp">
              <Writings />
            </EnhancedAnimatedWrapper>
            <EnhancedAnimatedWrapper delay={0.95} variant="slideUp">
              <SupportMe />
            </EnhancedAnimatedWrapper>
            </div>
            <EnhancedAnimatedWrapper delay={1.15} variant="fade">
              <Footer />
            </EnhancedAnimatedWrapper>
          </PersonaSwitchTransition>
        </main>
        <EnhancedNav />
      </Screen>
    </>
  )
}

export default IndexPage
