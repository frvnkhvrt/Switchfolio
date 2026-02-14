import { useCallback, useEffect, useReducer } from "react"
import { getStorageItem, setStorageItem, STORAGE_KEYS } from "@/utils/storage"

interface SwitchState {
  isSwitchOn: boolean
  isLoaded: boolean
}

type SwitchAction =
  | { type: "SET_SWITCH"; payload: boolean }
  | { type: "SET_LOADED"; payload: boolean }
  | { type: "RESET_SWITCH"; payload: boolean }

const switchReducer = (state: SwitchState, action: SwitchAction): SwitchState => {
  switch (action.type) {
    case "SET_SWITCH":
      return { ...state, isSwitchOn: action.payload }
    case "SET_LOADED":
      return { ...state, isLoaded: action.payload }
    case "RESET_SWITCH":
      return { ...state, isSwitchOn: action.payload }
    default:
      return state
  }
}

const initialState: SwitchState = {
  isSwitchOn: false,
  isLoaded: false,
}

export const usePersistentSwitch = () => {
  const [state, dispatch] = useReducer(switchReducer, initialState)

  useEffect(() => {
    const loadInitialState = () => {
      const storedValue = getStorageItem<boolean>(STORAGE_KEYS.SWITCH_STATE, false)

      if (typeof storedValue === "boolean") {
        dispatch({ type: "SET_SWITCH", payload: storedValue })
      } else if (process.env.NODE_ENV === "development") {
        console.warn("Invalid switch state in localStorage, using default value")
      }

      dispatch({ type: "SET_LOADED", payload: true })
    }

    loadInitialState()
  }, [])

  const toggleSwitch = useCallback(() => {
    const newState = !state.isSwitchOn
    dispatch({ type: "SET_SWITCH", payload: newState })

    const success = setStorageItem(STORAGE_KEYS.SWITCH_STATE, newState)

    if (!success) {
      console.error("Failed to persist switch state, reverting")
      dispatch({ type: "RESET_SWITCH", payload: state.isSwitchOn })
    }
  }, [state.isSwitchOn])

  return {
    isSwitchOn: state.isSwitchOn,
    isLoaded: state.isLoaded,
    toggleSwitch,
  }
}
