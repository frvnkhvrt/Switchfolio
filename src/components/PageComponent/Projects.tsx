"use client"
import { projects } from "@/data/Common/data"
import ProjectBox from "../ProjectBox"
import SectionTitle from "../SectionTitle"
import { useState } from "react"
import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md"
import AnimatedWrapper from "@/utils/AnimatedWrapper"

const Projects = () => {
  const showAllVis = projects.length > 2
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? projects : projects.slice(0, 2)
  let delayValue = 0
  return (
    <div id="projects" className="flex flex-col gap-3">
      <SectionTitle title="Projects" />
      <div className=" flex flex-col md:gap-2.5 gap-3.5">
        {visibleProjects.map((project) => (
          <AnimatedWrapper
            key={project.id}
            delay={project.id === 1 ? delayValue : (delayValue += 0.075)}
          >
            <ProjectBox
              title={project.title}
              content={project.content}
              status={project.status}
              skill={project.skill}
              url={project.url || ""}
              github={project.github || ""}
            />
          </AnimatedWrapper>
        ))}
      </div>
      <div>
        {showAllVis && (
          <button
            className=" showMore-btn "
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
      </div>
    </div>
  )
}

export default Projects
