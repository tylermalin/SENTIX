'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SVGIcon1 from './icons/SVGIcon1'
import SVGIcon2 from './icons/SVGIcon2'

export default function TokenDynamics() {
  return (
    <section className="relative py-24 px-6 z-10">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gradient">Token Dynamics</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Impulse - Burn to Transact */}
          <motion.div
            className="relative p-12 border border-electric-cyan/20 bg-slate-950/50"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{
              boxShadow: '0 0 30px rgba(255, 100, 0, 0.2)',
              borderColor: 'rgba(255, 100, 0, 0.4)',
            }}
          >
            <div className="flex flex-col items-center text-center space-y-6">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="flex items-center justify-center"
              >
                <SVGIcon1 size={120} color="#FF6600" />
              </motion.div>

              <h3 className="text-3xl font-bold text-white">Impulse</h3>
              <p className="text-orange-400 font-mono text-lg uppercase tracking-wider mb-4">
                Burn to Transact
              </p>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Every transaction consumes $SNTX, creating deflationary pressure
                and ensuring network efficiency.
              </p>
            </div>
          </motion.div>

          {/* Myelination - Stake for Speed */}
          <motion.div
            className="relative p-12 border border-electric-cyan/20 bg-slate-950/50"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{
              boxShadow: '0 0 30px rgba(0, 240, 255, 0.3)',
              borderColor: 'rgba(0, 240, 255, 0.5)',
            }}
          >
            <div className="flex flex-col items-center text-center space-y-6">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="flex items-center justify-center"
              >
                <SVGIcon2 size={120} color="#00F0FF" />
              </motion.div>

              <h3 className="text-3xl font-bold text-white">Myelination</h3>
              <p className="text-electric-cyan font-mono text-lg uppercase tracking-wider mb-4">
                Stake for Speed
              </p>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Staking $SNTX grants priority bandwidth and reduced latency.
                The more you stake, the faster your agents execute.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <p className="text-xl text-gray-300 font-mono max-w-2xl mx-auto">
            <span className="text-electric-cyan">$SNTX</span> is not just currency.
            <br />
            <span className="text-white font-bold">It is bandwidth priority.</span>
          </p>
          
          <Link href="/tokenomics">
            <motion.button
              className="mt-8 px-8 py-4 border border-electric-cyan/40 text-electric-cyan font-mono text-sm tracking-wider hover:border-electric-cyan hover:bg-electric-cyan/10 transition-all mechanical-click flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read Tokenomics
              <ArrowRight size={18} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

