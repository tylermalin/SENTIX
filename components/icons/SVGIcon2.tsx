'use client'

import EmbeddedSVG from './EmbeddedSVG'

interface SVGIcon2Props {
  className?: string
  size?: number
  color?: string
}

export default function SVGIcon2({ 
  className = '', 
  size = 400,
  color = '#00F0FF' 
}: SVGIcon2Props) {
  return (
    <EmbeddedSVG 
      src="/2.svg"
      className={className}
      size={size}
      color={color}
    />
  )
}
