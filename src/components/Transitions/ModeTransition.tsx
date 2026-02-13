"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useSwitch } from "../Context/SwitchContext"

const ModeTransition = () => {
    const { isTransitioning } = useSwitch()

    // Determine target colors based on where we are *going*
    // If switch is ON (Dark), we are going to Light (because toggle happened)
    // Wait, the toggle happens *middle* of transition.
    // 0-500ms: Old Theme. 500ms: Toggle. 500-1000ms: New Theme.
    // So the curtain should probably be a neutral color or the *inverse* of current theme?
    
    // Let's go with a "System Reboot" black overlay for both transitions for now, 
    // or maybe simple white/black wipe.
    
    return (
        <AnimatePresence>
            {isTransitioning && (
                <motion.div
                    initial={{ y: "-100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "100%" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] bg-brand flex items-center justify-center"
                >
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-12 h-12 border-4 border-white animate-spin" />
                        <span className="font-terminal text-white text-xl font-bold tracking-widest uppercase">
                            SYSTEM_SWITCH // EXECUTING
                        </span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ModeTransition
