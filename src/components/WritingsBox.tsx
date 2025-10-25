"use client"
import React from "react"
import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { LINK_ATTRIBUTES, HOVER_ANIMATIONS } from "@/constants"

interface WritingsBoxProps {
  head: string
  description: string
  link: string
  img?: string
}

const WritingsBox: React.FC<WritingsBoxProps> = ({ head, description, link, img }) => {
  const shouldReduceMotion = useReducedMotion()
  
  return (
    <motion.a
      href={link}
      target={LINK_ATTRIBUTES.target}
      rel={LINK_ATTRIBUTES.rel}
      className=" blog-post flex items-center gap-4 focus:outline-none focus:ring-2 focus:ring-primaryBlue/50 dark:focus:ring-folderCream/50 rounded-sm p-3"
      whileHover={shouldReduceMotion ? {} : HOVER_ANIMATIONS.card}
      whileTap={shouldReduceMotion ? {} : HOVER_ANIMATIONS.tap}
    >
      <div className="flex-1">
        <h1 className=" md:text-lg text-xl font-semibold dark:text-backgroundCreamDark">{head}</h1>
        <p className="text-sm opacity-80 dark:text-backgroundCreamDark/80">{description}</p>
      </div>
      {img && (
        <div className="flex-shrink-0">
          <Image
            src={img}
            alt={`${head} thumbnail`}
            width={80}
            height={60}
            className="w-20 h-15 object-cover rounded-sm"
          />
        </div>
      )}
    </motion.a>
  )
}

export default WritingsBox
