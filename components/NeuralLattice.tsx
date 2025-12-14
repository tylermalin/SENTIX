'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'

interface Node {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  radius: number
}

interface Connection {
  from: number
  to: number
  distance: number
  path: string
}

interface DataPacket {
  id: string
  from: number
  to: number
  progress: number
  path: string
}

const NODE_COUNT = 18
const CONNECTION_DISTANCE = 120
const NODE_RADIUS = 4
const PACKET_SPEED = 0.02
const MOUSE_INFLUENCE = 80

export default function NeuralLattice() {
  const svgRef = useRef<SVGSVGElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [nodes, setNodes] = useState<Node[]>([])
  const [connections, setConnections] = useState<Connection[]>([])
  const [dataPackets, setDataPackets] = useState<DataPacket[]>([])
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null)
  const animationFrameRef = useRef<number>()
  const packetIdCounter = useRef(0)

  // Initialize nodes
  useEffect(() => {
    if (!svgRef.current) return

    const width = svgRef.current.clientWidth || 400
    const height = svgRef.current.clientHeight || 400

    const initialNodes: Node[] = Array.from({ length: NODE_COUNT }, (_, i) => ({
      id: i,
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: NODE_RADIUS,
    }))

    setNodes(initialNodes)
  }, [])

  // Calculate connections between nearby nodes
  const calculateConnections = useCallback((currentNodes: Node[]): Connection[] => {
    const newConnections: Connection[] = []

    for (let i = 0; i < currentNodes.length; i++) {
      for (let j = i + 1; j < currentNodes.length; j++) {
        const dx = currentNodes[j].x - currentNodes[i].x
        const dy = currentNodes[j].y - currentNodes[i].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < CONNECTION_DISTANCE) {
          newConnections.push({
            from: i,
            to: j,
            distance,
            path: `M ${currentNodes[i].x} ${currentNodes[i].y} L ${currentNodes[j].x} ${currentNodes[j].y}`,
          })
        }
      }
    }

    return newConnections
  }, [])

  // Spawn data packets on active connections
  const spawnDataPackets = useCallback(
    (currentConnections: Connection[], currentPackets: DataPacket[]) => {
      if (currentConnections.length === 0) return currentPackets

      const newPackets = [...currentPackets]

      // Spawn new packet occasionally (5% chance per frame on each connection)
      currentConnections.forEach((conn) => {
        if (Math.random() < 0.05 && newPackets.length < 5) {
          packetIdCounter.current += 1
          newPackets.push({
            id: `packet-${packetIdCounter.current}`,
            from: conn.from,
            to: conn.to,
            progress: 0,
            path: conn.path,
          })
        }
      })

      // Update existing packets
      const updatedPackets = newPackets
        .map((packet) => ({
          ...packet,
          progress: packet.progress + PACKET_SPEED,
        }))
        .filter((packet) => packet.progress <= 1)

      return updatedPackets
    },
    []
  )

  // Use refs to avoid dependency issues
  const nodesRef = useRef<Node[]>(nodes)
  const mousePosRef = useRef(mousePos)

  useEffect(() => {
    nodesRef.current = nodes
  }, [nodes])

  useEffect(() => {
    mousePosRef.current = mousePos
  }, [mousePos])

  // Animation loop
  useEffect(() => {
    if (nodes.length === 0) return

    const animate = () => {
      if (!svgRef.current) {
        animationFrameRef.current = requestAnimationFrame(animate)
        return
      }

      const width = svgRef.current.clientWidth || 400
      const height = svgRef.current.clientHeight || 400
      const currentMousePos = mousePosRef.current

      setNodes((prevNodes) => {
        const updatedNodes = prevNodes.map((node) => {
          let newX = node.x + node.vx
          let newY = node.y + node.vy

          // Mouse influence (subtle repulsion)
          if (currentMousePos) {
            const dx = newX - currentMousePos.x
            const dy = newY - currentMousePos.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < MOUSE_INFLUENCE && distance > 0) {
              const force = (MOUSE_INFLUENCE - distance) / MOUSE_INFLUENCE
              const angle = Math.atan2(dy, dx)
              newX += Math.cos(angle) * force * 0.5
              newY += Math.sin(angle) * force * 0.5
            }
          }

          // Boundary collision with slight bounce
          if (newX < node.radius || newX > width - node.radius) {
            newX = Math.max(node.radius, Math.min(width - node.radius, newX))
            return { ...node, x: newX, vx: -node.vx * 0.8 }
          }
          if (newY < node.radius || newY > height - node.radius) {
            newY = Math.max(node.radius, Math.min(height - node.radius, newY))
            return { ...node, y: newY, vy: -node.vy * 0.8 }
          }

          // Add slight random drift variation
          const driftVariation = 0.02
          return {
            ...node,
            x: newX,
            y: newY,
            vx: Math.max(-0.5, Math.min(0.5, node.vx + (Math.random() - 0.5) * driftVariation)),
            vy: Math.max(-0.5, Math.min(0.5, node.vy + (Math.random() - 0.5) * driftVariation)),
          }
        })

        // Calculate connections
        const newConnections = calculateConnections(updatedNodes)
        setConnections(newConnections)

        // Update data packets
        setDataPackets((prevPackets) => spawnDataPackets(newConnections, prevPackets))

        return updatedNodes
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [nodes.length, calculateConnections, spawnDataPackets])

  // Mouse tracking
  const handleMouseMove = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    if (!svgRef.current) return

    const rect = svgRef.current.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setMousePos(null)
  }, [])

  return (
    <div ref={containerRef} className="relative w-full max-w-md aspect-square">
      <svg
        ref={svgRef}
        viewBox="0 0 400 400"
        className="w-full h-full"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <defs>
          {/* Glow filter for connections */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Bright glow for data packets */}
          <filter id="packetGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Gradient for nodes */}
          <radialGradient id="nodeGradient" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.3" />
          </radialGradient>
        </defs>

        {/* Connections */}
        {connections.map((conn, idx) => {
          const fromNode = nodes[conn.from]
          const toNode = nodes[conn.to]
          
          if (!fromNode || !toNode) return null

          // Recalculate distance for opacity
          const dx = toNode.x - fromNode.x
          const dy = toNode.y - fromNode.y
          const currentDistance = Math.sqrt(dx * dx + dy * dy)
          const opacity = Math.max(0.1, 1 - currentDistance / CONNECTION_DISTANCE)

          return (
            <line
              key={`conn-${conn.from}-${conn.to}-${idx}`}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke="#00F0FF"
              strokeWidth="1"
              strokeOpacity={opacity}
              filter="url(#glow)"
              style={{ transition: 'opacity 0.2s ease-out' }}
            />
          )
        })}

        {/* Data Packets */}
        {dataPackets.map((packet) => {
          const [fromNode, toNode] = [
            nodes[packet.from],
            nodes[packet.to],
          ]

          if (!fromNode || !toNode) return null

          const currentX = fromNode.x + (toNode.x - fromNode.x) * packet.progress
          const currentY = fromNode.y + (toNode.y - fromNode.y) * packet.progress

          return (
            <motion.circle
              key={packet.id}
              cx={currentX}
              cy={currentY}
              r="3"
              fill="#00F0FF"
              filter="url(#packetGlow)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.5, 1],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 0.5,
                times: [0, 0.2, 0.8, 1],
              }}
            />
          )
        })}

        {/* Nodes */}
        {nodes.map((node) => (
          <g key={node.id}>
            {/* Outer glow ring */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.radius + 2}
              fill="none"
              stroke="#00F0FF"
              strokeWidth="0.5"
              strokeOpacity="0.3"
              filter="url(#glow)"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            {/* Main node */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.radius}
              fill="url(#nodeGradient)"
              filter="url(#glow)"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 2,
              }}
            />
            {/* Inner core */}
            <circle
              cx={node.x}
              cy={node.y}
              r={node.radius * 0.5}
              fill="#00F0FF"
              opacity="0.8"
            />
          </g>
        ))}
      </svg>
    </div>
  )
}

