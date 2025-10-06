"use client"
import { projects } from "@/data/Common/data"
import ProjectBox from "../ProjectBox"
import SectionTitle from "../SectionTitle"
import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md"
import AnimatedWrapper from "@/utils/AnimatedWrapper"
import { motion, useReducedMotion } from "framer-motion"
import { useShowAll } from "@/utils/useShowAll"

const Projects = () => {
  const { visibleItems: visibleProjects, showAll, showAllVisible, toggleShowAll } = useShowAll(projects, 2)
  const shouldReduceMotion = useReducedMotion()

  let delayValue = 0
  
  return (
    <section id="projects" className="flex flex-col gap-1">
      <SectionTitle title="Projects" level={4} />
      <div className="flex flex-col gap-3" role="list" aria-label="Project list">
        {visibleProjects.map((project) => (
          <AnimatedWrapper
            key={project.id}
            delay={project.id === 1 ? delayValue : (delayValue += 0.075)}
            variant="slideUp"
          >
            <div role="listitem">
              <ProjectBox
                title={project.title}
                content={project.content}
                status={project.status}
                skill={project.skill}
                url={project.url || ""}
                github={project.github || ""}
              />
            </div>
          </AnimatedWrapper>
        ))}
      </div>
      
      {showAllVisible && (
        <motion.button
          className="showMore-btn flex items-center justify-center gap-2 min-h-[36px] focus-visible:outline-2 focus-visible:outline-primaryBlue dark:focus-visible:outline-folderCream focus-visible:outline-offset-2"
          onClick={toggleShowAll}
          aria-expanded={showAll}
          aria-label={showAll ? "Show fewer projects" : "Show all projects"}
          whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
        >
          <motion.div
            animate={shouldReduceMotion ? {} : { y: showAll ? [-2, 2, -2] : [2, -2, 2] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {showAll ? <MdKeyboardDoubleArrowUp aria-hidden="true" /> : <MdKeyboardDoubleArrowDown aria-hidden="true" />}
          </motion.div>
          <span>{showAll ? 'Show less' : 'Show all'}</span>
        </motion.button>
      )}

    </section>
  )
}

export default Projects
