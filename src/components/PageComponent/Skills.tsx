/**
 * Enhanced Skills Component
 * Accessible skills display with keyboard navigation
 */

"use client"
import SectionTitle from "../SectionTitle"
import { skills } from "@/data/Common/data"
import { Icon } from "@iconify/react"
import { motion, useReducedMotion } from "framer-motion"

const Skills = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="flex flex-col gap-3" id="skills">
      <SectionTitle title="Tech Stack" level={4} />
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
        role="list"
        aria-label="Tech stack skills"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.id}
            role="listitem"
            initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.8, y: 20 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, scale: 1, y: 0 }}
            transition={{
              delay: shouldReduceMotion ? 0 : index * 0.05,
              duration: shouldReduceMotion ? 0 : 0.4,
              ease: "easeOut"
            }}
            whileHover={shouldReduceMotion ? {} : {
              scale: 1.05,
              y: -2,
              transition: { duration: 0.2 }
            }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          >
            <div
              className="skills-card min-h-[44px] px-2 py-2 cursor-default focus-visible:outline-2 focus-visible:outline-primaryBlue dark:focus-visible:outline-folderCream focus-visible:outline-offset-2 flex flex-col items-center justify-center gap-2 text-center group"
              tabIndex={0}
              aria-label={skill.text}
            >
              <Icon
                icon={skill.icon}
                className="text-lg"
                aria-hidden="true"
              />
              <span className="font-medium text-sm leading-tight">{skill.text}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills