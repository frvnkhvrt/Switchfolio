/**
 * Resume Download Component
 * Generates and downloads PDF resume based on current persona
 */

"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { useSwitch } from '@/components/Context/SwitchContext'
import { personaService } from '@/services/personaService'
import { useAnalytics } from '@/hooks/useAnalytics'
import { useReducedMotion } from '@/hooks/useAccessibility'
import { designSystem } from '@/constants/designSystem'
import toast from 'react-hot-toast'

interface ResumeDownloadProps {
  className?: string
}

export const ResumeDownload: React.FC<ResumeDownloadProps> = ({ className = '' }) => {
  const { isSwitchOn } = useSwitch()
  const { trackContactInteraction } = useAnalytics()
  const shouldReduceMotion = useReducedMotion()
  const [isGenerating, setIsGenerating] = useState(false)

  const currentPersona = personaService.getCurrentPersona(isSwitchOn)
  const resumeFilename = `${currentPersona.name.toLowerCase().replace(' ', '_')}_resume.pdf`

  const generateResumePDF = async () => {
    setIsGenerating(true)
    trackContactInteraction('resume_download')

    try {
      // Dynamic import to reduce bundle size
      const { jsPDF } = await import('jspdf')
      const html2canvas = (await import('html2canvas')).default

      // Create a temporary resume element
      const resumeElement = createResumeElement(currentPersona)

      // Temporarily add to DOM for rendering
      document.body.appendChild(resumeElement)

      // Generate canvas from HTML
      const canvas = await html2canvas(resumeElement, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: isSwitchOn ? '#0f172a' : '#ffffff',
        width: 794, // A4 width in pixels at 96 DPI
        height: 1123, // A4 height in pixels at 96 DPI
      })

      // Remove temporary element
      document.body.removeChild(resumeElement)

      // Create PDF
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [794, 1123], // A4 dimensions
      })

      const imgData = canvas.toDataURL('image/png')
      pdf.addImage(imgData, 'PNG', 0, 0, 794, 1123)

      // Download PDF
      pdf.save(resumeFilename)

      toast.success('Resume downloaded successfully!')
    } catch (error) {
      console.error('Error generating resume PDF:', error)
      toast.error('Failed to generate resume. Please try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  const createResumeElement = (persona: any) => {
    const resumeDiv = document.createElement('div')
    resumeDiv.style.width = '794px'
    resumeDiv.style.minHeight = '1123px'
    resumeDiv.style.padding = '60px'
    resumeDiv.style.fontFamily = 'Geist Mono, monospace'
    resumeDiv.style.backgroundColor = isSwitchOn ? '#0f172a' : '#ffffff'
    resumeDiv.style.color = isSwitchOn ? '#f0f6ff' : '#000000'
    resumeDiv.style.lineHeight = '1.6'

    resumeDiv.innerHTML = `
      <div style="display: flex; gap: 40px; height: 100%;">
        <!-- Left Column -->
        <div style="flex: 1;">
          <h1 style="font-size: 48px; font-weight: bold; margin-bottom: 8px; color: ${isSwitchOn ? '#ecd4b4' : '#3e43f0'};">${persona.name}</h1>
          <h2 style="font-size: 24px; margin-bottom: 24px; opacity: 0.9;">${persona.bio}</h2>

          <div style="margin-bottom: 32px;">
            <h3 style="font-size: 20px; font-weight: bold; margin-bottom: 16px; color: ${isSwitchOn ? '#ecd4b4' : '#3e43f0'};">About</h3>
            <p style="font-size: 16px; opacity: 0.9;">${persona.about}</p>
          </div>

          <div style="margin-bottom: 32px;">
            <h3 style="font-size: 20px; font-weight: bold; margin-bottom: 16px; color: ${isSwitchOn ? '#ecd4b4' : '#3e43f0'};">Experience</h3>
            <div style="space-y: 16px;">
              <div>
                <h4 style="font-size: 18px; font-weight: 600;">Senior Software Engineer</h4>
                <p style="font-size: 14px; opacity: 0.7;">Tech Company • 2022 - Present</p>
                <ul style="margin-top: 8px; padding-left: 20px;">
                  <li style="font-size: 14px;">Led development of scalable web applications</li>
                  <li style="font-size: 14px;">Mentored junior developers and conducted code reviews</li>
                  <li style="font-size: 14px;">Implemented CI/CD pipelines improving deployment efficiency by 40%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div style="flex: 1;">
          <div style="margin-bottom: 32px;">
            <h3 style="font-size: 20px; font-weight: bold; margin-bottom: 16px; color: ${isSwitchOn ? '#ecd4b4' : '#3e43f0'};">Skills</h3>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px;">
              ${['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'SQL', 'AWS'].map(skill =>
                `<span style="font-size: 14px; background: ${isSwitchOn ? '#1e293b' : '#f3f4f6'}; padding: 4px 8px; border-radius: 4px;">${skill}</span>`
              ).join('')}
            </div>
          </div>

          <div style="margin-bottom: 32px;">
            <h3 style="font-size: 20px; font-weight: bold; margin-bottom: 16px; color: ${isSwitchOn ? '#ecd4b4' : '#3e43f0'};">Education</h3>
            <div>
              <h4 style="font-size: 18px; font-weight: 600;">Bachelor of Science in Computer Science</h4>
              <p style="font-size: 14px; opacity: 0.7;">University Name • 2018 - 2022</p>
            </div>
          </div>

          <div style="margin-bottom: 32px;">
            <h3 style="font-size: 20px; font-weight: bold; margin-bottom: 16px; color: ${isSwitchOn ? '#ecd4b4' : '#3e43f0'};">Contact</h3>
            <div style="space-y: 8px;">
              <p style="font-size: 14px;">📧 ${persona.contact || 'contact@example.com'}</p>
              <p style="font-size: 14px;">📱 Available for opportunities</p>
              <p style="font-size: 14px;">🌍 Based in your location</p>
            </div>
          </div>
        </div>
      </div>

      <div style="position: absolute; bottom: 40px; left: 60px; right: 60px; text-align: center; font-size: 12px; opacity: 0.6;">
        Generated on ${new Date().toLocaleDateString()} • ${persona.name}'s Professional Resume
      </div>
    `

    return resumeDiv
  }

  return (
    <motion.button
      onClick={generateResumePDF}
      disabled={isGenerating}
      className={`btn ${className}`}
      whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
      aria-label={`Download ${currentPersona.name}'s resume as PDF`}
    >
      {isGenerating ? (
        <>
          <motion.div
            animate={shouldReduceMotion ? {} : { rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <Icon icon="simple-icons:loading" className="text-lg" />
          </motion.div>
          Generating...
        </>
      ) : (
        <>
          <Icon icon="simple-icons:download" className="text-lg" />
          Download Resume
        </>
      )}
    </motion.button>
  )
}

export default ResumeDownload