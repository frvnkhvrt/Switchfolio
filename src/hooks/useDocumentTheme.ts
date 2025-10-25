import { useEffect } from "react"

const DARK_CLASS = "dark"

export const useDocumentTheme = (isDarkMode: boolean, isReady: boolean) => {
  useEffect(() => {
    if (!isReady || typeof document === "undefined") {
      return
    }

    const classList = document.documentElement.classList

    if (isDarkMode) {
      classList.add(DARK_CLASS)
    } else {
      classList.remove(DARK_CLASS)
    }

    return () => {
      classList.remove(DARK_CLASS)
    }
  }, [isDarkMode, isReady])
}
