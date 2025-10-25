import { getPersona, getCurrentPersona, getAllPersonas } from '../personaService'

describe('personaService', () => {
  describe('getPersona', () => {
    it('should return Francisco persona when id is "francisco"', () => {
      const persona = getPersona('francisco')
      expect(persona.id).toBe('francisco')
      expect(persona.name).toBe('Francisco')
    })

    it('should return Frankhurt persona when id is "frankhurt"', () => {
      const persona = getPersona('frankhurt')
      expect(persona.id).toBe('frankhurt')
      expect(persona.name).toBe('Frankhurt')
    })

    it('should throw error for invalid persona id', () => {
      // @ts-expect-error - Testing invalid input
      expect(() => getPersona('invalid')).toThrow('Invalid persona ID')
    })
  })

  describe('getCurrentPersona', () => {
    it('should return Francisco when isSwitchOn is false', () => {
      const persona = getCurrentPersona(false)
      expect(persona.id).toBe('francisco')
      expect(persona.name).toBe('Francisco')
    })

    it('should return Frankhurt when isSwitchOn is true', () => {
      const persona = getCurrentPersona(true)
      expect(persona.id).toBe('frankhurt')
      expect(persona.name).toBe('Frankhurt')
    })
  })

  describe('getAllPersonas', () => {
    it('should return array with both personas', () => {
      const personas = getAllPersonas()
      expect(personas).toHaveLength(2)
      expect(personas.map(p => p.id)).toEqual(['francisco', 'frankhurt'])
    })

    it('should return persona objects with required properties', () => {
      const personas = getAllPersonas()
      personas.forEach(persona => {
        expect(persona).toHaveProperty('id')
        expect(persona).toHaveProperty('name')
        expect(persona).toHaveProperty('bio')
        expect(persona).toHaveProperty('links')
      })
    })
  })
})