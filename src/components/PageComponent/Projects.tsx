"use client"
import { projects } from "@/data/Common/data"
import ProjectBox from "../ProjectBox"
import SectionTitle from "../SectionTitle"
import AnimatedWrapper from "@/utils/AnimatedWrapper"
import { useShowAll } from "@/utils/useShowAll"
import ShowMoreButton from "../ShowMoreButton"
import { LIST_VISIBILITY } from "@/constants"

const Projects = () => {
  const { visibleItems: visibleProjects, showAll, showAllVisible, toggleShowAll } = useShowAll(projects, LIST_VISIBILITY.defaultVisible)

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
        <ShowMoreButton showAll={showAll} toggleShowAll={toggleShowAll} />
      )}

    </section>
  )
}

export default Projects