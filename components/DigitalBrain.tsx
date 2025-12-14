'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function DigitalBrain() {
  const svgRef = useRef<SVGSVGElement>(null)

  const nodes = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    angle: (i / 12) * Math.PI * 2,
    radius: 120,
  }))

  const connections = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6],
    [6, 7], [7, 8], [8, 9], [9, 10], [10, 11], [11, 0],
    [0, 6], [1, 7], [2, 8], [3, 9], [4, 10], [5, 11],
  ]

  return (
    <div className="relative w-full max-w-md aspect-square">
      <svg
        ref={svgRef}
        viewBox="0 0 300 300"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.3" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connections */}
        {connections.map(([start, end], idx) => {
          const startNode = nodes[start]
          const endNode = nodes[end]
          const x1 = 150 + Math.cos(startNode.angle) * startNode.radius
          const y1 = 150 + Math.sin(startNode.angle) * startNode.radius
          const x2 = 150 + Math.cos(endNode.angle) * endNode.radius
          const y2 = 150 + Math.sin(endNode.angle) * endNode.radius

          return (
            <motion.g key={`line-${idx}`}>
              <motion.line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#00F0FF"
                strokeWidth="1"
                strokeOpacity="0.3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{
                  duration: 1.5,
                  delay: idx * 0.05,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
            </motion.g>
          )
        })}

        {/* Nodes */}
        {nodes.map((node, idx) => {
          const x = 150 + Math.cos(node.angle) * node.radius
          const y = 150 + Math.sin(node.angle) * node.radius

          return (
            <g key={node.id}>
              <motion.circle
                cx={x}
                cy={y}
                r="8"
                fill="url(#nodeGradient)"
                filter="url(#glow)"
                initial={{ scale: 0 }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  delay: idx * 0.1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.circle
                cx={x}
                cy={y}
                r="4"
                fill="#00F0FF"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 + 0.5 }}
              />
            </g>
          )
        })}

        {/* Center core */}
        <motion.circle
          cx="150"
          cy="150"
          r="20"
          fill="none"
          stroke="#00F0FF"
          strokeWidth="2"
          strokeOpacity="0.5"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <circle
          cx="150"
          cy="150"
          r="12"
          fill="#00F0FF"
          opacity="0.6"
        />
      </svg>
    </div>
  )
}

