'use client'

import { motion } from 'framer-motion'

const stats = [
  { label: 'AI Market Size', value: '$200B', unit: ' (2025)' },
  { label: 'Enterprise AI Adoption', value: '87%', unit: ' of Fortune 500' },
  { label: 'AI Agent Deployments', value: '+340%', unit: ' YoY Growth' },
  { label: 'LLM API Calls', value: '50B+', unit: ' Daily' },
]

export default function NetworkStats() {
  // Create multiple sets for seamless infinite scroll
  const statsSet = [...stats, ...stats, ...stats]

  return (
    <section className="relative py-6 border-y border-electric-cyan/10 bg-slate-950/50 overflow-hidden z-10">
      <div className="relative w-full">
        <motion.div
          className="flex gap-12 items-center"
          initial={{ x: '0%' }}
          animate={{ x: '-33.333%' }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {statsSet.map((stat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 whitespace-nowrap"
            >
              <span className="font-mono text-sm text-gray-400 uppercase tracking-wider">
                {stat.label}:
              </span>
              <span className="font-mono text-lg font-bold text-electric-cyan">
                {stat.value}
              </span>
              {stat.unit && (
                <span className="font-mono text-sm text-gray-500">
                  {stat.unit}
                </span>
              )}
              <div className="w-px h-6 bg-electric-cyan/20" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

