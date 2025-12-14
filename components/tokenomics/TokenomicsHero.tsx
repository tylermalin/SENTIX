'use client'

import { motion } from 'framer-motion'
import { useCountUp } from '@/hooks/useCountUp'
import { SUPPLY_DATA, METRICS } from '@/data/tokenomicsData'

export default function TokenomicsHero() {
  const currentSupply = useCountUp(SUPPLY_DATA.currentSupply, 0, 2000)
  const burnRate = useCountUp(METRICS.burnRate, 0, 2000)
  const stakingAPY = useCountUp(METRICS.stakingAPY, 0, 2000)

  const formatNumber = (num: number) => {
    if (num >= 1_000_000_000) {
      return `${(num / 1_000_000_000).toFixed(2)}B`
    }
    if (num >= 1_000_000) {
      return `${(num / 1_000_000).toFixed(1)}M`
    }
    return num.toLocaleString()
  }

  return (
    <section className="relative py-24 px-6 border-b border-slate-800">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="text-gradient">The Physics of</span>
            <br />
            <span className="text-white">Agent Value</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            $SNTX is Computational Capital. It creates the economic gravity required to secure the autonomous marketplace.
          </p>

          {/* Key Metrics Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            <div className="border border-slate-800 bg-slate-950/50 p-6 backdrop-blur-sm">
              <div className="text-sm text-gray-500 font-mono uppercase tracking-wider mb-2">
                Current Supply
              </div>
              <div className="text-3xl font-bold text-electric-cyan font-mono">
                {formatNumber(currentSupply)}
              </div>
              <div className="text-xs text-gray-600 font-mono mt-1">
                $SNTX
              </div>
            </div>

            <div className="border border-slate-800 bg-slate-950/50 p-6 backdrop-blur-sm">
              <div className="text-sm text-gray-500 font-mono uppercase tracking-wider mb-2">
                Burn Rate
              </div>
              <div className="text-3xl font-bold text-electric-cyan font-mono">
                {burnRate.toFixed(1)}%
              </div>
              <div className="text-xs text-gray-600 font-mono mt-1">
                of fees
              </div>
            </div>

            <div className="border border-slate-800 bg-slate-950/50 p-6 backdrop-blur-sm">
              <div className="text-sm text-gray-500 font-mono uppercase tracking-wider mb-2">
                Staking APY
              </div>
              <div className="text-3xl font-bold text-electric-cyan font-mono">
                {stakingAPY.toFixed(1)}%
              </div>
              <div className="text-xs text-gray-600 font-mono mt-1">
                annual yield
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

