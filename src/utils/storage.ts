/**
 * LocalStorage Utilities
 * Type-safe localStorage operations with error handling
 */

/**
 * Safely retrieves and parses a value from localStorage
 * @param key - The localStorage key
 * @param defaultValue - Default value if key doesn't exist or parsing fails
 * @returns Parsed value or default value
 */
export function getStorageItem<T>(key: string, defaultValue: T): T {
  if (typeof window === 'undefined') return defaultValue

  try {
    const item = localStorage.getItem(key)
    if (item === null) return defaultValue
    
    return JSON.parse(item) as T
  } catch (error) {
    console.error(`Failed to get storage item "${key}":`, error)
    return defaultValue
  }
}

/**
 * Safely stringifies and stores a value in localStorage
 * @param key - The localStorage key
 * @param value - Value to store
 * @returns Success boolean
 */
export function setStorageItem<T>(key: string, value: T): boolean {
  if (typeof window === 'undefined') return false

  try {
    localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch (error) {
    console.error(`Failed to set storage item "${key}":`, error)
    return false
  }
}

/**
 * Removes an item from localStorage
 * @param key - The localStorage key
 * @returns Success boolean
 */
export function removeStorageItem(key: string): boolean {
  if (typeof window === 'undefined') return false

  try {
    localStorage.removeItem(key)
    return true
  } catch (error) {
    console.error(`Failed to remove storage item "${key}":`, error)
    return false
  }
}

/**
 * Validates that a storage value matches expected type
 * @param value - Value to validate
 * @param validator - Validation function
 * @returns Whether value is valid
 */
export function validateStorageValue<T>(
  value: unknown,
  validator: (val: unknown) => val is T
): value is T {
  return validator(value)
}

/**
 * Storage keys used throughout the application
 * Centralized to avoid typos and improve maintainability
 */
export const STORAGE_KEYS = {
  SWITCH_STATE: 'isSwitchOn',
  THEME_PREFERENCE: 'theme-preference',
  USER_PREFERENCES: 'user-preferences',
} as const
