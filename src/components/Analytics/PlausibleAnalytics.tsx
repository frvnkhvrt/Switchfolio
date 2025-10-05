/**
 * Plausible Analytics Component
 * Privacy-focused, GDPR-compliant analytics
 */

"use client"

import { useEffect, useContext } from 'react'
import { SwitchContext } from '@/components/Context/SwitchContext'

// Extend Window interface for Plausible
declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, unknown> }) => void
  }
}

interface PlausibleAnalyticsProps {
  domain?: string
  enabled?: boolean
}

const PlausibleAnalytics: React.FC<PlausibleAnalyticsProps> = ({
  domain = 'frankhurt.dev',
  enabled = process.env.NODE_ENV === 'production'
}) => {
  // Safely get switch state, fallback to false if context not available
  const switchContext = useContext(SwitchContext)
  const isSwitchOn = switchContext?.isSwitchOn ?? false

  useEffect(() => {
    if (!enabled) return

    // Load Plausible script
    const script = document.createElement('script')
    script.src = 'https://plausible.io/js/script.js'
    script.defer = true
    script.setAttribute('data-domain', domain)

    // Add manual pageview tracking for SPA navigation
    const trackPageview = () => {
      if (typeof window !== 'undefined' && window.plausible) {
        window.plausible('pageview', {
          props: {
            persona: isSwitchOn ? 'frankhurt' : 'francisco',
            theme: isSwitchOn ? 'dark' : 'light',
            path: window.location.pathname,
            referrer: document.referrer
          }
        })
      }
    }

    // Track initial pageview
    if (document.readyState === 'complete') {
      trackPageview()
    } else {
      window.addEventListener('load', trackPageview)
    }

    // Track persona switches
    const handlePersonaSwitch = () => {
      if (typeof window !== 'undefined' && window.plausible) {
        window.plausible('persona_switch', {
          props: {
            from: isSwitchOn ? 'francisco' : 'frankhurt',
            to: isSwitchOn ? 'frankhurt' : 'francisco',
            theme: isSwitchOn ? 'dark' : 'light',
            timestamp: new Date().toISOString()
          }
        })
      }
    }

    // Listen for persona changes
    window.addEventListener('personaSwitched', handlePersonaSwitch)

    document.head.appendChild(script)

    return () => {
      window.removeEventListener('personaSwitched', handlePersonaSwitch)
      const existingScript = document.querySelector('script[data-domain="' + domain + '"]')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [enabled, domain, isSwitchOn])

  // Dispatch custom event when persona changes
  useEffect(() => {
    window.dispatchEvent(new CustomEvent('personaSwitched'))
  }, [isSwitchOn])

  return null
}

export default PlausibleAnalytics