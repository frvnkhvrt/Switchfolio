/**
 * Skills Component - "The Arsenal"
 * Neobrutalist Inventory Grid
 */

"use client"

import React, { memo } from "react"
import { skills } from "@/data/Common/data"
import { Icon } from "@iconify/react"
import { motion } from "framer-motion"
import Image from "next/image"

const SkillItem = memo(({ skill, index }: { skill: typeof skills[0], index: number }) => {
  const content = (
    <>
      {skill.icon.startsWith('/') ? (
        <Image 
          src={skill.icon} 
          alt="" 
          width={40}
          height={40}
          className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] object-contain grayscale brightness-0 group-hover:invert dark:invert dark:group-hover:invert-0 transition-all duration-0"
          aria-hidden="true"
        />
      ) : (
        <Icon
          icon={skill.icon}
          className="text-3xl lg:text-4xl grayscale group-hover:grayscale-0 transition-all duration-0"
          aria-hidden="true"
        />
      )}
      <span className="font-terminal text-xs uppercase tracking-wider">{skill.text}</span>
      
      {/* Corner marker */}
      <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-black dark:bg-white group-hover:bg-white dark:group-hover:bg-black" />
    </>
  )

  const className = "group relative bg-white dark:bg-black p-4 flex flex-col items-center justify-center gap-3 border-r-2 border-b-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-0 w-full h-full min-h-[120px]"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0 }}
      viewport={{ once: true }}
      className="h-full"
    >
      {skill.link ? (
        <a 
          href={skill.link}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          aria-label={`Visit ${skill.text} website`}
        >
          {content}
        </a>
      ) : (
        <div className={className}>
          {content}
        </div>
      )}
    </motion.div>
  )
})

SkillItem.displayName = "SkillItem"

const Skills = () => {
  return (
    <section className="flex flex-col gap-8 mb-20" id="skills">
      <div className="flex items-center justify-between border-b-4 border-black dark:border-white pb-2">
        <h2 className="text-4xl font-black uppercase tracking-tighter">
            System_Modules
        </h2>
        <span className="font-terminal text-xs">COUNT: {skills.length}</span>
      </div>

      <div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 border-t-2 border-l-2 border-black dark:border-white"
        role="list"
        aria-label="Tech stack skills"
      >
        {skills.map((skill, index) => (
          <SkillItem key={skill.id} skill={skill} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Skills