/**
 * Storage Utilities Tests
 */

import { 
  getStorageItem, 
  setStorageItem, 
  removeStorageItem, 
  STORAGE_KEYS 
} from '../storage'

describe('Storage Utilities', () => {
  beforeEach(() => {
    localStorage.clear()
    jest.clearAllMocks()
  })

  describe('getStorageItem', () => {
    it('should return default value when key does not exist', () => {
      const result = getStorageItem('nonexistent', 'default')
      expect(result).toBe('default')
    })

    it('should return parsed value when key exists', () => {
      localStorage.setItem('test', JSON.stringify({ value: 'test' }))
      const result = getStorageItem('test', {})
      expect(result).toEqual({ value: 'test' })
    })

    it('should return default value on parse error', () => {
      localStorage.setItem('invalid', 'not-json')
      const result = getStorageItem('invalid', 'default')
      expect(result).toBe('default')
    })

    it('should handle boolean values', () => {
      localStorage.setItem('bool', JSON.stringify(true))
      const result = getStorageItem<boolean>('bool', false)
      expect(result).toBe(true)
    })

    it('should handle number values', () => {
      localStorage.setItem('num', JSON.stringify(42))
      const result = getStorageItem<number>('num', 0)
      expect(result).toBe(42)
    })

    it('should handle array values', () => {
      const arr = [1, 2, 3]
      localStorage.setItem('arr', JSON.stringify(arr))
      const result = getStorageItem<number[]>('arr', [])
      expect(result).toEqual(arr)
    })
  })

  describe('setStorageItem', () => {
    it('should store value successfully', () => {
      const result = setStorageItem('test', 'value')
      expect(result).toBe(true)
      expect(localStorage.getItem('test')).toBe(JSON.stringify('value'))
    })

    it('should store complex objects', () => {
      const obj = { name: 'test', value: 123 }
      const result = setStorageItem('obj', obj)
      expect(result).toBe(true)
      expect(JSON.parse(localStorage.getItem('obj')!)).toEqual(obj)
    })

    it('should handle storage quota errors', () => {
      // Mock localStorage.setItem to throw QuotaExceededError
      const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
      mockSetItem.mockImplementation(() => {
        throw new Error('QuotaExceededError')
      })

      const result = setStorageItem('test', 'value')
      expect(result).toBe(false)

      mockSetItem.mockRestore()
    })
  })

  describe('removeStorageItem', () => {
    it('should remove item successfully', () => {
      localStorage.setItem('test', 'value')
      const result = removeStorageItem('test')
      expect(result).toBe(true)
      expect(localStorage.getItem('test')).toBeNull()
    })

    it('should handle errors gracefully', () => {
      const mockRemoveItem = jest.spyOn(Storage.prototype, 'removeItem')
      mockRemoveItem.mockImplementation(() => {
        throw new Error('Error')
      })

      const result = removeStorageItem('test')
      expect(result).toBe(false)

      mockRemoveItem.mockRestore()
    })
  })

  describe('STORAGE_KEYS', () => {
    it('should have all required keys', () => {
      expect(STORAGE_KEYS).toHaveProperty('SWITCH_STATE')
      expect(STORAGE_KEYS).toHaveProperty('THEME_PREFERENCE')
      expect(STORAGE_KEYS).toHaveProperty('USER_PREFERENCES')
    })

    it('should have string values', () => {
      Object.values(STORAGE_KEYS).forEach(key => {
        expect(typeof key).toBe('string')
      })
    })
  })
})
