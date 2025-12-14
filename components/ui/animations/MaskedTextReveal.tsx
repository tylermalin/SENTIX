'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface MaskedTextRevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function MaskedTextReveal({
  children,
  delay = 0,
  className = '',
}: MaskedTextRevealProps) {
  return (
    <span className={`inline-block overflow-hidden ${className}`} style={{ lineHeight: '1.1' }}>
      <motion.span
        className="inline-block"
        style={{ paddingBottom: '0.1em' }}
        initial={{ y: '100%' }}
        whileInView={{ y: '0%' }}
        viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
        transition={{
          duration: 1,
          delay,
          ease: [0.25, 0.1, 0.25, 1.0],
        }}
      >
        {children}
      </motion.span>
    </span>
  )
}

