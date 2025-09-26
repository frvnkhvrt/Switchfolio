import { Persona } from '@/types'
import { franciscoData } from '@/data/FranciscoData/data'
import { frankhurtData } from '@/data/FrankhurtData/data'

// Configuration interface for persona data
interface PersonaConfig {
  id: string
  data: {
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
}

// Factory pattern for persona creation
class PersonaFactory {
  static createPersona(config: PersonaConfig): Persona {
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

// Centralized persona data service with improved architecture
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
    this.personaConfigs.forEach(config => {
      const persona = PersonaFactory.createPersona(config)
      this.personas.set(config.id, persona)
    })
  }

  /**
   * Get a persona by ID
   * @param id - The persona identifier
   * @returns The persona object or undefined if not found
   */
  public getPersona(id: string): Persona | undefined {
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
   */
  public getCurrentPersona(isSwitchOn: boolean): Persona {
    const personaId = isSwitchOn ? 'frankhurt' : 'francisco'
    const persona = this.personas.get(personaId)
    if (!persona) {
      throw new Error(`Persona with id '${personaId}' not found`)
    }
    return persona
  }

  /**
   * Add a new persona dynamically
   * @param config - The persona configuration
   */
  public addPersona(config: PersonaConfig): void {
    const persona = PersonaFactory.createPersona(config)
    this.personas.set(config.id, persona)
    this.personaConfigs.push(config)
  }

  /**
   * Remove a persona
   * @param id - The persona ID to remove
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
}

// Export singleton instance
export const personaService = PersonaService.getInstance()