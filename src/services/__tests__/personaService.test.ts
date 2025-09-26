import { PersonaService } from '../personaService'

// Mock the data imports
jest.mock('@/data/FranciscoData/data', () => ({
  franciscoData: {
    name: 'Francisco',
    shortName: 'Francisco',
    bio: 'Engineer + Marketer + Manager',
    about: 'Tech wizard, pixel assassin, status quo saboteur.',
    image: '/assets/Images/pfps/Francisco.jpg',
    contact: '',
    links: [
      {
        id: 1,
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/franciscoahm',
        icon: 'simple-icons:linkedin',
      },
    ],
    contactLinks: [
      {
        id: 1,
        name: 'Email',
        link: 'mailto:franciscohm@icloud.com',
        icon: 'simple-icons:maildotru',
      },
    ],
    footerLinks: [],
  },
}))

jest.mock('@/data/FrankhurtData/data', () => ({
  frankhurtData: {
    name: 'Frankhurt',
    bio: 'Coder + Gamer + Cinephile',
    about: 'Code conjurer, glitch reaper, axiom arsonist.',
    image: '/assets/Images/pfps/Frankhurt.png',
    contact: '',
    links: [
      {
        id: 1,
        name: 'Twitter',
        link: 'https://twitter.com/frvnkhvrt',
        icon: 'simple-icons:x',
      },
    ],
    contactLinks: [
      {
        id: 2,
        name: 'Twitter',
        link: 'https://twitter.com/frvnkhvrt',
        icon: 'simple-icons:x',
      },
    ],
    footerLinks: [],
  },
}))

describe('PersonaService', () => {
  let service: PersonaService

  beforeEach(() => {
    // Reset the singleton instance for each test
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (PersonaService as any).instance = undefined
    service = PersonaService.getInstance()
  })

  describe('Singleton Pattern', () => {
    it('should return the same instance', () => {
      const instance1 = PersonaService.getInstance()
      const instance2 = PersonaService.getInstance()
      expect(instance1).toBe(instance2)
    })
  })

  describe('getPersona', () => {
    it('should return Francisco persona when id is "francisco"', () => {
      const persona = service.getPersona('francisco')
      expect(persona).toBeDefined()
      expect(persona?.id).toBe('francisco')
      expect(persona?.name).toBe('Francisco')
    })

    it('should return Frankhurt persona when id is "frankhurt"', () => {
      const persona = service.getPersona('frankhurt')
      expect(persona).toBeDefined()
      expect(persona?.id).toBe('frankhurt')
      expect(persona?.name).toBe('Frankhurt')
    })

    it('should return undefined for non-existent persona', () => {
      const persona = service.getPersona('nonexistent')
      expect(persona).toBeUndefined()
    })
  })

  describe('getAllPersonas', () => {
    it('should return all personas', () => {
      const personas = service.getAllPersonas()
      expect(personas).toHaveLength(2)
      expect(personas.map(p => p.id)).toEqual(['francisco', 'frankhurt'])
    })
  })

  describe('getCurrentPersona', () => {
    it('should return Francisco when switch is off', () => {
      const persona = service.getCurrentPersona(false)
      expect(persona.id).toBe('francisco')
    })

    it('should return Frankhurt when switch is on', () => {
      const persona = service.getCurrentPersona(true)
      expect(persona.id).toBe('frankhurt')
    })
  })

  describe('Extensibility Methods', () => {
    it('should allow adding new personas', () => {
      const newPersonaConfig = {
        id: 'test',
        data: {
          name: 'Test Persona',
          bio: 'Test Bio',
          about: 'Test About',
          image: '/test.jpg',
          contact: '',
          links: [],
          contactLinks: [],
          footerLinks: [],
        }
      }

      service.addPersona(newPersonaConfig)
      expect(service.hasPersona('test')).toBe(true)
      expect(service.getPersona('test')?.name).toBe('Test Persona')
    })

    it('should allow removing personas', () => {
      // Add persona first in case it's not there
      const newPersonaConfig = {
        id: 'test-remove',
        data: {
          name: 'Test Persona Remove',
          bio: 'Test Bio',
          about: 'Test About',
          image: '/test.jpg',
          contact: '',
          links: [],
          contactLinks: [],
          footerLinks: [],
        }
      }
      service.addPersona(newPersonaConfig)
      expect(service.removePersona('test-remove')).toBe(true)
      expect(service.hasPersona('test-remove')).toBe(false)
    })
  })

  describe('Persona Data Structure', () => {
    it('should have correct structure for Francisco', () => {
      const persona = service.getPersona('francisco')!
      expect(persona).toMatchObject({
        id: 'francisco',
        name: 'Francisco',
        shortName: 'Francisco',
        bio: 'Engineer + Marketer + Manager',
        image: '/assets/Images/pfps/Francisco.jpg',
      })
      expect(Array.isArray(persona.links)).toBe(true)
      expect(Array.isArray(persona.contactLinks)).toBe(true)
      expect(Array.isArray(persona.footerLinks)).toBe(true)
    })

    it('should have correct structure for Frankhurt', () => {
      const persona = service.getPersona('frankhurt')!
      expect(persona).toMatchObject({
        id: 'frankhurt',
        name: 'Frankhurt',
        shortName: 'Frankhurt',
        bio: 'Coder + Gamer + Cinephile',
        image: '/assets/Images/pfps/Frankhurt.png',
      })
      expect(Array.isArray(persona.links)).toBe(true)
      expect(Array.isArray(persona.contactLinks)).toBe(true)
      expect(Array.isArray(persona.footerLinks)).toBe(true)
    })
  })
})