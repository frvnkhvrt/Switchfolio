"use client"
import React, { createContext, useContext, useEffect, useReducer, useMemo, useCallback } from "react"
import { SwitchContextType } from "@/types"
import { getStorageItem, setStorageItem, STORAGE_KEYS } from "@/utils/storage"

// Action types for reducer
type SwitchAction =
  | { type: 'SET_SWITCH'; payload: boolean }
  | { type: 'SET_LOADED'; payload: boolean }
  | { type: 'TOGGLE_SWITCH' }

// State interface
interface SwitchState {
  isSwitchOn: boolean
  isLoaded: boolean
}

// Reducer for complex state management
const switchReducer = (state: SwitchState, action: SwitchAction): SwitchState => {
  switch (action.type) {
    case 'SET_SWITCH':
      return { ...state, isSwitchOn: action.payload }
    case 'SET_LOADED':
      return { ...state, isLoaded: action.payload }
    case 'TOGGLE_SWITCH':
      return { ...state, isSwitchOn: !state.isSwitchOn }
    default:
      return state
  }
}

export const SwitchContext = createContext<SwitchContextType | undefined>(undefined)

export const SwitchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(switchReducer, {
    isSwitchOn: false,
    isLoaded: false,
  })

  useEffect(() => {
    // Safely load initial value from localStorage with enhanced error handling
    const loadInitialState = () => {
      const storedValue = getStorageItem<boolean>(STORAGE_KEYS.SWITCH_STATE, false)
      
      // Validate that the stored value is actually a boolean
      if (typeof storedValue === 'boolean') {
        dispatch({ type: 'SET_SWITCH', payload: storedValue })
      } else {
        console.warn("Invalid switch state in localStorage, using default value")
      }
      
      dispatch({ type: 'SET_LOADED', payload: true })
    }

    loadInitialState()
  }, [])

  useEffect(() => {
    if (state.isLoaded) {
      // Update document class for theme switching
      const action = state.isSwitchOn ? 'add' : 'remove'
      document.documentElement.classList[action]('dark')
    }
  }, [state.isSwitchOn, state.isLoaded])

  const toggleSwitch = useCallback(() => {
    // Update state first (optimistic update)
    const newState = !state.isSwitchOn
    dispatch({ type: 'SET_SWITCH', payload: newState })
    
    // Then persist to localStorage
    const success = setStorageItem(STORAGE_KEYS.SWITCH_STATE, newState)
    
    // Revert state if save failed
    if (!success) {
      console.error("Failed to persist switch state, reverting")
      dispatch({ type: 'SET_SWITCH', payload: state.isSwitchOn })
    }
  }, [state.isSwitchOn]);

  const theme = state.isSwitchOn ? 'dark' : 'light'

  const contextValue = useMemo<SwitchContextType>(() => ({
    isSwitchOn: state.isSwitchOn,
    toggleSwitch,
    theme,
  }), [state.isSwitchOn, toggleSwitch, theme])

  return (
    <SwitchContext.Provider value={contextValue}>
      {state.isLoaded ? children : null}
    </SwitchContext.Provider>
  )
}

export const useSwitch = (): SwitchContextType => {
  const context = useContext(SwitchContext)
  if (!context) {
    throw new Error("useSwitch must be used within a SwitchProvider")
  }
  return context
}
