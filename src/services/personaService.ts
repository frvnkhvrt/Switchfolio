/**
 * Persona Service
 * Centralized business logic for persona management
 */

import { Persona, PersonaId } from '@/types'
import personas, { PERSONA_IDS, DEFAULT_PERSONA_ID } from '@/data/personas'

/**
 * Type guard to check if a string is a valid PersonaId
 * @param id - String to validate
 * @returns True if id is a valid PersonaId
 */
export function isValidPersonaId(id: unknown): id is PersonaId {
  return typeof id === 'string' && PERSONA_IDS.includes(id as PersonaId)
}

/**
 * Retrieves a persona by its unique identifier with type safety
 * @param id - The persona identifier
 * @returns The persona object with all its properties
 * @throws Error if the persona ID does not exist
 * @example
 * ```typescript
 * const francisco = getPersona('francisco');
 * console.log(francisco.name); // "Francisco"
 * ```
 */
export function getPersona(id: PersonaId): Persona {
  if (!isValidPersonaId(id)) {
    throw new Error(`Invalid persona ID: '${id}'. Valid IDs are: ${PERSONA_IDS.join(', ')}`)
  }
  
  const persona = personas[id]
  if (!persona) {
    throw new Error(`Persona with id '${id}' not found in data store`)
  }
  
  return persona
}

/**
 * Safely retrieves a persona with fallback to default
 * @param id - The persona identifier
 * @returns The persona object or default persona if not found
 */
export function getPersonaSafe(id: PersonaId): Persona {
  try {
    return getPersona(id)
  } catch (error) {
    console.warn(`Failed to get persona '${id}', falling back to default:`, error)
    return personas[DEFAULT_PERSONA_ID]
  }
}

/**
 * Get the current persona based on switch state
 * @param isSwitchOn - Whether the switch is toggled on (true = frankhurt, false = francisco)
 * @returns The appropriate persona
 */
export function getCurrentPersona(isSwitchOn: boolean): Persona {
  const personaId: PersonaId = isSwitchOn ? 'frankhurt' : 'francisco'
  return personas[personaId]
}

/**
 * Get the opposite persona from the current one
 * @param currentPersonaId - Current persona ID
 * @returns The opposite persona
 */
export function getOppositePersona(currentPersonaId: PersonaId): Persona {
  const oppositeId: PersonaId = currentPersonaId === 'francisco' ? 'frankhurt' : 'francisco'
  return personas[oppositeId]
}

/**
 * Get all available personas as an array
 * @returns Array of all personas
 */
export function getAllPersonas(): Persona[] {
  return Object.values(personas)
}

/**
 * Get all available persona IDs
 * @returns Array of all persona IDs
 */
export function getAllPersonaIds(): PersonaId[] {
  return [...PERSONA_IDS]
}

/**
 * Check if a persona exists
 * @param id - Persona ID to check
 * @returns True if persona exists
 */
export function personaExists(id: PersonaId): boolean {
  return id in personas
}