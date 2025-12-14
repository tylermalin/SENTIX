'use client'

import { useEffect, useRef, useState } from 'react'

interface EmbeddedSVGProps {
  src: string
  className?: string
  size?: number
  color?: string
}

export default function EmbeddedSVG({ 
  src, 
  className = '', 
  size = 400,
  color = '#00F0FF' 
}: EmbeddedSVGProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [svgContent, setSvgContent] = useState<string>('')

  useEffect(() => {
    fetch(src)
      .then((res) => res.text())
      .then((svgText) => {
        // Replace colors in SVG to match theme - EXACT same processing for both icons
        let coloredSVG = svgText
          // First, remove white background rectangles
          .replace(/<rect[^>]*fill="#ffffff"[^>]*\/>/g, '')
          .replace(/<rect[^>]*fill="#ffffff"[^>]*>.*?<\/rect>/g, '')
          // Replace black/dark colors with the specified color (exact matches first)
          .replace(/fill="#000000"/g, `fill="${color}"`)
          .replace(/fill="#211d1d"/g, `fill="${color}"`)
          .replace(/stroke="#000000"/g, `stroke="${color}"`)
          .replace(/stroke="#211d1d"/g, `stroke="${color}"`)
          // Replace hex colors in the entire string
          .replace(/#000000/g, color)
          .replace(/#211d1d/g, color)
          // Remove white fills completely
          .replace(/fill="#ffffff"/g, `fill="none"`)
          // Force full opacity on ALL elements
          .replace(/fill-opacity="[^"]*"/g, `fill-opacity="1"`)
          .replace(/stroke-opacity="[^"]*"/g, `stroke-opacity="1"`)
          .replace(/opacity="[^"]*"/g, `opacity="1"`)
          // Ensure stroke width is visible (match myelination which works)
          .replace(/stroke-width="([^"]*)"/g, (match, width) => {
            const currentWidth = parseFloat(width) || 1
            // Keep stroke width as-is if it's already good, otherwise ensure minimum
            return currentWidth >= 2 ? match : `stroke-width="${Math.max(currentWidth * 1.5, 2.5)}"`
          })
          // Update dimensions
          .replace(/width="500"/g, `width="${size}"`)
          .replace(/height="500"/g, `height="${size}"`)
          .replace(/viewBox="0 0 375 374.999991"/g, `viewBox="0 0 375 375"`)
        
        setSvgContent(coloredSVG)
      })
      .catch((err) => console.error('Error loading SVG:', err))
  }, [src, color, size])

  if (!svgContent) {
    return (
      <div 
        className={className}
        style={{ width: size, height: size }}
      />
    )
  }

  return (
    <div 
      className={className}
      style={{ width: size, height: size }}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  )
}

