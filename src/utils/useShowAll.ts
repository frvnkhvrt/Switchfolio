import { useState } from 'react'

/**
 * Custom hook for managing show all/less functionality
 * @param initialItems - Array of items to display
 * @param defaultVisibleCount - Number of items to show by default
 * @returns Object with visible items, showAll state, and toggle function
 */
export function useShowAll<T>(
  initialItems: T[],
  defaultVisibleCount: number = 2
) {
  const showAllVisible = initialItems.length > defaultVisibleCount
  const [showAll, setShowAll] = useState(false)
  const visibleItems = showAll ? initialItems : initialItems.slice(0, defaultVisibleCount)

  const toggleShowAll = () => setShowAll(prev => !prev)

  return {
    visibleItems,
    showAll,
    showAllVisible,
    toggleShowAll
  }
}