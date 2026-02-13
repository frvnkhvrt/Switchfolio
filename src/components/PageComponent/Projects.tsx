/**
 * Projects Section - "The Archive"
 * Neobrutalist Case Files
 */

"use client"

import React, { useState } from "react"
import { projects } from "@/data/Common/data"
import { Icon } from "@iconify/react"
import { motion, AnimatePresence } from "framer-motion"

const ProjectItem = ({ project, index, isOpen, toggle }: { project: typeof projects[0], index: number, isOpen: boolean, toggle: () => void }) => {
  return (
    <div className="border-b-2 border-black dark:border-white">
      {/* HEADER */}
      <button 
        onClick={toggle}
        className="w-full flex items-center justify-between p-4 md:p-6 group hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-0"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4 md:gap-8">
            <span className="font-terminal text-sm md:text-base opacity-50">
                {(index + 1).toString().padStart(2, '0')}
            </span>
            <h3 className="text-xl md:text-3xl font-bold uppercase tracking-tight">
                {project.title}
            </h3>
        </div>
        
        <Icon 
            icon={isOpen ? "mdi:minus" : "mdi:plus"} 
            className="text-2xl md:text-3xl transition-transform duration-200 group-hover:rotate-90" 
        />
      </button>

      {/* CONTENT */}
      <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: "linear" }}
                className="overflow-hidden bg-gray-50 dark:bg-gray-900 border-l-2 border-r-2 border-black dark:border-white mx-4 mb-4"
            >
                <div className="p-4 md:p-6 flex flex-col gap-6">
                    <p className="font-terminal text-sm md:text-base leading-relaxed max-w-3xl">
                        {project.content}
                    </p>

                    {/* METRICS */}
                    {project.results && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                             {project.results.map((res, i) => (
                                 <div key={i} className="flex items-center gap-2 text-sm font-bold bg-white dark:bg-black border border-black dark:border-white p-2">
                                     <div className="w-2 h-2 bg-green-500" />
                                     {res}
                                 </div>
                             ))}
                        </div>
                    )}

                    {/* LINKS & TECH */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-4 border-t border-black dark:border-white">
                        <div className="flex flex-wrap gap-2">
                            {project.skill.map((tech, i) => (
                                <span key={i} className="px-2 py-1 text-xs border border-black dark:border-white font-terminal uppercase">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4">
                            {project.url && (
                                <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline decoration-2 underline-offset-4 font-bold">
                                    LIVE_LINK <Icon icon="mdi:arrow-top-right" />
                                </a>
                            )}
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline decoration-2 underline-offset-4 font-bold">
                                    SOURCE_CODE <Icon icon="mdi:github" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

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
        <span className="font-terminal text-xs">ARCHIVE_STATUS: UNLOCKED</span>
      </div>

      <div className="border-t-4 border-black dark:border-white">
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