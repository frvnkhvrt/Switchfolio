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
    const timeoutIds: NodeJS.Timeout[] = []
    let delay = 0
    
    BOOT_LOGS.forEach((log, index) => {
      // Shorter random delay for snappier feel
      const duration = Math.random() * 300 + 100
      delay += duration
      
      const id = setTimeout(() => {
        setLogs(prev => [...prev, log])
        
        // On last item, trigger complete
        if (index === BOOT_LOGS.length - 1) {
          const completeId = setTimeout(onComplete, 1200)
          timeoutIds.push(completeId)
        }
      }, delay)
      
      timeoutIds.push(id)
    })

    return () => {
      timeoutIds.forEach(clearTimeout)
    }
  }, [onComplete])

  return (
    <motion.div
        className="fixed inset-0 z-[10000] bg-black text-white font-terminal p-8 md:p-12 flex flex-col justify-end items-start"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
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
