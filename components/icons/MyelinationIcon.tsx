'use client'

interface MyelinationIconProps {
  className?: string
  size?: number
}

export default function MyelinationIcon({ className = '', size = 64 }: MyelinationIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Central cell body (circular mass) */}
      <circle
        cx="6"
        cy="18"
        r="3.5"
        fill="currentColor"
      />
      
      {/* Dendrites - branching lines extending from cell body */}
      <line
        x1="6"
        y1="18"
        x2="3"
        y2="15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="6"
        y1="18"
        x2="3"
        y2="20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="6"
        y1="18"
        x2="4"
        y2="21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="6"
        y1="18"
        x2="8"
        y2="21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="6"
        y1="18"
        x2="9"
        y2="20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="6"
        y1="18"
        x2="9"
        y2="16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      
      {/* Axon - thick line extending diagonally upward and right */}
      <line
        x1="9.5"
        y1="16.5"
        x2="20"
        y2="4"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      {/* First myelin sheath (capsule shape) */}
      <path
        d="M 9.7 13 L 9.7 12.1 Q 9.7 12.1 10.5 12.1 Q 11.5 12.1 12.5 12.1 Q 13.3 12.1 13.3 12.1 L 13.3 13 L 13.3 13.9 Q 13.3 13.9 12.5 13.9 Q 11.5 13.9 10.5 13.9 Q 9.7 13.9 9.7 13.9 Z"
        fill="currentColor"
      />
      <ellipse
        cx="11.5"
        cy="13"
        rx="1"
        ry="0.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.3"
        opacity="0.5"
      />
      
      {/* Second myelin sheath */}
      <path
        d="M 12.7 9.5 L 12.7 8.6 Q 12.7 8.6 13.5 8.6 Q 14.5 8.6 15.5 8.6 Q 16.3 8.6 16.3 8.6 L 16.3 9.5 L 16.3 10.4 Q 16.3 10.4 15.5 10.4 Q 14.5 10.4 13.5 10.4 Q 12.7 10.4 12.7 10.4 Z"
        fill="currentColor"
      />
      <ellipse
        cx="14.5"
        cy="9.5"
        rx="1"
        ry="0.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.3"
        opacity="0.5"
      />
      
      {/* Third myelin sheath */}
      <path
        d="M 15.7 6 L 15.7 5.1 Q 15.7 5.1 16.5 5.1 Q 17.5 5.1 18.5 5.1 Q 19.3 5.1 19.3 5.1 L 19.3 6 L 19.3 6.9 Q 19.3 6.9 18.5 6.9 Q 17.5 6.9 16.5 6.9 Q 15.7 6.9 15.7 6.9 Z"
        fill="currentColor"
      />
      <ellipse
        cx="17.5"
        cy="6"
        rx="1"
        ry="0.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.3"
        opacity="0.5"
      />
    </svg>
  )
}

