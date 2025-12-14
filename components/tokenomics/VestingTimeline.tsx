'use client'

import { motion } from 'framer-motion'
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip, ReferenceLine } from 'recharts'
import { VESTING_SCHEDULE } from '@/data/tokenomicsData'
import { ScrollReveal } from '@/components/ui/animations'

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload
    return (
      <div className="bg-slate-900 border border-slate-800 p-4 rounded backdrop-blur-sm">
        <p className="text-white font-mono font-bold mb-2">
          Month {data.month}
        </p>
        <p className="text-electric-cyan font-mono">
          {data.circulating.toLocaleString()} $SNTX
        </p>
        {data.label && (
          <p className="text-gray-400 text-sm mt-2 font-mono">{data.label}</p>
        )}
      </div>
    )
  }
  return null
}

export default function VestingTimeline() {
  return (
    <section className="relative py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-gradient">Vesting Schedule</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal blur delay={0.1}>
          <div className="h-96 border border-slate-800 bg-slate-950/50 p-8 backdrop-blur-sm">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={VESTING_SCHEDULE}>
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00F0FF" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#00F0FF" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="circulating"
                stroke="#00F0FF"
                strokeWidth={2}
                fill="url(#colorGradient)"
              />
              <XAxis
                dataKey="month"
                stroke="#64748B"
                tick={{ fill: '#94A3B8', fontFamily: 'var(--font-jetbrains)', fontSize: 12 }}
                label={{ value: 'Months', position: 'insideBottom', offset: -5, fill: '#94A3B8', fontFamily: 'var(--font-jetbrains)' }}
              />
              <YAxis
                stroke="#64748B"
                tick={{ fill: '#94A3B8', fontFamily: 'var(--font-jetbrains)', fontSize: 12 }}
                tickFormatter={(value) => `${(value / 1_000_000_000).toFixed(1)}B`}
                label={{ value: 'Circulating Supply', angle: -90, position: 'insideLeft', fill: '#94A3B8', fontFamily: 'var(--font-jetbrains)' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <ReferenceLine
                x={0}
                stroke="#00F0FF"
                strokeDasharray="3 3"
                label={{ value: 'TGE', position: 'top', fill: '#00F0FF', fontFamily: 'var(--font-jetbrains)' }}
              />
              <ReferenceLine
                x={12}
                stroke="#00F0FF"
                strokeDasharray="3 3"
                label={{ value: 'Cliff End', position: 'top', fill: '#00F0FF', fontFamily: 'var(--font-jetbrains)' }}
              />
              <ReferenceLine
                x={48}
                stroke="#00F0FF"
                strokeDasharray="3 3"
                label={{ value: 'Full Vest', position: 'top', fill: '#00F0FF', fontFamily: 'var(--font-jetbrains)' }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

