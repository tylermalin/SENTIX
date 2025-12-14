'use client'

import { motion } from 'framer-motion'
import { Terminal } from 'lucide-react'

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-electric-cyan/10 bg-black/80 backdrop-blur-sm"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          className="font-mono text-xl font-bold tracking-wider"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-white">SENTIX</span>
          <span className="text-electric-cyan"> [NETWORK]</span>
        </motion.div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <motion.div
              className="w-2 h-2 rounded-full bg-yellow-500"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="font-mono text-sm text-gray-400">
              Network Status: <span className="text-yellow-500">● TestNet PreLaunch</span>
            </span>
          </div>

          <motion.button
            className="flex items-center gap-2 px-4 py-2 border border-gray-700 text-gray-500 font-mono text-sm cursor-not-allowed"
            disabled
          >
            <Terminal size={16} />
            Connect Terminal
            <span className="text-xs ml-1">(Coming Soon)</span>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}

