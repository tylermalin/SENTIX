'use client'

interface GanglionIconProps {
  className?: string
  size?: number
}

export default function GanglionIcon({ className = '', size = 48 }: GanglionIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Central circle */}
      <circle
        cx="12"
        cy="12"
        r="2.5"
        fill="currentColor"
      />
      
      {/* Top-left loop */}
      <path
        d="M 9.5 9.5 Q 6 6 4 4 Q 6 6 9.5 9.5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Top loop */}
      <path
        d="M 12 9.5 Q 12 6 12 3.5 Q 12 6 12 9.5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Top-right loop */}
      <path
        d="M 14.5 9.5 Q 18 6 20 4 Q 18 6 14.5 9.5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Right loop */}
      <path
        d="M 14.5 12 Q 18 12 20 12 Q 18 12 14.5 12"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Bottom-right loop */}
      <path
        d="M 14.5 14.5 Q 18 18 20 20 Q 18 18 14.5 14.5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Bottom loop */}
      <path
        d="M 12 14.5 Q 12 18 12 20.5 Q 12 18 12 14.5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Bottom-left loop */}
      <path
        d="M 9.5 14.5 Q 6 18 4 20 Q 6 18 9.5 14.5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Left loop */}
      <path
        d="M 9.5 12 Q 6 12 4 12 Q 6 12 9.5 12"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

