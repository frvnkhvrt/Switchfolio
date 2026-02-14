/**
 * Index Page
 * Main page component that assembles all portfolio sections
 */

"use client"
import React, { memo, useMemo, useState, useCallback } from "react"
import { AnimatePresence, motion } from "framer-motion"

import { useSwitch } from "../Context/SwitchContext"
import Nav from "../PageComponent/Nav"
import { getCurrentPersona } from "@/services/personaService"
import { SECTION_DEFINITIONS, SectionContext } from "@/config/sections"
import { ENTRANCE_VARIANTS, BLUR_UP_TRANSITION } from "@/constants/animations"
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

  const handleBootComplete = useCallback(() => {
    setIsBooting(false)
    setIsTransitioning(true)
  }, [])

  const handleTransitionComplete = useCallback(() => {
    setIsTransitioning(false)
    setShowContent(true)
  }, [])

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
        props: definition.getProps ? definition.getProps(sectionContext) : undefined,
        variant: definition.variant,
      }))
  ), [sectionContext])

  return (
    <div className={(isBooting || isTransitioning) ? "min-h-screen bg-black" : ""}>
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
                    {sectionsToRender.map(({ id, Component, props, variant }) => (
                      <motion.div
                        key={id}
                        variants={variant === "fade" ? ENTRANCE_VARIANTS.fadeStagger : ENTRANCE_VARIANTS.blurUp}
                        transition={BLUR_UP_TRANSITION}
                      >
                        <Component {...(props ?? {})} />
                      </motion.div>
                    ))}
                </div>
            </motion.main>
            <Nav />
        </>
      )}
    </div>
  )
})

IndexPage.displayName = "IndexPage"

export default IndexPage
