import { Persona } from '@/types'
import { franciscoData } from '@/data/FranciscoData/data'
import { frankhurtData } from '@/data/FrankhurtData/data'

// Validation schema for persona data
interface PersonaDataSchema {
  name: string
  shortName?: string
  bio: string
  about: string
  image: string
  contact: string
  links: Array<{ id: number; name: string; link: string; icon: string }>
  contactLinks: Array<{ id: number; name: string; link: string; icon: string }>
  footerLinks: Array<{ id: number; name: string; link: string; icon: string }>
}

// Configuration interface for persona data
interface PersonaConfig {
  id: string
  data: PersonaDataSchema
}

// Custom error classes for better error handling
export class PersonaValidationError extends Error {
  constructor(message: string, public field?: string) {
    super(message)
    this.name = 'PersonaValidationError'
  }
}

export class PersonaNotFoundError extends Error {
  constructor(id: string) {
    super(`Persona with id '${id}' not found`)
    this.name = 'PersonaNotFoundError'
  }
}

// Validation utility
class PersonaValidator {
  static validatePersonaData(data: any): asserts data is PersonaDataSchema {
    if (!data || typeof data !== 'object') {
      throw new PersonaValidationError('Persona data must be an object')
    }

    const requiredFields: (keyof PersonaDataSchema)[] = ['name', 'bio', 'about', 'image', 'contact', 'links', 'contactLinks', 'footerLinks']
    for (const field of requiredFields) {
      if (!(field in data)) {
        throw new PersonaValidationError(`Missing required field: ${field}`, field)
      }
    }

    if (typeof data.name !== 'string' || data.name.trim().length === 0) {
      throw new PersonaValidationError('Name must be a non-empty string', 'name')
    }

    if (typeof data.bio !== 'string' || data.bio.trim().length === 0) {
      throw new PersonaValidationError('Bio must be a non-empty string', 'bio')
    }

    // Validate links arrays
    const linkArrays = ['links', 'contactLinks', 'footerLinks'] as const
    for (const linkArray of linkArrays) {
      if (!Array.isArray(data[linkArray])) {
        throw new PersonaValidationError(`${linkArray} must be an array`, linkArray)
      }
      data[linkArray].forEach((link: any, index: number) => {
        if (!link || typeof link !== 'object') {
          throw new PersonaValidationError(`${linkArray}[${index}] must be an object`, linkArray)
        }
        if (typeof link.id !== 'number') {
          throw new PersonaValidationError(`${linkArray}[${index}].id must be a number`, linkArray)
        }
        if (typeof link.name !== 'string' || link.name.trim().length === 0) {
          throw new PersonaValidationError(`${linkArray}[${index}].name must be a non-empty string`, linkArray)
        }
        if (typeof link.link !== 'string' || link.link.trim().length === 0) {
          throw new PersonaValidationError(`${linkArray}[${index}].link must be a non-empty string`, linkArray)
        }
        if (typeof link.icon !== 'string' || link.icon.trim().length === 0) {
          throw new PersonaValidationError(`${linkArray}[${index}].icon must be a non-empty string`, linkArray)
        }
      })
    }
  }
}

// Factory pattern for persona creation with validation
class PersonaFactory {
  static createPersona(config: PersonaConfig): Persona {
    try {
      PersonaValidator.validatePersonaData(config.data)
    } catch (error) {
      throw new PersonaValidationError(`Invalid persona data for '${config.id}': ${error instanceof Error ? error.message : 'Unknown error'}`)
    }

    return {
      id: config.id,
      name: config.data.name,
      shortName: config.data.shortName || config.data.name,
      bio: config.data.bio,
      about: config.data.about,
      image: config.data.image,
      contact: config.data.contact,
      links: config.data.links,
      contactLinks: config.data.contactLinks,
      footerLinks: config.data.footerLinks,
    }
  }
}

// Centralized persona data service with improved architecture and error handling
export class PersonaService {
  private static instance: PersonaService
  private personas: Map<string, Persona> = new Map()
  private personaConfigs: PersonaConfig[] = [
    {
      id: 'francisco',
      data: franciscoData
    },
    {
      id: 'frankhurt',
      data: frankhurtData
    }
  ]

  private constructor() {
    this.initializePersonas()
  }

  public static getInstance(): PersonaService {
    if (!PersonaService.instance) {
      PersonaService.instance = new PersonaService()
    }
    return PersonaService.instance
  }

  private initializePersonas(): void {
    this.personas.clear()
    this.personaConfigs.forEach(config => {
      try {
        const persona = PersonaFactory.createPersona(config)
        this.personas.set(config.id, persona)
      } catch (error) {
        console.error(`Failed to initialize persona '${config.id}':`, error)
        // Continue with other personas
      }
    })
  }

  /**
   * Get a persona by ID
   * @param id - The persona identifier
   * @returns The persona object
   * @throws PersonaNotFoundError if persona not found
   */
  public getPersona(id: string): Persona {
    const persona = this.personas.get(id)
    if (!persona) {
      throw new PersonaNotFoundError(id)
    }
    return persona
  }

  /**
   * Get a persona by ID safely (returns undefined if not found)
   * @param id - The persona identifier
   * @returns The persona object or undefined
   */
  public getPersonaSafe(id: string): Persona | undefined {
    return this.personas.get(id)
  }

  /**
   * Get all available personas
   * @returns Array of all personas
   */
  public getAllPersonas(): Persona[] {
    return Array.from(this.personas.values())
  }

  /**
   * Get the current persona based on switch state
   * @param isSwitchOn - Whether the switch is toggled on
   * @returns The appropriate persona
   * @throws PersonaNotFoundError if persona not found
   */
  public getCurrentPersona(isSwitchOn: boolean): Persona {
    const personaId = isSwitchOn ? 'frankhurt' : 'francisco'
    return this.getPersona(personaId)
  }

  /**
   * Add a new persona dynamically
   * @param config - The persona configuration
   * @throws PersonaValidationError if data is invalid
   */
  public addPersona(config: PersonaConfig): void {
    if (this.personas.has(config.id)) {
      throw new Error(`Persona with id '${config.id}' already exists`)
    }

    const persona = PersonaFactory.createPersona(config)
    this.personas.set(config.id, persona)
    this.personaConfigs.push(config)
  }

  /**
   * Remove a persona
   * @param id - The persona ID to remove
   * @returns True if persona was removed
   */
  public removePersona(id: string): boolean {
    const removed = this.personas.delete(id)
    if (removed) {
      this.personaConfigs = this.personaConfigs.filter(config => config.id !== id)
    }
    return removed
  }

  /**
   * Check if a persona exists
   * @param id - The persona ID to check
   * @returns True if persona exists
   */
  public hasPersona(id: string): boolean {
    return this.personas.has(id)
  }

  /**
   * Update an existing persona
   * @param id - The persona ID to update
   * @param config - The new persona configuration
   * @throws PersonaNotFoundError if persona not found
   * @throws PersonaValidationError if data is invalid
   */
  public updatePersona(id: string, config: PersonaConfig): void {
    if (!this.personas.has(id)) {
      throw new PersonaNotFoundError(id)
    }

    const persona = PersonaFactory.createPersona(config)
    this.personas.set(id, persona)

    // Update config
    const index = this.personaConfigs.findIndex(c => c.id === id)
    if (index !== -1) {
      this.personaConfigs[index] = config
    }
  }
}

// Export singleton instance
export const personaService = PersonaService.getInstance()