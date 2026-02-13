"use client"
import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { SocialLink } from "@/types"
import { Icon } from "@iconify/react"
import { LINK_ATTRIBUTES, HOVER_ANIMATIONS } from "@/constants"

interface SocialLinksProps {
  links: SocialLink[]
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  const shouldReduceMotion = useReducedMotion()
  
  return (
    <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start">
      {links.map((link) => (
        <motion.a
          key={link.id}
          className="flex items-center justify-center w-12 h-12 border-2 border-black dark:border-white bg-white dark:bg-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-0"
          href={link.link}
          target={LINK_ATTRIBUTES.target}
          rel={LINK_ATTRIBUTES.rel}
          aria-label={`${link.name} (opens in new tab)`}
          whileHover={shouldReduceMotion ? {} : HOVER_ANIMATIONS.icon}
          whileTap={shouldReduceMotion ? {} : HOVER_ANIMATIONS.tap}
        >
          <Icon icon={link.icon} className="text-2xl" aria-hidden="true"/>
        </motion.a>
      ))}
    </div>
  )
}