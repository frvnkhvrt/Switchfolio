"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import LoadingSquare from "../ui/LoadingSquare"

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
                <div className="fixed inset-0 z-fullScreenOverlay pointer-events-none">
                    {/* Top Half */}
                    <motion.div
                        initial={{ y: "0%" }}
                        animate={{ y: "0%" }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute top-0 left-0 w-full h-1/2 bg-black border-b border-white/5"
                    />

                    {/* Bottom Half */}
                    <motion.div
                        initial={{ y: "0%" }}
                        animate={{ y: "0%" }}
                        exit={{ y: "100%" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute bottom-0 left-0 w-full h-1/2 bg-black border-t border-white/5"
                    />

                    {/* Content Overlay */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 flex items-center justify-center z-10"
                    >
                        <div className="flex flex-col items-center gap-6">
                            <div className="flex items-center gap-4">
                                <LoadingSquare size="sm" color="#22c55e" />
                                <span className="font-terminal text-white text-xl md:text-3xl font-bold tracking-[0.4em] uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                                    SYSTEM_READY
                                </span>
                            </div>
                            <div className="h-[1px] w-48 bg-white/10 overflow-hidden relative">
                                <motion.div 
                                    className="h-full bg-white/40 w-full"
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "100%" }}
                                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Global FX */}
                    <div className="scanline" />
                    <div className="noise" />
                    <div className="crt-vignette opacity-50" />
                </div>
            )}
        </AnimatePresence>
    )
}

export default BootTransition
