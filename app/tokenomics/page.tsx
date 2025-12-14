'use client'

import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import TokenomicsHero from '@/components/tokenomics/TokenomicsHero'
import MechanicsGrid from '@/components/tokenomics/MechanicsGrid'
import AllocationChart from '@/components/tokenomics/AllocationChart'
import VestingTimeline from '@/components/tokenomics/VestingTimeline'
import EconomicFlywheel from '@/components/tokenomics/EconomicFlywheel'

export default function TokenomicsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      {/* Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-50 border-b border-electric-cyan/10 bg-black/80 backdrop-blur-sm"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-400 hover:text-electric-cyan transition-colors font-mono text-sm"
          >
            <ArrowLeft size={18} />
            Back to Network
          </Link>
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm text-gray-400">SENTIX NETWORK</span>
            <div className="w-px h-6 bg-electric-cyan/20" />
            <span className="font-mono text-xs text-electric-cyan">TOKENOMICS</span>
          </div>
        </div>
      </motion.header>

      {/* Subtle grid texture overlay */}
      <div
        className="fixed inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10">
        <TokenomicsHero />
        <MechanicsGrid />
        <AllocationChart />
        <VestingTimeline />
        <EconomicFlywheel />
      </div>
    </div>
  )
}

