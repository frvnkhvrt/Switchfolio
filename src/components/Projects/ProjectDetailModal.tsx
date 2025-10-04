/**
 * Project Detail Modal
 * Shows comprehensive project case studies
 */

"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Icon } from "@iconify/react"
import { AccessibleModal } from "@/components/Accessibility/AccessibleModal"
import { designSystem } from "@/constants/designSystem"

interface CaseStudy {
  problem: string
  solution: string
  challenges: string
  results: string
  learnings: string
}

interface Project {
  id: number
  img: string
  title: string
  status: boolean
  content: string
  url: string
  github: string
  skill: string[]
  caseStudy?: CaseStudy
}

interface ProjectDetailModalProps {
  isOpen: boolean
  onClose: () => void
  project: Project | null
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  isOpen,
  onClose,
  project
}) => {
  if (!project) return null

  const CaseStudySection = ({ caseStudy }: { caseStudy: CaseStudy }) => (
    <div className="space-y-6">
      <div className="grid gap-6">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2 flex items-center gap-2">
            <Icon icon="simple-icons:alert-circle" className="text-red-600" />
            Problem
          </h4>
          <p className="text-red-700 dark:text-red-300">{caseStudy.problem}</p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2 flex items-center gap-2">
            <Icon icon="simple-icons:check-circle" className="text-blue-600" />
            Solution
          </h4>
          <p className="text-blue-700 dark:text-blue-300">{caseStudy.solution}</p>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
          <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2 flex items-center gap-2">
            <Icon icon="simple-icons:alert-triangle" className="text-yellow-600" />
            Challenges
          </h4>
          <p className="text-yellow-700 dark:text-yellow-300">{caseStudy.challenges}</p>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2 flex items-center gap-2">
            <Icon icon="simple-icons:trending-up" className="text-green-600" />
            Results
          </h4>
          <p className="text-green-700 dark:text-green-300">{caseStudy.results}</p>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
          <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2 flex items-center gap-2">
            <Icon icon="simple-icons:book-open" className="text-purple-600" />
            Learnings
          </h4>
          <p className="text-purple-700 dark:text-purple-300">{caseStudy.learnings}</p>
        </div>
      </div>
    </div>
  )

  const modalContent = (
    <div className="space-y-6">
      {/* Project Header */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <h2 className="text-2xl font-bold text-inkBlack dark:text-backgroundCreamDark">
            {project.title}
          </h2>
          <div className={`px-3 py-1 rounded-full text-sm font-medium ${
            project.status
              ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-200'
              : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-200'
          }`}>
            {project.status ? 'Running' : 'Building'}
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-lg">
          {project.content}
        </p>
      </div>

      {/* Technologies */}
      <div>
        <h3 className="text-lg font-semibold text-inkBlack dark:text-backgroundCreamDark mb-3">
          Technologies Used
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.skill.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primaryBlue/10 text-primaryBlue dark:bg-folderCream/10 dark:text-folderCream rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      {(project.url || project.github) && (
        <div>
          <h3 className="text-lg font-semibold text-inkBlack dark:text-backgroundCreamDark mb-3">
            Links
          </h3>
          <div className="flex gap-4">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-primaryBlue text-white rounded-lg hover:bg-primaryBlue/90 transition-colors"
              >
                <Icon icon="simple-icons:external-link" />
                View Project
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-primaryBlue text-primaryBlue dark:border-folderCream dark:text-folderCream rounded-lg hover:bg-primaryBlue hover:text-white dark:hover:bg-folderCream dark:hover:text-inkBlack transition-colors"
              >
                <Icon icon="simple-icons:github" />
                View Code
              </a>
            )}
          </div>
        </div>
      )}

      {/* Case Study */}
      {project.caseStudy && (
        <div>
          <h3 className="text-xl font-bold text-inkBlack dark:text-backgroundCreamDark mb-4">
            Case Study
          </h3>
          <CaseStudySection caseStudy={project.caseStudy} />
        </div>
      )}
    </div>
  )

  return (
    <AccessibleModal
      isOpen={isOpen}
      onClose={onClose}
      title={`${project.title} - Project Details`}
      description={`Detailed information about the ${project.title} project including technologies used and ${project.caseStudy ? 'comprehensive case study' : 'project overview'}.`}
      size="xl"
    >
      {modalContent}
    </AccessibleModal>
  )
}

export default ProjectDetailModal