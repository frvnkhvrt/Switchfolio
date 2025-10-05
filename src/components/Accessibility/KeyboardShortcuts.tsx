/**
 * Keyboard Shortcuts Component
 * Enables keyboard shortcuts for common actions
 */

"use client"

import { useEffect } from "react"
import { useSwitch } from "../Context/SwitchContext"
import { useScreenReaderAnnouncement } from "@/hooks/useAccessibility"
import { personaService } from "@/services/personaService"
import { ariaLabels } from "@/utils/accessibility"

const KeyboardShortcuts = () => {
  const { isSwitchOn, toggleSwitch } = useSwitch()
  const announce = useScreenReaderAnnouncement()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl/Cmd + Shift + P: Toggle persona
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'P') {
        e.preventDefault()
        toggleSwitch()
        
        const nextPersona = personaService.getCurrentPersona(!isSwitchOn)
        announce(
          ariaLabels.personaSwitched(nextPersona.name, nextPersona.bio),
          'assertive'
        )
      }

      // Ctrl/Cmd + /: Show keyboard shortcuts help (future feature)
      if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        e.preventDefault()
        // TODO: Show keyboard shortcuts modal
        console.log('Keyboard shortcuts help')
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isSwitchOn, toggleSwitch, announce])

  return null // This component doesn't render anything
}

export default KeyboardShortcuts