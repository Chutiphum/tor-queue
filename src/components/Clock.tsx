'use client'

import { useState, useEffect } from "react";
import C from 'react-clock'

export default function Clock() {
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <C value={time} />
  )
}
