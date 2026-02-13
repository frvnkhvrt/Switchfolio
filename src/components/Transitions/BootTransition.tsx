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
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 z-[10001] bg-black flex items-center justify-center border-t-4 border-black"
                >
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-status-ok animate-pulse" />
                            <span className="font-terminal text-white text-xl md:text-3xl font-bold tracking-[0.3em] uppercase">
                                SYSTEM_READY
                            </span>
                        </div>
                        <div className="h-[2px] w-32 bg-white/10 overflow-hidden">
                            <motion.div 
                                className="h-full bg-white/40 w-full"
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default BootTransition
