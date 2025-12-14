'use client'

import { motion } from 'framer-motion'
import { Flame, Shield } from 'lucide-react'
import { SUPPLY_DATA, METRICS } from '@/data/tokenomicsData'

export default function MechanicsGrid() {
  const burnPercentage = (SUPPLY_DATA.burned / SUPPLY_DATA.totalSupply) * 100
  const stakePercentage = (SUPPLY_DATA.staked / SUPPLY_DATA.currentSupply) * 100

  return (
    <section className="relative py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gradient">The Mechanics</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* IMPULSE Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-slate-800 bg-slate-950/50 p-12 backdrop-blur-sm hover:border-electric-cyan/40 transition-all"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Flame className="w-12 h-12 text-electric-cyan" />
                </motion.div>
                <h3 className="text-3xl font-bold text-white">IMPULSE</h3>
                <span className="text-electric-cyan font-mono text-sm">(The Burn)</span>
              </div>

              <p className="text-gray-400 text-lg leading-relaxed">
                Gas for the Machine. 50% of every signal fee is permanently burned.
              </p>

              {/* Animated Bar Graph */}
              <div className="space-y-4 mt-8">
                <div className="flex justify-between text-sm font-mono">
                  <span className="text-gray-500">Supply Reduction</span>
                  <span className="text-electric-cyan">{burnPercentage.toFixed(2)}%</span>
                </div>
                <div className="h-4 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                  <motion.div
                    className="h-full bg-gradient-to-r from-electric-cyan to-cyan-600"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${burnPercentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                  />
                </div>
                <div className="text-xs text-gray-600 font-mono">
                  {SUPPLY_DATA.burned.toLocaleString()} / {SUPPLY_DATA.totalSupply.toLocaleString()} $SNTX
                </div>
              </div>
            </div>
          </motion.div>

          {/* MYELINATION Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-slate-800 bg-slate-950/50 p-12 backdrop-blur-sm hover:border-slate-600/40 transition-all"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Shield className="w-12 h-12 text-slate-400" />
                </motion.div>
                <h3 className="text-3xl font-bold text-white">MYELINATION</h3>
                <span className="text-slate-400 font-mono text-sm">(The Stake)</span>
              </div>

              <p className="text-gray-400 text-lg leading-relaxed">
                Bandwidth Priority. Agents must bond $SNTX to verify intent and speed.
              </p>

              {/* Lock/Progress Animation */}
              <div className="space-y-4 mt-8">
                <div className="flex justify-between text-sm font-mono">
                  <span className="text-gray-500">Staking Capacity</span>
                  <span className="text-slate-400">{stakePercentage.toFixed(1)}%</span>
                </div>
                <div className="h-4 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                  <motion.div
                    className="h-full bg-gradient-to-r from-slate-600 to-slate-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stakePercentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                  />
                </div>
                <div className="text-xs text-gray-600 font-mono">
                  {SUPPLY_DATA.staked.toLocaleString()} / {SUPPLY_DATA.currentSupply.toLocaleString()} $SNTX
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

