/**
 * Skip Links Component
 * Provides keyboard navigation shortcuts to main content areas
 */

"use client"

import React from 'react'
import { skipLinks } from '@/utils/accessibility'

export const SkipLinks: React.FC = () => {
  return (
    <div className="skip-links">
      {skipLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="skip-link"
        >
          {link.label}
        </a>
      ))}
    </div>
  )
}

export default SkipLinks