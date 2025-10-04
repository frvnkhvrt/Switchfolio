/**
 * Privacy-Focused Analytics Hook
 * Uses Plausible Analytics for GDPR-compliant tracking
 */

import { useEffect, useCallback } from 'react'
import { useSwitch } from '@/components/Context/SwitchContext'


export const useAnalytics = () => {
  const { isSwitchOn } = useSwitch()

  // Track page views
  useEffect(() => {
    if (typeof window !== 'undefined' && window.plausible) {
      window.plausible('pageview', {
        props: {
          persona: isSwitchOn ? 'frankhurt' : 'francisco',
          theme: isSwitchOn ? 'dark' : 'light'
        }
      })
    }
  }, [isSwitchOn])

  // Track custom events
  const trackEvent = useCallback((eventName: string, props?: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && window.plausible) {
      window.plausible(eventName, {
        props: {
          persona: isSwitchOn ? 'frankhurt' : 'francisco',
          theme: isSwitchOn ? 'dark' : 'light',
          ...props
        }
      })
    }
  }, [isSwitchOn])

  // Track persona switches
  const trackPersonaSwitch = useCallback((fromPersona: string, toPersona: string) => {
    trackEvent('persona_switch', {
      from: fromPersona,
      to: toPersona,
      timestamp: new Date().toISOString()
    })
  }, [trackEvent])

  // Track project views
  const trackProjectView = useCallback((projectTitle: string, hasCaseStudy: boolean) => {
    trackEvent('project_view', {
      project: projectTitle,
      has_case_study: hasCaseStudy
    })
  }, [trackEvent])

  // Track social link clicks
  const trackSocialClick = useCallback((platform: string, persona: string) => {
    trackEvent('social_click', {
      platform,
      persona
    })
  }, [trackEvent])

  // Track contact interactions
  const trackContactInteraction = useCallback((method: string, success?: boolean) => {
    trackEvent('contact_interaction', {
      method,
      success
    })
  }, [trackEvent])

  // Track PWA interactions
  const trackPWAInteraction = useCallback((action: string, details?: Record<string, unknown>) => {
    trackEvent('pwa_interaction', {
      action,
      ...details
    })
  }, [trackEvent])

  return {
    trackEvent,
    trackPersonaSwitch,
    trackProjectView,
    trackSocialClick,
    trackContactInteraction,
    trackPWAInteraction
  }
}

export default useAnalytics