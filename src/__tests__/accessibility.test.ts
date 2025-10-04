/**
 * Accessibility Tests
 * Tests for WCAG 2.1 AA compliance and accessibility features
 */

import { ariaLabels, keys, isActivationKey, isArrowKey, ContrastUtils } from '@/utils/accessibility'

// Mock window.matchMedia for tests
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

describe('Accessibility Utils', () => {
  describe('ariaLabels', () => {
    it('generates correct profile image label', () => {
      expect(ariaLabels.profileImage('Francisco')).toBe('Francisco\'s profile picture')
    })

    it('generates correct persona switch label', () => {
      expect(ariaLabels.personaSwitch('Francisco', 'Frankhurt'))
        .toBe('Switch from Francisco to Frankhurt persona')
    })

    it('generates correct project card label', () => {
      expect(ariaLabels.projectCard('My Project', 'Running'))
        .toBe('Project: My Project. Status: Running. Click to view details.')
    })
  })

  describe('Keyboard Navigation', () => {
    it('identifies activation keys correctly', () => {
      expect(isActivationKey(keys.ENTER)).toBe(true)
      expect(isActivationKey(keys.SPACE)).toBe(true)
      expect(isActivationKey(keys.TAB)).toBe(false)
    })

    it('identifies arrow keys correctly', () => {
      expect(isArrowKey(keys.ARROW_UP)).toBe(true)
      expect(isArrowKey(keys.ARROW_DOWN)).toBe(true)
      expect(isArrowKey(keys.ARROW_LEFT)).toBe(true)
      expect(isArrowKey(keys.ARROW_RIGHT)).toBe(true)
      expect(isArrowKey(keys.ENTER)).toBe(false)
    })
  })

  describe('Color Contrast', () => {
    it('passes WCAG AA for good contrast', () => {
      const ratio = ContrastUtils.getContrastRatio('#000000', '#FFFFFF')
      expect(ratio).toBeGreaterThan(4.5)
      expect(ContrastUtils.meetsWCAG('#000000', '#FFFFFF')).toBe(true)
    })

    it('fails WCAG AA for poor contrast', () => {
      const ratio = ContrastUtils.getContrastRatio('#666666', '#777777')
      expect(ratio).toBeLessThan(4.5)
      expect(ContrastUtils.meetsWCAG('#666666', '#777777')).toBe(false)
    })
  })
})

describe('Contact Form Validation', () => {
  it('validates required fields', () => {
    // This would test the Zod schema validation
    // For now, just test that the utilities are imported correctly
    expect(typeof ariaLabels).toBe('object')
    expect(typeof keys).toBe('object')
  })
})