'use client'

import { motion } from 'framer-motion'
import { Github, FileText, Shield, Scale } from 'lucide-react'

const links = [
  { label: 'Whitepaper', icon: FileText, href: '/whitepaper' },
  { label: 'Tokenomics', icon: FileText, href: '/tokenomics' },
  { label: 'GitHub', icon: Github, href: 'https://github.com/tylermalin/SENTIX' },
  { label: 'Audits', icon: Shield, href: '#', comingSoon: true },
  { label: 'Terms & Privacy', icon: Scale, href: '/legal' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-electric-cyan/10 bg-slate-950/50 py-12 px-6 z-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-sm text-gray-500">
              © 2025 Sentix Foundation. All Systems Nominal.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {links.map((link, idx) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={idx}
                  href={link.href}
                  className={`flex items-center gap-2 text-gray-400 hover:text-electric-cyan transition-colors font-mono text-sm ${
                    link.comingSoon ? 'cursor-not-allowed opacity-60' : ''
                  }`}
                  whileHover={link.comingSoon ? {} : { scale: 1.05 }}
                  whileTap={link.comingSoon ? {} : { scale: 0.95 }}
                  onClick={link.comingSoon ? (e) => e.preventDefault() : undefined}
                  title={link.comingSoon ? 'In Process' : undefined}
                >
                  <Icon size={16} />
                  {link.label}
                  {link.comingSoon && <span className="text-xs text-gray-600 ml-1">(In Process)</span>}
                </motion.a>
              )
            })}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

