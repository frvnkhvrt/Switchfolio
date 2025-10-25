/**
 * Data Validation Utilities
 * Type guards and validators for runtime type checking
 */

import { Persona, PortfolioProject } from '@/types'

/**
 * Validates that a value is a non-empty string
 */
export function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

/**
 * Validates that a value is a valid URL
 */
export function isValidUrl(value: string): boolean {
  try {
    new URL(value)
    return true
  } catch {
    return false
  }
}

/**
 * Validates that a persona object has all required fields
 */
export function isValidPersona(value: unknown): value is Persona {
  if (typeof value !== 'object' || value === null) return false
  
  const persona = value as Partial<Persona>
  
  return (
    isNonEmptyString(persona.id) &&
    isNonEmptyString(persona.name) &&
    isNonEmptyString(persona.shortName) &&
    isNonEmptyString(persona.bio) &&
    Array.isArray(persona.about) &&
    persona.about.every(isNonEmptyString) &&
    isNonEmptyString(persona.image) &&
    Array.isArray(persona.links)
  )
}

/**
 * Validates that a project object has all required fields
 */
export function isValidProject(value: unknown): value is PortfolioProject {
  if (typeof value !== 'object' || value === null) return false
  
  const project = value as Partial<PortfolioProject>
  
  return (
    typeof project.id === 'number' &&
    isNonEmptyString(project.title) &&
    isNonEmptyString(project.content) &&
    (project.status === 'building' || project.status === 'running') &&
    Array.isArray(project.skill) &&
    project.skill.every(isNonEmptyString)
  )
}

/**
 * Validates that an array contains only unique IDs
 */
export function hasUniqueIds<T extends { id: number | string }>(items: T[]): boolean {
  const ids = items.map(item => item.id)
  return ids.length === new Set(ids).size
}

/**
 * Validates email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Sanitizes a string to prevent XSS attacks
 * Basic implementation - for production, use a library like DOMPurify
 */
export function sanitizeString(str: string): string {
  return str
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
}

/**
 * Validates that a string contains only alphanumeric characters and basic punctuation
 */
export function isAlphanumericWithPunctuation(str: string): boolean {
  return /^[a-zA-Z0-9\s.,!?;:'"()\-]+$/.test(str)
}

/**
 * Type guard to check if a value is defined (not null or undefined)
 */
export function isDefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined
}

/**
 * Validates array has at least one element
 */
export function isNonEmptyArray<T>(value: unknown): value is T[] {
  return Array.isArray(value) && value.length > 0
}
