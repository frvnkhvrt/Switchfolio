"use client"
import SectionTitle from "../SectionTitle"
import { emailLink } from "@/data/Common/data"
import { Icon } from "@iconify/react"
import { motion, useReducedMotion } from "framer-motion"
import { SCROLL_VARIANTS, GLOW_PULSE } from "@/constants/animations"

const HireMe = () => {
  const shouldReduceMotion = useReducedMotion()
  
  return (
    <motion.section 
      className="flex flex-col gap-6 sm:gap-8 py-8 md:py-12 border-t border-gray-100 dark:border-gray-800" 
      aria-labelledby="hire-me-heading"
      variants={SCROLL_VARIANTS.fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto">
        <SectionTitle title="Ready to Scale Your Product?" level={2} className="mb-2" />
        <p id="hire-me-heading" className="text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          Whether you need a technical audit, a growth strategy, or full-stack development, I can help you move faster.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
          <motion.a 
            className="flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-primaryBlue text-white rounded-md font-bold text-sm sm:text-base md:text-lg shadow-lg hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 dark:bg-folderCream dark:text-gray-900 dark:hover:bg-white"
            target="_blank"
            rel="noopener noreferrer"
            href={emailLink}
            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            animate={shouldReduceMotion ? {} : GLOW_PULSE}
            aria-label="Book a call or send email"
          >
            <Icon icon="mdi:calendar-check" className="text-lg md:text-xl" aria-hidden="true" />
            <span className="whitespace-nowrap">Book a Discovery Call</span>
          </motion.a>
          
          <motion.a 
            className="flex items-center justify-center gap-2 px-4 py-3 md:px-6 md:py-4 bg-transparent border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-md font-semibold text-sm sm:text-base md:text-lg hover:border-primaryBlue hover:text-primaryBlue dark:hover:border-folderCream dark:hover:text-folderCream transition-all duration-300"
            href={emailLink}
            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          >
            <Icon icon="mdi:email-outline" className="text-lg md:text-xl" aria-hidden="true" />
            <span className="whitespace-nowrap">Send Email</span>
          </motion.a>
        </div>
        
        <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            Average response time: &lt; 24 hours
        </p>
      </div>
    </motion.section>
  )
}

export default HireMe
