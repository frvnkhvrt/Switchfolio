import { Persona } from '@/types'
import { franciscoData } from '@/data/FranciscoData/data'
import { frankhurtData } from '@/data/FrankhurtData/data'

// Simple persona data mapping
const personas: Record<string, Persona> = {
  francisco: {
    id: 'francisco',
    name: franciscoData.name,
    shortName: franciscoData.shortName,
    bio: franciscoData.bio,
    about: franciscoData.about,
    image: franciscoData.image,
    contact: franciscoData.contact,
    links: franciscoData.links,
    contactLinks: franciscoData.contactLinks,
    footerLinks: franciscoData.footerLinks,
  },
  frankhurt: {
    id: 'frankhurt',
    name: frankhurtData.name,
    shortName: frankhurtData.shortName,
    bio: frankhurtData.bio,
    about: frankhurtData.about,
    image: frankhurtData.image,
    contact: frankhurtData.contact,
    links: frankhurtData.links,
    contactLinks: frankhurtData.contactLinks,
    footerLinks: frankhurtData.footerLinks,
  },
}

/**
 * Retrieves a persona by its unique identifier
 * @param id - The persona identifier ('francisco' | 'frankhurt')
 * @returns The persona object with all its properties
 * @throws Error if the persona ID does not exist
 * @example
 * ```typescript
 * const francisco = getPersona('francisco');
 * console.log(francisco.name); // "Francisco"
 * ```
 */
export function getPersona(id: string): Persona {
  const persona = personas[id]
  if (!persona) {
    throw new Error(`Persona with id '${id}' not found`)
  }
  return persona
}

/**
 * Get the current persona based on switch state
 * @param isSwitchOn - Whether the switch is toggled on (true = frankhurt, false = francisco)
 * @returns The appropriate persona
 */
export function getCurrentPersona(isSwitchOn: boolean): Persona {
  return isSwitchOn ? personas.frankhurt : personas.francisco
}

/**
 * Get all available personas
 * @returns Array of all personas
 */
export function getAllPersonas(): Persona[] {
  return Object.values(personas)
}