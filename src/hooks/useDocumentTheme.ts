import { useEffect, useRef } from "react"

const DARK_CLASS = "dark"

export const useDocumentTheme = (isDarkMode: boolean, isReady: boolean) => {
  const appliedDarkRef = useRef(false)

  useEffect(() => {
    if (!isReady || typeof document === "undefined") {
      return
    }

    const classList = document.documentElement.classList

    if (isDarkMode) {
      classList.add(DARK_CLASS)
      appliedDarkRef.current = true
    } else {
      classList.remove(DARK_CLASS)
      appliedDarkRef.current = false
    }

    return () => {
      if (appliedDarkRef.current) {
        classList.remove(DARK_CLASS)
      }
    }
  }, [isDarkMode, isReady])
}
