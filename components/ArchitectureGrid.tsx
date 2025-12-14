'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import SignalIcon from './icons/SignalIcon'
import GanglionIcon from './icons/GanglionIcon'
import MemoryIcon from './icons/MemoryIcon'
import { StaggerContainer, StaggerItem, ScrollReveal } from '@/components/ui/animations'

const cards = [
  {
    title: 'Sensory Layer',
    subtitle: 'Discovery & RFQ',
    description: "Agents 'sense' liquidity.",
    icon: SignalIcon,
    delay: 0.1,
    details: {
      function: 'A decentralized, high-availability DHT (Distributed Hash Table) where agents broadcast "Signals" (Requests for Quotes).',
      mechanism: 'Agents do not query a central database. They emit a Pulse (e.g., "Need Python Code Generation, Budget $0.05").',
      providerMatching: 'Solvers (Seller Agents) listening to the Sensory Layer respond instantly with signed capability proofs.',
    },
  },
  {
    title: 'Ganglion Layer',
    subtitle: 'Execution',
    description: 'Localized, sub-millisecond consensus.',
    icon: GanglionIcon,
    delay: 0.2,
    details: {
      function: 'Optimistic execution environments that process transactions off-chain for speed, settling only net results to the mainnet.',
      consensus: 'Proof-of-Reality (PoR). Unlike Proof-of-Stake which secures the ledger, PoR secures the output. Validators cryptographically verify that the work delivered (e.g., the code, the image, the data) matches the hash promised in the SLA.',
      performance: '<40ms Time-to-Finality (TTF) for active sessions.',
    },
  },
  {
    title: 'Memory Layer',
    subtitle: 'Settlement',
    description: 'Immutable audit logs for compliance.',
    icon: MemoryIcon,
    delay: 0.3,
    details: {
      function: 'The immutable anchor. It stores the final financial settlement ($SNTX transfers) and the "Receipt of Reason"—a hashed log of the logic steps the agent took to reach its decision.',
      compliance: 'This layer produces ISO 20022 compliant reports for enterprise audit.',
    },
  },
]

export default function ArchitectureGrid() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const toggleCard = (idx: number) => {
    setExpandedCard(expandedCard === idx ? null : idx)
  }

  return (
    <section className="relative py-24 px-6 z-10">
      <div className="container mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-gradient">Neural Architecture</span>
          </h2>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, idx) => {
            const Icon = card.icon
            const isExpanded = expandedCard === idx
            
            return (
              <StaggerItem key={idx}>
                <motion.div
                  className="relative border border-electric-cyan/20 bg-slate-950/50 hover:border-electric-cyan/40 transition-all group overflow-hidden"
                  whileHover={!isExpanded ? {
                    boxShadow: '0 0 20px rgba(0, 240, 255, 0.2)',
                  } : {}}
                >
                <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  {/* Header - Always Visible */}
                  <motion.button
                    onClick={() => toggleCard(idx)}
                    className="w-full p-8 text-left cursor-pointer"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="text-electric-cyan"
                      >
                        {idx === 0 ? (
                          <SignalIcon size={48} className="text-electric-cyan" />
                        ) : idx === 1 ? (
                          <GanglionIcon size={48} className="text-electric-cyan" />
                        ) : idx === 2 ? (
                          <MemoryIcon size={48} className="text-electric-cyan" />
                        ) : (
                          <Icon className="w-12 h-12 text-electric-cyan" />
                        )}
                      </motion.div>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-6 h-6 text-electric-cyan/60" />
                      </motion.div>
                    </div>

                    <h3 className="text-2xl font-bold mb-2 text-white">
                      {card.title}
                    </h3>
                    <p className="text-electric-cyan font-mono text-sm mb-4 uppercase tracking-wider">
                      {card.subtitle}
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      {card.description}
                    </p>
                  </motion.button>

                  {/* Expandable Details */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8 space-y-4 border-t border-electric-cyan/10 pt-6">
                          {card.details.function && (
                            <div className="space-y-2">
                              <h4 className="text-sm font-bold text-electric-cyan uppercase tracking-wider">
                                Function:
                              </h4>
                              <p className="text-gray-300 text-sm leading-relaxed">
                                {card.details.function}
                              </p>
                            </div>
                          )}

                          {card.details.mechanism && (
                            <div className="space-y-2">
                              <h4 className="text-sm font-bold text-electric-cyan uppercase tracking-wider">
                                Mechanism:
                              </h4>
                              <p className="text-gray-300 text-sm leading-relaxed">
                                {card.details.mechanism}
                              </p>
                            </div>
                          )}

                          {card.details.providerMatching && (
                            <div className="space-y-2">
                              <h4 className="text-sm font-bold text-electric-cyan uppercase tracking-wider">
                                Provider Matching:
                              </h4>
                              <p className="text-gray-300 text-sm leading-relaxed">
                                {card.details.providerMatching}
                              </p>
                            </div>
                          )}

                          {card.details.consensus && (
                            <div className="space-y-2">
                              <h4 className="text-sm font-bold text-electric-cyan uppercase tracking-wider">
                                Consensus:
                              </h4>
                              <p className="text-gray-300 text-sm leading-relaxed">
                                {card.details.consensus}
                              </p>
                            </div>
                          )}

                          {card.details.performance && (
                            <div className="space-y-2">
                              <h4 className="text-sm font-bold text-electric-cyan uppercase tracking-wider">
                                Performance:
                              </h4>
                              <p className="text-gray-300 text-sm leading-relaxed">
                                {card.details.performance}
                              </p>
                            </div>
                          )}

                          {card.details.compliance && (
                            <div className="space-y-2">
                              <h4 className="text-sm font-bold text-electric-cyan uppercase tracking-wider">
                                Compliance:
                              </h4>
                              <p className="text-gray-300 text-sm leading-relaxed">
                                {card.details.compliance}
                              </p>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}

