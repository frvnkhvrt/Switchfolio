"use client"
import { projects } from "@/data/Common/data"
import ProjectBox from "../ProjectBox"
import SectionTitle from "../SectionTitle"
import AnimatedWrapper from "@/utils/AnimatedWrapper"
import { useShowAll } from "@/utils/useShowAll"
import ShowMoreButton from "../ShowMoreButton"
import { LIST_VISIBILITY } from "@/constants"
import { DURATIONS } from "@/constants/animations"

/**
 * Projects Section Component
 * Displays portfolio projects with animated appearance and expandable details
 */
const Projects = () => {
  const { visibleItems: visibleProjects, showAll, showAllVisible, toggleShowAll } = useShowAll(projects, LIST_VISIBILITY.defaultVisible)

  return (
    <section
      id="projects"
      className="flex flex-col gap-3 sm:gap-4"
      aria-labelledby="projects-heading"
      aria-describedby="projects-description"
    >
      <SectionTitle title="Projects" level={2} />
      <p
        id="projects-description"
        className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed"
      >
      </p>
      <div className="flex flex-col gap-3 sm:gap-4" role="list" aria-label="Project list">
        {visibleProjects.map((project) => (
          <AnimatedWrapper
            key={project.id}
            delay={0}
            variant="blur"
            duration={DURATIONS.normal}
          >
            <div role="listitem">
              <ProjectBox
                title={project.title}
                content={project.content}
                status={project.status}
                skill={project.skill}
                url={project.url || ""}
                github={project.github || ""}
                results={project.results}
              />
            </div>
          </AnimatedWrapper>
        ))}
      </div>

      {showAllVisible && (
        <ShowMoreButton showAll={showAll} toggleShowAll={toggleShowAll} />
      )}
    </section>
  )
}

export default Projects