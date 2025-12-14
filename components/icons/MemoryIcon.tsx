'use client'

interface MemoryIconProps {
  className?: string
  size?: number
}

export default function MemoryIcon({ className = '', size = 48 }: MemoryIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer square with rounded corners */}
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
      />
      
      {/* Inner square with rounded corners */}
      <rect
        x="7"
        y="7"
        width="10"
        height="10"
        rx="1"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
      />
      
      {/* Top pins (5 pins) */}
      <rect x="6" y="2" width="1.5" height="2" rx="0.5" fill="currentColor" />
      <rect x="8.5" y="2" width="1.5" height="2" rx="0.5" fill="currentColor" />
      <rect x="11" y="2" width="1.5" height="2" rx="0.5" fill="currentColor" />
      <rect x="13.5" y="2" width="1.5" height="2" rx="0.5" fill="currentColor" />
      <rect x="16" y="2" width="1.5" height="2" rx="0.5" fill="currentColor" />
      
      {/* Right pins (5 pins) */}
      <rect x="20" y="6" width="2" height="1.5" rx="0.5" fill="currentColor" />
      <rect x="20" y="8.5" width="2" height="1.5" rx="0.5" fill="currentColor" />
      <rect x="20" y="11" width="2" height="1.5" rx="0.5" fill="currentColor" />
      <rect x="20" y="13.5" width="2" height="1.5" rx="0.5" fill="currentColor" />
      <rect x="20" y="16" width="2" height="1.5" rx="0.5" fill="currentColor" />
      
      {/* Bottom pins (5 pins) */}
      <rect x="6" y="20" width="1.5" height="2" rx="0.5" fill="currentColor" />
      <rect x="8.5" y="20" width="1.5" height="2" rx="0.5" fill="currentColor" />
      <rect x="11" y="20" width="1.5" height="2" rx="0.5" fill="currentColor" />
      <rect x="13.5" y="20" width="1.5" height="2" rx="0.5" fill="currentColor" />
      <rect x="16" y="20" width="1.5" height="2" rx="0.5" fill="currentColor" />
      
      {/* Left pins (5 pins) */}
      <rect x="2" y="6" width="2" height="1.5" rx="0.5" fill="currentColor" />
      <rect x="2" y="8.5" width="2" height="1.5" rx="0.5" fill="currentColor" />
      <rect x="2" y="11" width="2" height="1.5" rx="0.5" fill="currentColor" />
      <rect x="2" y="13.5" width="2" height="1.5" rx="0.5" fill="currentColor" />
      <rect x="2" y="16" width="2" height="1.5" rx="0.5" fill="currentColor" />
      
      {/* L-shaped orientation mark in top-right corner of inner square */}
      <path
        d="M 15 9 L 15 11 L 13 11"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

