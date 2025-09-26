"use client"
import { useSwitch } from "@/components/Context/SwitchContext"
import { useEffect } from "react"

export const TitleUpdater = () => {
  const { isSwitchOn } = useSwitch()

  useEffect(() => {
    document.title = isSwitchOn ? "Frankhurt" : "Francisco Hurtado"
  }, [isSwitchOn])

  return null
}
