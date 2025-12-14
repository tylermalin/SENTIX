'use client'

import { useEffect, useState } from 'react'

export function useCountUp(end: number, start: number = 0, duration: number = 2000): number {
  const [count, setCount] = useState(start)

  useEffect(() => {
    let startTime: number | null = null
    const startValue = start
    const endValue = end

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const current = startValue + (endValue - startValue) * easeOut
      
      setCount(current)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(endValue)
      }
    }

    requestAnimationFrame(animate)
  }, [end, start, duration])

  return count
}

