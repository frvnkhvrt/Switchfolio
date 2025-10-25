/**
 * Project Box Component
 * Accessible, animated project card with expand/collapse functionality
 * Displays project information including status, links, and technology stack
 */

"use client"
import React, { useState, useEffect, useCallback, memo } from "react"
import { BsGithub } from "react-icons/bs"
import { GoDotFill } from "react-icons/go"
import { FiExternalLink } from "react-icons/fi"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { LINK_ATTRIBUTES, HOVER_ANIMATIONS, ARIA_LABELS } from "@/constants"
import type { ProjectStatus } from "@/types"

interface ProjectBoxProps {
  status: ProjectStatus
  title: string
  content: string
  url: string
  github: string
  skill: string[]
}

/**
 * Status configuration with display info
 */
interface StatusInfo {
  label: string
  color: string
}

/**
 * Get status display information
 */
const getStatusInfo = (status: ProjectStatus): StatusInfo => {
  const statusMap: Record<ProjectStatus, StatusInfo> = {
    running: {
      label: 'Running',
      color: 'bg-green-500/10 text-green-400',
    },
    building: {
      label: 'Building',
      color: 'bg-red-500/10 text-red-400',
    },
  }
  return statusMap[status]
}

/**
 * ProjectBox Component Implementation
 */
const ProjectBox: React.FC<ProjectBoxProps> = memo(({
  status,
  title,
  content,
  url,
  github,
  skill,
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  // Handle clicks outside the project box to collapse it
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest(".project-box")) {
        setIsExpanded(false)
      }
    }

    document.addEventListener("click", handleOutsideClick)
    return () => document.removeEventListener("click", handleOutsideClick)
  }, [])

  // Toggle expansion state
  const handleToggle = useCallback(() => {
    setIsExpanded((prev) => !prev)
  }, [])

  // Handle keyboard interactions for accessibility
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleToggle()
    }
  }, [handleToggle])

  // Get status display info
  const statusInfo = getStatusInfo(status)
  const { label: statusLabel, color: statusColor } = statusInfo

  return (
    <motion.div
      className="project-box bg-folderWhite cursor-pointer hover:bg-folderTan focus:bg-folderTan focus-visible:outline-3 focus-visible:outline-primaryBlue dark:focus-visible:outline-folderCream focus-visible:outline-offset-2 transition-colors duration-200 border-2 border-primaryBlue rounded-none shadow-sm hover:shadow-lg dark:bg-darkerBlue dark:hover:bg-folderCream/20 dark:focus:bg-folderCream/20 dark:border-folderCream dark:shadow-dark-sm dark:hover:shadow-xl"
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-expanded={isExpanded}
      aria-label={ARIA_LABELS.projectStatus(title, statusLabel)}
      whileHover={shouldReduceMotion ? {} : HOVER_ANIMATIONS.card}
      whileTap={shouldReduceMotion ? {} : HOVER_ANIMATIONS.tap}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col gap-3 p-4">
        <div className="flex flex-col gap-1.5">
          <div className="flex flex-row items-center gap-2">
            <div className="flex gap-1.5 items-center truncate flex-1 min-w-0">
              <h3 className="text-xl sm:text-2xl font-semibold dark:text-backgroundCreamDark truncate">
                {title}
              </h3>
              <div className={`select-none font-medium text-xs w-fit px-2 py-1 gap-1 rounded-full flex items-center flex-shrink-0 ${statusColor}`}>
                <motion.span
                  animate={shouldReduceMotion ? {} : { scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <GoDotFill aria-hidden="true" />
                </motion.span>
                <span>{statusLabel}</span>
              </div>

              {/* Action Links - In same container */}
              {url && (
                <a
                  target={LINK_ATTRIBUTES.target}
                  rel={LINK_ATTRIBUTES.rel}
                  className="select-none p-2 text-lg hover:text-primaryBlue dark:hover:text-folderCream transition-colors duration-200 rounded-sm focus-visible:outline-2 focus-visible:outline-primaryBlue dark:focus-visible:outline-folderCream focus-visible:outline-offset-2 flex-shrink-0 flex items-center"
                  href={url}
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`View ${title} live site (opens in new tab)`}
                >
                  <FiExternalLink aria-hidden="true" />
                </a>
              )}
              {github && (
                <a
                  onClick={(e) => e.stopPropagation()}
                  target={LINK_ATTRIBUTES.target}
                  rel={LINK_ATTRIBUTES.rel}
                  className="select-none p-2 text-lg hover:text-primaryBlue dark:hover:text-folderCream transition-colors duration-200 rounded-sm focus-visible:outline-2 focus-visible:outline-primaryBlue dark:focus-visible:outline-folderCream focus-visible:outline-offset-2 flex-shrink-0 flex items-center"
                  href={github}
                  aria-label={`View ${title} on GitHub (opens in new tab)`}
                >
                  <BsGithub aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300">{content}</p>
        </div>
      </div>

      {/* Expandable Skills Section */}
      <AnimatePresence mode="wait">
        {isExpanded && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : {
              opacity: 0,
              height: 0,
            }}
            animate={shouldReduceMotion ? { opacity: 1 } : {
              opacity: 1,
              height: "auto",
            }}
            exit={shouldReduceMotion ? { opacity: 0 } : {
              opacity: 0,
              height: 0,
            }}
            transition={{
              ease: "easeInOut",
              duration: shouldReduceMotion ? 0.01 : 0.3
            }}
            className="overflow-hidden"
          >
            <div className="flex border-t-2 border-primaryBlue dark:border-backgroundCream w-[95%] mx-auto" />
            <div className="flex justify-start items-center py-2 px-3 transition-all duration-200">
              <div className="flex flex-wrap gap-1.5 select-none" role="list" aria-label="Technologies used">
                {skill.map((skillName, index) => (
                  <motion.span
                    key={index}
                    role="listitem"
                    className="border-2 border-primaryBlue px-1 py-1 rounded-none text-xs font-medium flex items-center justify-center text-gray-700 hover:border-primaryBlue hover:text-gray-700 dark:border-folderCream dark:text-folderCream dark:hover:border-folderCream dark:hover:text-folderCream"
                    initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.8 }}
                    animate={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {skillName}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
})

ProjectBox.displayName = 'ProjectBox'

export default ProjectBox