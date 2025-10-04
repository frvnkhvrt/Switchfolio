/**
 * Persona SEO Hook
 * Dynamically updates meta tags based on current persona
 */

"use client"

import { useEffect } from "react"
import { useSwitch } from "@/components/Context/SwitchContext"
import { personaService } from "@/services/personaService"

export const usePersonaSEO = () => {
  const { isSwitchOn } = useSwitch()
  const currentPersona = personaService.getCurrentPersona(isSwitchOn)

  useEffect(() => {
    // Update document title
    const personaTitle = isSwitchOn ? "Frankhurt" : "Francisco Hurtado"
    document.title = `${personaTitle} - ${currentPersona.bio.split('.')[0]}`

    // Update meta description
    const description = isSwitchOn
      ? `Frankhurt - ${currentPersona.bio} Specializing in gaming, development, and creative solutions.`
      : `Francisco Hurtado - ${currentPersona.bio} Specializing in engineering, marketing, and innovative solutions.`

    updateMetaTag('description', description)
    updateMetaTag('og:description', description)
    updateMetaTag('twitter:description', description)

    // Update Open Graph tags
    updateMetaTag('og:title', personaTitle)
    updateMetaTag('og:image', currentPersona.image)
    updateMetaTag('og:url', isSwitchOn ? 'https://frankhurt.dev' : 'https://www.frankhurt.dev')

    // Update Twitter tags
    updateMetaTag('twitter:title', personaTitle)
    updateMetaTag('twitter:image', currentPersona.image)
    updateMetaTag('twitter:creator', isSwitchOn ? '@frvnkhvrt' : '@frvnkhvrt')

    // Update theme color
    updateMetaTag('theme-color', isSwitchOn ? '#0f172a' : '#3e43f0')

    // Update keywords
    const keywords = isSwitchOn
      ? ['Frankhurt', 'Gaming', 'Development', 'Creative', 'Anime', 'Code', 'Portfolio']
      : ['Francisco Hurtado', 'Engineer', 'Marketer', 'Manager', 'Coder', 'Portfolio', 'Tech']
    updateMetaTag('keywords', keywords.join(', '))

  }, [isSwitchOn, currentPersona])

  return { currentPersona }
}

function updateMetaTag(name: string, content: string) {
  let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement
  if (!meta) {
    meta = document.createElement('meta')
    meta.name = name
    document.head.appendChild(meta)
  }
  meta.content = content
}