'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import { ALLOCATION_DATA } from '@/data/tokenomicsData'
import { ScrollReveal } from '@/components/ui/animations'

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0]
    return (
      <div className="bg-slate-900 border border-slate-800 p-4 rounded backdrop-blur-sm">
        <p className="text-white font-mono font-bold mb-2">{data.name}</p>
        <p className="text-electric-cyan font-mono">
          {data.value}% • {data.payload.amount.toLocaleString()} $SNTX
        </p>
        <p className="text-gray-400 text-sm mt-2">{data.payload.description}</p>
      </div>
    )
  }
  return null
}

export default function AllocationChart() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative py-24 px-6 border-y border-slate-800">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-gradient">Supply Allocation</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Chart */}
          <ScrollReveal blur delay={0.1}>
            <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={ALLOCATION_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={140}
                  paddingAngle={2}
                  dataKey="value"
                  onMouseEnter={(_, index) => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {ALLOCATION_DATA.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                      opacity={hoveredIndex === null || hoveredIndex === index ? 1 : 0.3}
                      style={{
                        transition: 'opacity 0.3s',
                        filter: hoveredIndex === index ? 'brightness(1.2)' : 'none',
                      }}
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          </ScrollReveal>

          {/* Legend Table */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="space-y-2">
            {ALLOCATION_DATA.map((item, index) => (
              <motion.div
                key={index}
                className={`border border-slate-800 bg-slate-950/50 p-4 backdrop-blur-sm transition-all cursor-pointer ${
                  hoveredIndex === index ? 'border-electric-cyan/40 bg-slate-900/50' : ''
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-4 h-4 rounded"
                      style={{ backgroundColor: item.color }}
                    />
                    <div>
                      <div className="text-white font-semibold">{item.name}</div>
                      <div className="text-xs text-gray-500">{item.description}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-electric-cyan font-mono font-bold">
                      {item.value}%
                    </div>
                    <div className="text-xs text-gray-600 font-mono">
                      {item.amount.toLocaleString()}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

