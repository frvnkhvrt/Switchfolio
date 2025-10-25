import { Persona } from '@/types'
import personas from '@/data/personas'

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