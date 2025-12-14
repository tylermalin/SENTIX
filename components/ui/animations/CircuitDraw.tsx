'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

interface CircuitDrawProps {
  path: string
  className?: string
  strokeColor?: string
  strokeWidth?: number
  delay?: number
}

export default function CircuitDraw({
  path,
  className = '',
  strokeColor = '#00F0FF',
  strokeWidth = 2,
  delay = 0,
}: CircuitDrawProps) {
  const ref = useRef<SVGPathElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px -10% 0px' })

  return (
    <svg className={className} viewBox="0 0 100 100" preserveAspectRatio="none">
      <motion.path
        ref={ref}
        d={path}
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{
          duration: 1.5,
          delay,
          ease: [0.25, 0.1, 0.25, 1.0],
        }}
      />
    </svg>
  )
}

