"use client"
import React, { useState } from "react"
import SectionTitle from "../SectionTitle"
import { writings } from "@/data/Common/data"
import { MdKeyboardDoubleArrowDown } from "react-icons/md"
import { MdKeyboardDoubleArrowUp } from "react-icons/md"
import WritingsBox from "../WritingsBox"
import AnimatedWrapper from "@/utils/AnimatedWrapper"

const Writings = () => {
  const showAllVis = writings.length > 2
  const [showAll, setShowAll] = useState(false)
  const visibleWritings = showAll ? writings : writings.slice(0, 2)
  let delayValue = 0
  return (
    <section className="flex flex-col gap-1">
      <SectionTitle title="Writings" level={4} />
      {/* <StillWorking /> */}
      <div className="  flex flex-col gap-3">
        {visibleWritings.map((writings) => (
          <AnimatedWrapper
            key={writings.id}
            delay={writings.id === 1 ? delayValue : (delayValue += 0.075)}
          >
            <WritingsBox
              head={writings.head}
              des={writings.des}
              link={writings.link}
            />
          </AnimatedWrapper>
        ))}
      </div>
      {showAllVis && (
        <button
          className="  showMore-btn "
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? (
            <div className="flex gap-0.5 justify-center items-center">
              <div className=" animate-pulse">
                <MdKeyboardDoubleArrowUp />
              </div>
              Show less
            </div>
          ) : (
            <div className="flex gap-0.5 justify-center items-center">
              <div className=" animate-pulse">
                <MdKeyboardDoubleArrowDown />
              </div>
              Show all
            </div>
          )}
        </button>
      )}
    </section>
  )
}

export default Writings
