/**
 * Projects Section - "The Archive"
 * Neobrutalist Case Files
 */

"use client"

import React, { useState, memo } from "react"
import { projects } from "@/data/Common/data"
import { Icon } from "@iconify/react"
import { motion, AnimatePresence } from "framer-motion"

const ProjectItem = memo(({ project, index, isOpen, toggle }: { project: typeof projects[0], index: number, isOpen: boolean, toggle: () => void }) => {
  return (
    <div className="border-b-2 border-black dark:border-white group/item last:border-b-0">
      {/* HEADER ROW */}
      <button 
        onClick={toggle}
        className="relative w-full flex items-center justify-between p-4 md:p-6 bg-white dark:bg-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-0"
        aria-expanded={isOpen}
        aria-label={`${project.title} — ${project.status === 'running' ? 'Live' : 'Building'}`}
      >
        <div className="flex items-center gap-4 md:gap-8">
            {/* Index number */}
            <span className="font-terminal text-sm md:text-base opacity-50 w-8 text-left">
                {(index + 1).toString().padStart(2, '0')}
            </span>
            
            {/* Title */}
            <h3 className="text-xl md:text-3xl font-black uppercase tracking-tighter text-left">
                {project.title}
            </h3>
            
            {/* Status dot */}
            <div className={`w-2.5 h-2.5 flex-shrink-0 ${project.status === 'running' ? 'bg-status-ok' : 'bg-cta'}`} />
        </div>
        
        {/* Toggle icon */}
        <div className="w-10 h-10 flex items-center justify-center border-2 border-black dark:border-white group-hover/item:border-white dark:group-hover/item:border-black transition-colors duration-0 flex-shrink-0">
          <Icon 
              icon={isOpen ? "mdi:minus" : "mdi:plus"} 
              className="text-xl md:text-2xl" 
          />
        </div>

        {/* Corner marker */}
        <div className="absolute top-1 right-1 w-2 h-2 bg-black dark:bg-white group-hover/item:bg-white dark:group-hover/item:bg-black" />
      </button>

      {/* EXPANDED CONTENT */}
      <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.15, ease: "linear" }}
                className="overflow-hidden"
            >
                <div className="border-t-2 border-black dark:border-white bg-surface-alt dark:bg-surface-alt-dark">
                  <div className="p-4 md:p-6 flex flex-col gap-6">
                      {/* Description */}
                      <p className="font-terminal text-sm md:text-base leading-relaxed max-w-3xl uppercase">
                          {project.content}
                      </p>

                      {/* METRICS GRID */}
                      {project.results && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-black dark:bg-white border-2 border-black dark:border-white">
                               {project.results.map((res, i) => (
                                   <div key={i} className="flex items-start gap-4 text-sm font-bold bg-white dark:bg-black p-4 font-terminal uppercase h-full min-w-0">
                                       <div className="w-2.5 h-2.5 bg-status-ok flex-shrink-0 mt-1.5" />
                                       <span className="leading-tight truncate">{res}</span>
                                   </div>
                               ))}
                          </div>
                      )}

                      {/* TECH STACK + LINKS */}
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-4 border-t-2 border-black dark:border-white">
                          {/* Tech tags */}
                          <div className="flex flex-wrap gap-0">
                              {project.skill.map((tech, i) => (
                                  <span key={i} className="px-3 py-1.5 text-xs border-2 border-black dark:border-white font-terminal uppercase bg-white dark:bg-black -ml-[2px] first:ml-0 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-0">
                                      {tech}
                                  </span>
                              ))}
                          </div>

                          {/* Action links */}
                          <div className="flex gap-0">
                              {project.url && (
                                  <a 
                                    href={project.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black border-2 border-black dark:border-white font-terminal text-xs uppercase hover:bg-cta dark:hover:bg-cta hover:text-black transition-colors duration-0"
                                    aria-label={`View ${project.title} live site (opens in new tab)`}
                                  >
                                      LIVE_LINK <Icon icon="mdi:arrow-top-right" />
                                  </a>
                              )}
                              {project.github && (
                                  <a 
                                    href={project.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-black text-black dark:text-white border-2 border-black dark:border-white -ml-[2px] font-terminal text-xs uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-0"
                                    aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
                                  >
                                      SOURCE <Icon icon="mdi:github" />
                                  </a>
                              )}
                          </div>
                      </div>
                  </div>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
})

ProjectItem.displayName = "ProjectItem"

const Projects = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleProject = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="projects" className="mb-20">
      <div className="flex items-center justify-between border-b-4 border-black dark:border-white pb-2 mb-0">
        <h2 className="text-4xl font-black uppercase tracking-tighter">
            Case_Files
        </h2>
        <span className="font-terminal text-xs">ARCHIVE: {projects.length} ENTRIES</span>
      </div>

      <div className="border-4 border-black dark:border-white">
        {projects.map((project, index) => (
            <ProjectItem 
                key={project.id} 
                project={project} 
                index={index} 
                isOpen={openIndex === index}
                toggle={() => toggleProject(index)}
            />
        ))}
      </div>
    </section>
  )
}

export default Projects