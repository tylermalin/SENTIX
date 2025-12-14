'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Network, TrendingUp, Shield, Flame, ArrowUp } from 'lucide-react'
import { FLYWHEEL_STEPS } from '@/data/tokenomicsData'
import { CircuitDraw, ScrollReveal } from '@/components/ui/animations'

const icons = {
  network: Network,
  'trending-up': TrendingUp,
  shield: Shield,
  flame: Flame,
  'arrow-up': ArrowUp,
}

export default function EconomicFlywheel() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-24 px-6 border-t border-slate-800">
      <div className="container mx-auto max-w-4xl">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-gradient">The Economic Flywheel</span>
          </h2>
        </ScrollReveal>

        <div ref={ref} className="relative">
          {/* Circuit Draw Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px">
            <CircuitDraw
              path="M 0 0 L 0 100"
              className="w-full h-full"
              strokeColor="#475569"
              strokeWidth={2}
            />
          </div>

          <div className="space-y-12">
            {FLYWHEEL_STEPS.map((step, index) => {
              const Icon = icons[step.icon as keyof typeof icons]
              const delay = index * 0.2
              const isActive = isInView && index <= 4

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isActive ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay, duration: 0.6 }}
                  className="relative flex items-start gap-6"
                >
                  {/* Circle on the line */}
                  <div className="relative z-10 flex-shrink-0">
                    <motion.div
                      className="w-16 h-16 rounded-full border-2 border-slate-700 bg-slate-950 flex items-center justify-center"
                      animate={isActive ? {
                        borderColor: '#00F0FF',
                        boxShadow: '0 0 20px rgba(0, 240, 255, 0.3)',
                      } : {}}
                      transition={{ delay, duration: 0.6 }}
                    >
                      <motion.div
                        animate={isActive ? { color: '#00F0FF' } : { color: '#94A3B8' }}
                        transition={{ delay, duration: 0.6 }}
                      >
                        <Icon className="w-8 h-8" />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    className="flex-1 border border-slate-800 bg-slate-950/50 p-6 backdrop-blur-sm"
                    animate={isActive ? {
                      borderColor: 'rgba(0, 240, 255, 0.2)',
                    } : {}}
                    transition={{ delay, duration: 0.6 }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-electric-cyan font-mono text-sm">
                        STEP {step.id}
                      </span>
                      <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{step.description}</p>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

