"use client"
import React, { memo } from "react"
import SectionTitle from "../SectionTitle"
import { skills } from "@/data/Common/data"
import { Icon } from "@iconify/react"
import { motion, useReducedMotion } from "framer-motion"
import { STAGGER_CONTAINER, STAGGER_ITEM } from "@/constants/animations"

const SkillItem = memo(({ skill }: { skill: typeof skills[0] }) => (
  <motion.div
    role="listitem"
    variants={STAGGER_ITEM}
    className="will-change-transform"
  >
    <div
      className="skill-card-premium skills-card min-h-[44px] px-2 py-2 cursor-default focus-visible:outline-2 focus-visible:outline-primaryBlue dark:focus-visible:outline-folderCream focus-visible:outline-offset-2 flex flex-col items-center justify-center gap-2 text-center group transform-gpu"
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
))

SkillItem.displayName = "SkillItem"

const Skills = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="flex flex-col gap-3 sm:gap-4" id="skills" aria-labelledby="skills-heading" aria-describedby="skills-description">
      <SectionTitle title="Tech Stack" level={2} />
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
          <SkillItem key={skill.id} skill={skill} />
        ))}
      </motion.div>
    </section>
  )
}

export default Skills