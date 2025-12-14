'use client'

interface ImpulseIconProps {
  className?: string
  size?: number
}

export default function ImpulseIcon({ className = '', size = 64 }: ImpulseIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer circle */}
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
      />
      
      {/* Heartbeat/pulse wave - M/W shape */}
      <path
        d="M 4 14 L 6 14 L 7 8 L 9 16 L 11 6 L 13 14 L 15 10 L 17 14 L 20 14"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

