/**
 * Index Page
 * Main page component that assembles all portfolio sections
 */

"use client"
import React, { memo, useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import Screen from "@/layout/Screen"
import { useSwitch } from "../Context/SwitchContext"
import Nav from "../PageComponent/Nav"
import { getCurrentPersona } from "@/services/personaService"
import { SECTION_DEFINITIONS, SectionComponents, SectionContext } from "@/config/sections"
import TrustBar from "../PageComponent/TrustBar"
import InfoCard from "../PageComponent/InfoCard"
import BootSequence from "@/components/BootSequence"
import BootTransition from "@/components/Transitions/BootTransition"

// ============================================================================
// COMPONENT
// ============================================================================

const IndexPage: React.FC = memo(() => {
  const { isSwitchOn } = useSwitch()
  const persona = getCurrentPersona(isSwitchOn)
  const [isBooting, setIsBooting] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [showContent, setShowContent] = useState(false)

  const handleBootComplete = () => {
    setIsBooting(false)
    setIsTransitioning(true)
  }

  const handleTransitionComplete = () => {
    setIsTransitioning(false)
    setShowContent(true)
  }

  const sectionContext = useMemo<SectionContext>(() => ({
    persona,
    isSwitchOn,
  }), [persona, isSwitchOn])

  const sectionsToRender = useMemo(() => (
    SECTION_DEFINITIONS
      .filter((definition) => definition.shouldRender ? definition.shouldRender(sectionContext) : true)
      .filter(s => s.id !== 'info-card')
      .map((definition) => ({
        id: definition.id,
        Component: definition.Component,
        props: definition.getProps ? definition.getProps(sectionContext) : undefined,
      }))
  ), [sectionContext])

  return (
    <Screen className={(isBooting || isTransitioning) ? "bg-black" : ""}>
      <AnimatePresence mode="wait">
        {isBooting && (
          <BootSequence key="boot" onComplete={handleBootComplete} />
        )}
      </AnimatePresence>

      <BootTransition 
        isCompleting={isTransitioning} 
        onTransitionComplete={handleTransitionComplete} 
      />

      {showContent && (
        <>
            <motion.main 
              id="main-content" 
              role="main" 
              aria-label="Main content"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.2
                  }
                }
              }}
            >
                <div className="flex flex-col">
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                        visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                      }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <InfoCard persona={persona} />
                    </motion.div>

                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                        visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                      }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <TrustBar />
                    </motion.div>

                    {sectionsToRender.map(({ id, Component, props }) => (
                        <motion.div 
                          key={id}
                          variants={{
                            hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                            visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                          }}
                          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <Component {...props} />
                        </motion.div>
                    ))}
                    
                    <motion.div
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 }
                      }}
                    >
                      <SectionComponents.Footer persona={persona} />
                    </motion.div>
                </div>
            </motion.main>
            <Nav />
        </>
      )}
    </Screen>
  )
})

IndexPage.displayName = "IndexPage"

export default IndexPage
