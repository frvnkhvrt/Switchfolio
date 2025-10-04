"use client"
import { projects } from "@/data/Common/data"
import EnhancedProjectBox from "../EnhancedProjectBox"
import SectionTitle from "../SectionTitle"
import ProjectDetailModal from "../Projects/ProjectDetailModal"
import { useState } from "react"
import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md"
import EnhancedAnimatedWrapper from "@/utils/EnhancedAnimatedWrapper"
import { motion, useReducedMotion } from "framer-motion"

const Projects = () => {
  const showAllVis = projects.length > 2
  const [showAll, setShowAll] = useState(false)
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const visibleProjects = showAll ? projects : projects.slice(0, 2)
  const shouldReduceMotion = useReducedMotion()

  const handleViewDetails = (project: typeof projects[0]) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  let delayValue = 0
  
  return (
    <section id="projects" className="flex flex-col gap-2">
      <SectionTitle title="Projects" level={4} />
      <div className="flex flex-col md:gap-2 gap-3" role="list" aria-label="Project list">
        {visibleProjects.map((project) => (
          <EnhancedAnimatedWrapper
            key={project.id}
            delay={project.id === 1 ? delayValue : (delayValue += 0.075)}
            variant="slideUp"
          >
            <div role="listitem">
              <EnhancedProjectBox
                title={project.title}
                content={project.content}
                status={project.status}
                skill={project.skill}
                url={project.url || ""}
                github={project.github || ""}
                onViewDetails={() => handleViewDetails(project)}
                hasCaseStudy={!!project.caseStudy}
              />
            </div>
          </EnhancedAnimatedWrapper>
        ))}
      </div>
      
      {showAllVis && (
        <motion.button
          className="showMore-btn flex items-center justify-center gap-2 min-h-[36px] focus-visible:outline-2 focus-visible:outline-primaryBlue dark:focus-visible:outline-folderCream focus-visible:outline-offset-2"
          onClick={() => setShowAll((prev) => !prev)}
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

      <ProjectDetailModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </section>
  )
}

export default Projects
