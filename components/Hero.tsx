'use client'

import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'
import Link from 'next/link'
import NeuralLattice from './NeuralLattice'
import { MaskedTextReveal, ScrollReveal } from '@/components/ui/animations'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 z-10">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal direction="left" delay={0.1}>
          <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold" style={{ lineHeight: '1.1' }}>
            <MaskedTextReveal delay={0.1}>
              <span className="text-gradient">
                The Currency of
              </span>
            </MaskedTextReveal>
            <br />
            <MaskedTextReveal delay={0.2}>
              <span className="text-white">Computational Thought.</span>
            </MaskedTextReveal>
          </h1>

          <ScrollReveal delay={0.3}>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
              The first specialized settlement layer for the Agentic Economy.
              We provide the rails for AI to do business.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="flex flex-wrap gap-4">
            <Link href="/tokenomics">
              <motion.button
                className="px-8 py-4 bg-electric-cyan text-black font-bold font-mono text-sm tracking-wider hover:bg-electric-cyan/90 transition-all mechanical-click relative overflow-hidden group flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Read Tokenomics</span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </motion.button>
            </Link>

            <Link href="/whitepaper">
              <motion.button
                className="px-8 py-4 border border-gray-600 text-gray-300 font-mono text-sm tracking-wider hover:border-electric-cyan hover:text-electric-cyan transition-all mechanical-click flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FileText size={18} />
                Read Whitepaper
              </motion.button>
            </Link>
            </div>
          </ScrollReveal>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex items-center justify-center">
            <NeuralLattice />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

