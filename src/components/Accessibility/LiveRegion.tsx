/**
 * Live Region Component
 * Announces dynamic content changes to screen readers
 */

"use client"

import React from 'react'

interface LiveRegionProps {
  message: string
  politeness?: 'polite' | 'assertive'
  atomic?: boolean
}

export const LiveRegion: React.FC<LiveRegionProps> = ({
  message,
  politeness = 'polite',
  atomic = true,
}) => {
  return (
    <div
      role="status"
      aria-live={politeness}
      aria-atomic={atomic}
      className="sr-only"
    >
      {message}
    </div>
  )
}

export default LiveRegion