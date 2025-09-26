"use client"
import dynamic from "next/dynamic"
import Screen from "@/layout/Screen"
import AnimatedWrapper from "@/utils/AnimatedWrapper"
import { useSwitch } from "../Context/SwitchContext"
import Nav from "../PageComponent/Nav"

// Lazy load components for better performance
const InfoCard = dynamic(() => import("../PageComponent/InfoCard"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-32 rounded-lg" />
})
const AboutMe = dynamic(() => import("../PageComponent/AboutMe"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-24 rounded-lg" />
})
const ReachOut = dynamic(() => import("../PageComponent/ReachOut"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-20 rounded-lg" />
})
const HireMe = dynamic(() => import("../PageComponent/HireMe"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-16 rounded-lg" />
})
const Skills = dynamic(() => import("../PageComponent/Skills"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-28 rounded-lg" />
})
const SupportMe = dynamic(() => import("../PageComponent/SupportMe"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-20 rounded-lg" />
})
const Footer = dynamic(() => import("../PageComponent/Footer"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-12 rounded-lg" />
})

// Commented out components (can be enabled later)
// const Projects = dynamic(() => import("../PageComponent/Projects"))
// const Writings = dynamic(() => import("../PageComponent/Writings"))
// const Newsletter = dynamic(() => import("../PageComponent/Newsletter"))
// const Quote = dynamic(() => import("../PageComponent/Quote"))

const IndexPage = () => {
  const { isSwitchOn } = useSwitch()

  return (
    <>
      <Screen>
        <div className="flex flex-col gap-5">
          <AnimatedWrapper delay={0.15}>
            <InfoCard />
          </AnimatedWrapper>
          <AnimatedWrapper delay={0.25}>
            <AboutMe />
          </AnimatedWrapper>
          <AnimatedWrapper delay={0.35}>
            <ReachOut />
          </AnimatedWrapper>
          {isSwitchOn ? (
            <></>
          ) : (
            <AnimatedWrapper delay={0.45}>
              <HireMe />
            </AnimatedWrapper>
          )}
          <AnimatedWrapper delay={0.55}>
            <Skills />
          </AnimatedWrapper>
          {/* <AnimatedWrapper delay={0.65}>
            <Projects />
          </AnimatedWrapper>
          <AnimatedWrapper delay={0.75}>
            <Writings />
          </AnimatedWrapper>
          <AnimatedWrapper delay={0.85}>
            <Newsletter />
          </AnimatedWrapper> */}
          <AnimatedWrapper delay={0.95}>
            <SupportMe />
          </AnimatedWrapper>
          {/* <AnimatedWrapper delay={1.05}>
            <Quote />
          </AnimatedWrapper> */}
        </div>
        <AnimatedWrapper delay={1.15}>
          <Footer />
        </AnimatedWrapper>
        <Nav />
      </Screen>
    </>
  )
}

export default IndexPage
