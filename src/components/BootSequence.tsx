/**
 * Boot Sequence Component
 * Neobrutalist System Initialization
 */

"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"

const BOOT_LOGS = [
  "INITIALIZING_CORE_SYSTEM...",
  "LOADING_ASSETS: [████████--] 80%",
  "ESTABLISHING_SECURE_CONNECTION...",
  "ACCESS_GRANTED: USER_ID_GUEST",
  "WELCOME_TO_THE_GRID."
]

const BootSequence = ({ onComplete }: { onComplete: () => void }) => {
  const [logs, setLogs] = useState<string[]>([])
  
  useEffect(() => {
    let delay = 0
    BOOT_LOGS.forEach((log, index) => {
      delay += Math.random() * 500 + 200
      setTimeout(() => {
        setLogs(prev => [...prev, log])
        if (index === BOOT_LOGS.length - 1) {
          setTimeout(onComplete, 800)
        }
      }, delay)
    })
  }, [onComplete])

  return (
    <motion.div
        className="fixed inset-0 z-[10000] bg-black text-white font-terminal p-8 md:p-12 flex flex-col justify-end items-start"
        initial={{ opacity: 1 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.5, ease: "circIn" }}
    >
        <div className="flex flex-col gap-2 uppercase tracking-widest text-sm md:text-xl">
            {logs.map((log, i) => (
                <div key={i} className="flex items-center gap-4">
                    <span className="text-green-500">➜</span>
                    <span>{log}</span>
                </div>
            ))}
            <motion.div 
                animate={{ opacity: [0, 1] }}
                transition={{ repeat: Infinity, duration: 0.5 }}
                className="w-3 h-6 bg-white inline-block ml-2"
            />
        </div>
    </motion.div>
  )
}

export default BootSequence
