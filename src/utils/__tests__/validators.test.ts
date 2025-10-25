/**
 * Validator Utilities Tests
 */

import {
  isNonEmptyString,
  isValidUrl,
  isValidPersona,
  isValidProject,
  hasUniqueIds,
  isValidEmail,
  sanitizeString,
  isAlphanumericWithPunctuation,
  isDefined,
  isNonEmptyArray,
} from '../validators'

describe('Validator Utilities', () => {
  describe('isNonEmptyString', () => {
    it('should return true for non-empty strings', () => {
      expect(isNonEmptyString('hello')).toBe(true)
      expect(isNonEmptyString(' test ')).toBe(true)
    })

    it('should return false for empty or whitespace strings', () => {
      expect(isNonEmptyString('')).toBe(false)
      expect(isNonEmptyString('   ')).toBe(false)
    })

    it('should return false for non-strings', () => {
      expect(isNonEmptyString(123)).toBe(false)
      expect(isNonEmptyString(null)).toBe(false)
      expect(isNonEmptyString(undefined)).toBe(false)
      expect(isNonEmptyString({})).toBe(false)
    })
  })

  describe('isValidUrl', () => {
    it('should return true for valid URLs', () => {
      expect(isValidUrl('https://example.com')).toBe(true)
      expect(isValidUrl('http://localhost:3000')).toBe(true)
      expect(isValidUrl('https://sub.domain.com/path')).toBe(true)
    })

    it('should return false for invalid URLs', () => {
      expect(isValidUrl('not a url')).toBe(false)
      expect(isValidUrl('')).toBe(false)
      expect(isValidUrl('example.com')).toBe(false)
    })
  })

  describe('isValidPersona', () => {
    const validPersona = {
      id: 'francisco',
      name: 'Francisco',
      shortName: 'Frank',
      bio: 'Engineer',
      about: ['line1', 'line2'],
      image: '/path/to/image.jpg',
      links: [],
    }

    it('should return true for valid persona', () => {
      expect(isValidPersona(validPersona)).toBe(true)
    })

    it('should return false for invalid persona', () => {
      expect(isValidPersona(null)).toBe(false)
      expect(isValidPersona(undefined)).toBe(false)
      expect(isValidPersona({})).toBe(false)
      expect(isValidPersona({ ...validPersona, id: '' })).toBe(false)
      expect(isValidPersona({ ...validPersona, about: [] })).toBe(true) // Empty array is valid
      expect(isValidPersona({ ...validPersona, about: ['', 'test'] })).toBe(false)
    })
  })

  describe('isValidProject', () => {
    const validProject = {
      id: 1,
      img: '/path/to/image.jpg',
      title: 'Project',
      status: 'running' as const,
      content: 'Description',
      url: 'https://example.com',
      github: 'https://github.com',
      skill: ['React', 'TypeScript'],
    }

    it('should return true for valid project', () => {
      expect(isValidProject(validProject)).toBe(true)
    })

    it('should return false for invalid project', () => {
      expect(isValidProject(null)).toBe(false)
      expect(isValidProject({})).toBe(false)
      expect(isValidProject({ ...validProject, id: '1' })).toBe(false)
      expect(isValidProject({ ...validProject, status: 'invalid' })).toBe(false)
      expect(isValidProject({ ...validProject, skill: [] })).toBe(true) // Empty array is valid
    })
  })

  describe('hasUniqueIds', () => {
    it('should return true for unique IDs', () => {
      expect(hasUniqueIds([{ id: 1 }, { id: 2 }, { id: 3 }])).toBe(true)
      expect(hasUniqueIds([{ id: 'a' }, { id: 'b' }])).toBe(true)
    })

    it('should return false for duplicate IDs', () => {
      expect(hasUniqueIds([{ id: 1 }, { id: 1 }])).toBe(false)
      expect(hasUniqueIds([{ id: 'a' }, { id: 'a' }])).toBe(false)
    })

    it('should handle empty arrays', () => {
      expect(hasUniqueIds([])).toBe(true)
    })
  })

  describe('isValidEmail', () => {
    it('should return true for valid emails', () => {
      expect(isValidEmail('test@example.com')).toBe(true)
      expect(isValidEmail('user+tag@domain.co.uk')).toBe(true)
    })

    it('should return false for invalid emails', () => {
      expect(isValidEmail('invalid')).toBe(false)
      expect(isValidEmail('@domain.com')).toBe(false)
      expect(isValidEmail('user@')).toBe(false)
      expect(isValidEmail('')).toBe(false)
    })
  })

  describe('sanitizeString', () => {
    it('should escape HTML special characters', () => {
      expect(sanitizeString('<script>alert("xss")</script>')).toBe(
        '&lt;script&gt;alert(&quot;xss&quot;)&lt;&#x2F;script&gt;'
      )
      expect(sanitizeString("It's a test")).toBe('It&#x27;s a test')
    })

    it('should handle normal strings', () => {
      expect(sanitizeString('Hello World')).toBe('Hello World')
    })
  })

  describe('isAlphanumericWithPunctuation', () => {
    it('should return true for valid strings', () => {
      expect(isAlphanumericWithPunctuation('Hello, World!')).toBe(true)
      expect(isAlphanumericWithPunctuation('Test (2024)')).toBe(true)
    })

    it('should return false for strings with special characters', () => {
      expect(isAlphanumericWithPunctuation('Hello<script>')).toBe(false)
      expect(isAlphanumericWithPunctuation('Test@#$%')).toBe(false)
    })
  })

  describe('isDefined', () => {
    it('should return true for defined values', () => {
      expect(isDefined(0)).toBe(true)
      expect(isDefined('')).toBe(true)
      expect(isDefined(false)).toBe(true)
      expect(isDefined({})).toBe(true)
    })

    it('should return false for null or undefined', () => {
      expect(isDefined(null)).toBe(false)
      expect(isDefined(undefined)).toBe(false)
    })
  })

  describe('isNonEmptyArray', () => {
    it('should return true for non-empty arrays', () => {
      expect(isNonEmptyArray([1])).toBe(true)
      expect(isNonEmptyArray(['test'])).toBe(true)
    })

    it('should return false for empty arrays', () => {
      expect(isNonEmptyArray([])).toBe(false)
    })

    it('should return false for non-arrays', () => {
      expect(isNonEmptyArray('not array')).toBe(false)
      expect(isNonEmptyArray(null)).toBe(false)
      expect(isNonEmptyArray({})).toBe(false)
    })
  })
})
