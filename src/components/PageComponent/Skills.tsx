/**
 * Enhanced Skills Component
 * Accessible skills display with keyboard navigation
 */

"use client"
import SectionTitle from "../SectionTitle"
import { skills } from "@/data/Common/data"
import { Icon } from "@iconify/react"
import { motion, useReducedMotion } from "framer-motion"
import { HOVER_ANIMATIONS } from "@/constants"
import { STAGGER_CONTAINER, STAGGER_ITEM } from "@/constants/animations"

const Skills = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="flex flex-col gap-3 sm:gap-4" id="skills" aria-labelledby="skills-heading" aria-describedby="skills-description">
      <SectionTitle title="Tech Stack" level={4} />
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 sm:gap-3"
        role="list"
        aria-label="Tech stack skills"
        variants={shouldReduceMotion ? {} : STAGGER_CONTAINER}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            role="listitem"
            variants={shouldReduceMotion ? {} : STAGGER_ITEM}
            whileHover={shouldReduceMotion ? {} : HOVER_ANIMATIONS.button}
            whileTap={shouldReduceMotion ? {} : HOVER_ANIMATIONS.tap}
          >
            <div
              className="skill-card-premium skills-card min-h-[44px] px-2 py-2 cursor-default focus-visible:outline-2 focus-visible:outline-primaryBlue dark:focus-visible:outline-folderCream focus-visible:outline-offset-2 flex flex-col items-center justify-center gap-2 text-center group"
              tabIndex={0}
              aria-label={skill.text}
            >
              <Icon
                icon={skill.icon}
                className="text-lg group-hover:scale-110 transition-transform duration-200"
                aria-hidden="true"
              />
              <span className="font-medium text-sm leading-tight">{skill.text}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Skills