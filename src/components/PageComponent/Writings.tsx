"use client"
import React from "react"
import SectionTitle from "../SectionTitle"
import { writings } from "@/data/Common/data"
import { MdKeyboardDoubleArrowDown } from "react-icons/md"
import { MdKeyboardDoubleArrowUp } from "react-icons/md"
import WritingsBox from "../WritingsBox"
import AnimatedWrapper from "@/utils/AnimatedWrapper"
import { useShowAll } from "@/utils/useShowAll"

const Writings = () => {
  const { visibleItems: visibleWritings, showAll, showAllVisible, toggleShowAll } = useShowAll(writings, 2)
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
              img={writings.img}
            />
          </AnimatedWrapper>
        ))}
      </div>
      {showAllVisible && (
        <button
          className="showMore-btn mt-4"
          onClick={toggleShowAll}
        >
          {showAll ? (
            <div className="flex gap-0.5 justify-center items-center">
              <div className="animate-pulse">
                <MdKeyboardDoubleArrowUp />
              </div>
              Show less
            </div>
          ) : (
            <div className="flex gap-0.5 justify-center items-center">
              <div className="animate-pulse">
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