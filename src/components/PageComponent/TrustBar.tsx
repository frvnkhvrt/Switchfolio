"use client"
import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Icon } from "@iconify/react"

const TRUST_METRICS = [
  { id: 1, label: "Years Experience", value: "10+", icon: "mdi:calendar-check" },
  { id: 2, label: "Projects Delivered", value: "20+", icon: "mdi:rocket-launch" },
  { id: 3, label: "Enterprise Users", value: "100k+", icon: "mdi:account-group" },
  { id: 4, label: "Growth Generated", value: "30%", icon: "mdi:chart-line-variant" },
]

const TrustBar = () => {
    const shouldReduceMotion = useReducedMotion()

    return (
        <section 
            aria-label="Professional Achievements"
            className="w-full py-6 md:py-8 border-y border-gray-200 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-900/50 backdrop-blur-sm"
        >
            <div className="flex flex-wrap items-center justify-around gap-6 md:gap-8 px-4 max-w-5xl mx-auto">
                {TRUST_METRICS.map((metric, index) => (
                    <motion.div
                        key={metric.id}
                        className="flex flex-col items-center gap-1 min-w-[120px]"
                        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                        whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        <div className="flex items-center gap-2 text-primaryBlue dark:text-folderCream">
                            <Icon icon={metric.icon} className="text-xl md:text-2xl opacity-80" />
                            <span className="text-2xl md:text-3xl font-bold tracking-tight">
                                {metric.value}
                            </span>
                        </div>
                        <span className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            {metric.label}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default TrustBar
