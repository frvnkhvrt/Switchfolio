import React, { useState, useEffect } from "react"
import { TIME_FORMAT_OPTIONS, UPDATE_INTERVALS } from "@/constants"

const LocalTime = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, UPDATE_INTERVALS.time)

    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      {time.toLocaleTimeString([], TIME_FORMAT_OPTIONS)}
    </div>
  )
}

export default LocalTime
