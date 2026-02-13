/**
 * Navigation Component - "The Command Deck"
 * Neobrutalist Control Panel
 */

"use client"

import React, { memo } from "react"
import { useScroll, useMotionValueEvent } from "framer-motion"
import { Icon } from "@iconify/react"
import { useSwitch } from "../Context/SwitchContext"
import { navLinks } from "@/data/Common/data"
import { getCurrentPersona } from "@/services/personaService"
import PersonaSwitcher from "./PersonaSwitcher"
import Marquee from "../ui/Marquee"

const NavLink = ({ nav }: { nav: typeof navLinks[0] }) => {
  return (
    <a
      href={nav.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative h-full flex items-center justify-center px-6 border-l-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-0"
      aria-label={`${nav.name} (opens in new tab)`}
    >
      <Icon icon={nav.icon} className="text-2xl lg:text-3xl" aria-hidden="true" />
      <span className="sr-only">{nav.name}</span>
      
      {/* Hover Status Indicator */}
      <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100">
        <div className="size-2 bg-white dark:bg-black animate-pulse" />
      </div>
    </a>
  )
}

const MarqueeBar = () => {
  return (
    <div className="w-full h-8 bg-black dark:bg-accent text-white dark:text-black border-t-2 border-b-4 border-black dark:border-black overflow-hidden flex items-center font-terminal text-xs">
      <Marquee speed={60} className="w-full">
          <div className="flex items-center shrink-0 font-bold">
            <div className="flex items-center gap-2 mx-4">
                <div className="w-2 h-2 bg-status-ok animate-pulse" />
                <span>SYSTEM STATUS: ONLINE</span>
            </div>
            <span className="mx-4 opacity-50 shrink-0">{"///"}</span>
            <span className="mx-4">AVAILABLE FOR WORK</span>
            <span className="mx-4 opacity-50 shrink-0">{"///"}</span>
            <span className="mx-4">INITIALIZING PROTOCOLS</span>
            <span className="mx-4 opacity-50 shrink-0">{"///"}</span>
          </div>
      </Marquee>
    </div>
  )
}

const Nav: React.FC = memo(() => {
  const { isSwitchOn, toggleSwitch } = useSwitch()
  const nextPersona = getCurrentPersona(!isSwitchOn)
  const [isHidden, setIsHidden] = React.useState(false)
  const { scrollY } = useScroll()

  // Auto-hide logic for mobile, strictly mechanical
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    if (latest > previous && latest > 150) {
      setIsHidden(true)
    } else {
      setIsHidden(false)
    }
  })

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col pointer-events-none">
      {/* Top Bar - Pointer events allowed for interaction */}
      <nav 
        className={`pointer-events-auto bg-white dark:bg-black border-b-2 border-black dark:border-white transition-transform duration-200 ease-linear ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}
        aria-label="Main navigation"
      >
        <div className="flex h-16 md:h-20 max-w-[100vw]">
          {/* Brand / Status Area */}
          <div className="flex-1 flex items-center px-4 md:px-8 font-terminal text-sm md:text-base border-r-2 border-black dark:border-white truncate">
            <span className="font-bold mr-2 text-nowrap dark:hidden">FRANCISCO_SYS</span>
            <span className="font-bold mr-2 text-nowrap hidden dark:inline">FRANKHURT_SYS</span>
            <span className="hidden sm:inline opacity-60">{"///"} V.2026.1</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex">
             {navLinks.map((nav) => (
               <NavLink key={nav.id} nav={nav} />
             ))}
          </div>

          {/* Switcher Cell */}
          <div className="w-[80px] md:w-[100px] border-l-2 border-black dark:border-white flex items-center justify-center bg-surface-alt dark:bg-surface-alt-dark">
             <PersonaSwitcher 
               isSwitchOn={isSwitchOn} 
               onToggle={toggleSwitch}
               shouldReduceMotion={true} // Force no spring logic
               nextPersona={nextPersona}
             />
          </div>
        </div>
        
        {/* Marquee Bar */}
        <MarqueeBar />
      </nav>

      {/* Mobile Bottom Bar (If needed, or just rely on top bar. Let's start with Top Bar for all) */}
      <div className="md:hidden pointer-events-auto fixed bottom-0 left-0 right-0 bg-white dark:bg-black border-t-4 border-black dark:border-white grid grid-cols-4 h-16">
          {navLinks.map((nav) => (
             <a
              key={nav.id}
              href={nav.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center border-r-2 last:border-r-0 border-black dark:border-white active:bg-black active:text-white dark:active:bg-white dark:active:text-black"
             >
               <Icon icon={nav.icon} className="text-2xl" />
             </a>
          ))}
      </div>
    </header>
  )
})

Nav.displayName = "Nav"

export default Nav