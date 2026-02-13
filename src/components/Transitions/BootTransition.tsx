"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface BootTransitionProps {
    isCompleting: boolean
    onTransitionComplete: () => void
}

const BootTransition: React.FC<BootTransitionProps> = ({ isCompleting, onTransitionComplete }) => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        if (isCompleting) {
            setShow(true)
            // Duration of the entrance + stay
            const timer = setTimeout(() => {
                setShow(false)
            }, 800)
            return () => clearTimeout(timer)
        }
    }, [isCompleting])

    return (
        <AnimatePresence onExitComplete={onTransitionComplete}>
            {show && (
                <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 z-[10001] bg-brand flex items-center justify-center border-t-4 border-black dark:border-white"
                >
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-16 h-1 bg-white animate-pulse" />
                        <span className="font-terminal text-white text-2xl font-bold tracking-[0.2em] uppercase">
                            SYSTEM_LOADED
                        </span>
                        <div className="w-16 h-1 bg-white animate-pulse" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default BootTransition
