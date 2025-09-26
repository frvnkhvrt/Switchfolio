"use client"
import Screen from "@/layout/Screen"
import AboutMe from "../PageComponent/AboutMe"
import Footer from "../PageComponent/Footer"
import InfoCard from "../PageComponent/InfoCard"
// import Projects from "../PageComponent/Projects"
import Skills from "../PageComponent/Skills"
import ReachOut from "../PageComponent/ReachOut"
// import Writings from "../PageComponent/Writings"
import HireMe from "../PageComponent/HireMe"
import AnimatedWrapper from "@/utils/AnimatedWrapper"
import { useSwitch } from "../Context/SwitchContext"
import Nav from "../PageComponent/Nav"
import SupportMe from "../PageComponent/SupportMe"
// import Newsletter from "../PageComponent/Newsletter"
// import Quote from "../PageComponent/Quote"

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
