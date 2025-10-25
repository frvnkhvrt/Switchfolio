"use client"
import React from "react"
import SectionTitle from "../SectionTitle"
import { writings } from "@/data/Common/data"
import WritingsBox from "../WritingsBox"
import AnimatedWrapper from "@/utils/AnimatedWrapper"
import { useShowAll } from "@/utils/useShowAll"
import ShowMoreButton from "../ShowMoreButton"
import { LIST_VISIBILITY } from "@/constants"
import { DURATIONS } from "@/constants/animations"

/**
 * Writings Section Component
 * Displays blog posts and articles with animated appearance
 */
const Writings = () => {
  const { visibleItems: visibleWritings, showAll, showAllVisible, toggleShowAll } = useShowAll(writings, LIST_VISIBILITY.defaultVisible)
  
  return (
    <section className="flex flex-col gap-1">
      <SectionTitle title="Writings" level={4} />
      {/* <StillWorking /> */}
      <div className="flex flex-col gap-3">
        {visibleWritings.map((writing) => (
          <AnimatedWrapper
            key={writing.id}
            delay={0}
            variant="blur"
            duration={DURATIONS.normal}
          >
            <WritingsBox
              head={writing.head}
              description={writing.des}
              link={writing.link}
              img={writing.img}
            />
          </AnimatedWrapper>
        ))}
      </div>
      {showAllVisible && (
        <ShowMoreButton showAll={showAll} toggleShowAll={toggleShowAll} />
      )}
    </section>
  )
}

export default Writings