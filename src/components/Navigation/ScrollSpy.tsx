/**
 * Scroll Spy Component
 * Highlights current section in navigation
 */

"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface ScrollSpyProps {
  sections: string[]
  offset?: number
}

export const ScrollSpy: React.FC<ScrollSpyProps> = ({
  sections,
  offset = 100
}) => {
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections, offset])

  return (
    <motion.div
      className="fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-3"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      {sections.map((section) => (
        <motion.button
          key={section}
          onClick={() => {
            const element = document.getElementById(section)
            if (element) {
              element.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          }}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            activeSection === section
              ? "bg-primaryBlue scale-125"
              : "bg-gray-400 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-400"
          }`}
          aria-label={`Scroll to ${section} section`}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        />
      ))}
    </motion.div>
  )
}

export default ScrollSpy