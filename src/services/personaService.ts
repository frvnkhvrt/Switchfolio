import { Persona, PersonaId } from '@/types'
import personas, { PERSONA_IDS, DEFAULT_PERSONA_ID } from '@/data/personas'

/**
 * Validates if a value is a known PersonaId.
 */
export function isValidPersonaId(id: unknown): id is PersonaId {
  return typeof id === 'string' && (PERSONA_IDS as readonly string[]).includes(id)
}

/**
 * Retrieves a persona by its unique identifier.
 * @throws Error if the persona ID is invalid or not found.
 */
export function getPersona(id: PersonaId): Persona {
  const persona = personas[id]
  
  if (!persona) {
    const availableIds = PERSONA_IDS.join(', ')
    throw new Error(`[PersonaService] Persona '${id}' not found. Available: ${availableIds}`)
  }
  
  return persona
}

/**
 * Safely retrieves a persona with fallback to the system default.
 */
export function getPersonaSafe(id: PersonaId): Persona {
  try {
    return getPersona(id)
  } catch (error) {
    console.error(`[PersonaService] Fallback triggered for ID '${id}':`, error)
    return personas[DEFAULT_PERSONA_ID]
  }
}

/**
 * Get the current persona based on system state.
 * Map-based logic for deterministic results.
 */
export function getCurrentPersona(isSwitchOn: boolean): Persona {
  const targetId: PersonaId = isSwitchOn ? 'frankhurt' : 'francisco'
  return getPersona(targetId)
}

/**
 * Returns the alternate persona.
 */
export function getOppositePersona(currentPersonaId: PersonaId): Persona {
  const oppositeId: PersonaId = currentPersonaId === 'francisco' ? 'frankhurt' : 'francisco'
  return getPersona(oppositeId)
}

/**
 * Returns all registered personas.
 */
export function getAllPersonas(): Persona[] {
  return Object.freeze(Object.values(personas)) as Persona[]
}

/**
 * Returns all valid persona IDs in the system.
 */
export function getAllPersonaIds(): PersonaId[] {
  return Object.freeze([...PERSONA_IDS]) as PersonaId[]
}

/**
 * System-level existence check.
 */
export function personaExists(id: PersonaId | string): boolean {
  return isValidPersonaId(id) && id in personas
}
