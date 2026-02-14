/**
 * Boot Sequence Component
 * Neobrutalist System Initialization
 */

"use client"

import React, { useState, useEffect, useRef } from "react"
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
  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete

  useEffect(() => {
    const timeoutIds: NodeJS.Timeout[] = []
    let delay = 0

    BOOT_LOGS.forEach((log, index) => {
      const duration = Math.random() * 300 + 100
      delay += duration

      const id = setTimeout(() => {
        setLogs(prev => [...prev, log])

        if (index === BOOT_LOGS.length - 1) {
          const completeId = setTimeout(() => {
            onCompleteRef.current()
          }, 1200)
          timeoutIds.push(completeId)
        }
      }, delay)

      timeoutIds.push(id)
    })

    return () => {
      timeoutIds.forEach(clearTimeout)
    }
  }, [])

  return (
    <motion.div
        className="fixed inset-0 z-bootSequence bg-black text-white font-terminal p-8 md:p-12 flex flex-col justify-end items-start overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
    >
        {/* Cinematic Layers */}
        <div className="scanline" />
        <div className="noise" />
        <div className="crt-vignette" />

        <div className="flex flex-col gap-3 uppercase tracking-[0.2em] text-xs md:text-lg relative z-10">
            {logs.map((log, i) => (
                <motion.div 
                  key={i} 
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.1 }}
                >
                    <span className="text-status-ok opacity-80">➜</span>
                    <span className={i === logs.length - 1 ? "animate-glitch" : ""}>{log}</span>
                </motion.div>
            ))}
            <motion.div 
                animate={{ opacity: [0, 1] }}
                transition={{ repeat: Infinity, duration: 0.4 }}
                className="w-3 h-5 bg-white/80 inline-block ml-2 shadow-[0_0_8px_rgba(255,255,255,0.5)]"
            />
        </div>

        {/* System ID Tag */}
        <div className="absolute top-8 right-8 text-[10px] opacity-20 font-mono tracking-widest text-right hidden md:block">
          SYS_OS: v.2026.1<br/>
          AUTH_LEVEL: GUEST<br/>
          LOC: LATAM_NODE_4
        </div>
    </motion.div>
  )
}

export default BootSequence
