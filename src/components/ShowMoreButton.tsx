/**
 * Show More Button Component
 * A reusable button for toggling the display of additional content.
 */

"use client"
import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { MdKeyboardDoubleArrowDown, MdKeyboardDoubleArrowUp } from "react-icons/md"
import { HOVER_ANIMATIONS } from "@/constants"

interface ShowMoreButtonProps {
  showAll: boolean
  toggleShowAll: () => void
}

const ShowMoreButton: React.FC<ShowMoreButtonProps> = ({ showAll, toggleShowAll }) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.button
      className="showMore-btn flex items-center justify-center gap-2 min-h-[36px] mt-3 focus-visible:outline-2 focus-visible:outline-primaryBlue dark:focus-visible:outline-folderCream focus-visible:outline-offset-2"
      onClick={toggleShowAll}
      aria-expanded={showAll}
      aria-label={showAll ? "Show less" : "Show all"}
      whileHover={shouldReduceMotion ? {} : HOVER_ANIMATIONS.button}
      whileTap={shouldReduceMotion ? {} : HOVER_ANIMATIONS.tap}
    >
      <motion.div
        animate={shouldReduceMotion ? {} : { y: showAll ? [-2, 2, -2] : [2, -2, 2] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        {showAll ? <MdKeyboardDoubleArrowUp aria-hidden="true" /> : <MdKeyboardDoubleArrowDown aria-hidden="true" />}
      </motion.div>
      <span>{showAll ? 'Show less' : 'Show all'}</span>
    </motion.button>
  )
}

export default ShowMoreButton