'use client'

import EmbeddedSVG from './EmbeddedSVG'

interface SVGIcon1Props {
  className?: string
  size?: number
  color?: string
}

export default function SVGIcon1({ 
  className = '', 
  size = 400,
  color = '#00F0FF' 
}: SVGIcon1Props) {
  return (
    <EmbeddedSVG 
      src="/1.svg"
      className={className}
      size={size}
      color={color}
    />
  )
}
