"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useSwitch } from "../Context/SwitchContext"
import LoadingSquare from "../ui/LoadingSquare"

const ModeTransition = () => {
    const { isTransitioning } = useSwitch()

    return (
        <AnimatePresence>
            {isTransitioning && (
                <motion.div
                    initial={{ y: "-100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "100%" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed inset-0 z-fullScreenOverlay bg-brand flex items-center justify-center p-6"
                >
                    <div className="flex flex-col items-center gap-6 text-center">
                        <LoadingSquare size="lg" color="white" />
                        <span className="font-terminal text-white text-xl md:text-2xl font-bold tracking-[0.3em] uppercase">
                            SYSTEM_SWITCH // EXECUTING
                        </span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ModeTransition
