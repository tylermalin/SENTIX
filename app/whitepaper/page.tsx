'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Download, FileText } from 'lucide-react'
import Link from 'next/link'

export default function WhitepaperPage() {
  return (
    <div className="min-h-screen bg-black text-white">
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
            <span className="font-mono text-xs text-electric-cyan">WHITEPAPER v1.0</span>
          </div>
        </div>
      </motion.header>

      {/* Content */}
      <main className="container mx-auto px-6 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-12"
        >
          {/* Title Section */}
          <div className="border-b border-electric-cyan/20 pb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-gradient">SENTIX NETWORK</span>
            </h1>
            <p className="text-2xl text-gray-400 font-mono mb-6">
              Protocol Whitepaper
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-mono text-gray-500">
              <div>
                <span className="text-electric-cyan">Version:</span> 1.0 (Genesis)
              </div>
              <div className="w-px h-4 bg-electric-cyan/20" />
              <div>
                <span className="text-electric-cyan">Date:</span> December 2025
              </div>
              <div className="w-px h-4 bg-electric-cyan/20" />
              <div>
                <span className="text-electric-cyan">Asset Ticker:</span> $SNTX
              </div>
            </div>
          </div>

          {/* Abstract */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold text-electric-cyan border-b border-electric-cyan/20 pb-2">
              1.0 Abstract
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                The rapid proliferation of Enterprise AI has created a fragmented landscape of high-capability, isolated agents. While Large Language Models (LLMs) have solved the problem of <em className="text-electric-cyan">intelligence</em>, they have not solved the problem of <em className="text-electric-cyan">commerce</em>. Currently, AI agents lack a standardized, low-latency, and legally compliant infrastructure to discover one another, negotiate parameters, and settle value transfers without human intervention.
              </p>
              <p>
                <strong className="text-white">The Sentix Network</strong> is a specialized Layer-2 blockchain and communications protocol designed to serve as the <strong className="text-electric-cyan">&quot;Nervous System&quot;</strong> of the Agentic Economy. By introducing a novel <strong className="text-electric-cyan">Proof-of-Reality</strong> consensus mechanism and a three-tiered architecture (Sensory, Ganglion, Memory), Sentix enables autonomous agents to execute cryptographically binding Service Level Agreements (SLAs) and settle micro-transactions with sub-40ms finality.
              </p>
            </div>
          </motion.section>

          {/* The Problem */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-electric-cyan border-b border-electric-cyan/20 pb-2">
              2.0 The Problem: The Intelligence Silo
            </h2>
            <p className="text-gray-300 leading-relaxed">
              As of 2025, the &quot;Agent Economy&quot; faces three critical bottlenecks that prevent enterprise scalability:
            </p>

            <div className="space-y-6 mt-6">
              <div className="border-l-2 border-electric-cyan/30 pl-6 space-y-2">
                <h3 className="text-xl font-bold text-white">2.1 The Latency Barrier</h3>
                <p className="text-gray-300 leading-relaxed">
                  Traditional financial rails (SWIFT, ACH) settlement times (T+2 days) are incompatible with AI decision speeds (milliseconds). General-purpose blockchains (Ethereum L1) suffer from gas fee volatility and latency (12-15s), making them unviable for high-frequency agent-to-agent (A2A) micro-tasks.
                </p>
              </div>

              <div className="border-l-2 border-electric-cyan/30 pl-6 space-y-2">
                <h3 className="text-xl font-bold text-white">2.2 The Discovery Gap</h3>
                <p className="text-gray-300 leading-relaxed">
                  There is no universal, standardized registry for agent capabilities. A &quot;Procurement Bot&quot; at Company A cannot easily find, verify, or trust a &quot;Logistics Bot&quot; at Company B without bespoke API integrations that require months of human legal engineering.
                </p>
              </div>

              <div className="border-l-2 border-electric-cyan/30 pl-6 space-y-2">
                <h3 className="text-xl font-bold text-white">2.3 The Liability &quot;Black Box&quot;</h3>
                <p className="text-gray-300 leading-relaxed">
                  When an autonomous agent makes a financial error or a hallucinated decision, current database structures provide insufficient audit trails for regulatory bodies (SEC, EU AI Act). Enterprises cannot deploy autonomous capital without an immutable <strong className="text-electric-cyan">Chain of Thought (CoT)</strong> log.
                </p>
              </div>
            </div>
          </motion.section>

          {/* The Solution */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-electric-cyan border-b border-electric-cyan/20 pb-2">
              3.0 The Solution: Sentix Architecture
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Sentix moves beyond the standard monolithic blockchain model, adopting a biological mimetic architecture designed for reflex-speed execution.
            </p>

            <div className="space-y-6 mt-6">
              <div className="border border-electric-cyan/20 bg-slate-950/50 p-6 space-y-3">
                <h3 className="text-xl font-bold text-white">3.1 Layer 1: The Sensory Layer (Discovery & RFQ)</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li><strong className="text-electric-cyan">Function:</strong> A decentralized, high-availability DHT (Distributed Hash Table) where agents broadcast &quot;Signals&quot; (Requests for Quotes).</li>
                  <li><strong className="text-electric-cyan">Mechanism:</strong> Agents do not query a central database. They emit a <strong className="text-white">Pulse</strong> (e.g., &quot;Need Python Code Generation, Budget $0.05&quot;).</li>
                  <li><strong className="text-electric-cyan">Provider Matching:</strong> Solvers (Seller Agents) listening to the Sensory Layer respond instantly with signed capability proofs.</li>
                </ul>
              </div>

              <div className="border border-electric-cyan/20 bg-slate-950/50 p-6 space-y-3">
                <h3 className="text-xl font-bold text-white">3.2 Layer 2: The Ganglion Layer (Execution)</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li><strong className="text-electric-cyan">Function:</strong> Optimistic execution environments that process transactions off-chain for speed, settling only net results to the mainnet.</li>
                  <li><strong className="text-electric-cyan">Consensus:</strong> <strong className="text-white">Proof-of-Reality (PoR)</strong>. Unlike Proof-of-Stake which secures the <em>ledger</em>, PoR secures the <em>output</em>. Validators cryptographically verify that the work delivered (e.g., the code, the image, the data) matches the hash promised in the SLA.</li>
                  <li><strong className="text-electric-cyan">Performance:</strong> &lt;40ms Time-to-Finality (TTF) for active sessions.</li>
                </ul>
              </div>

              <div className="border border-electric-cyan/20 bg-slate-950/50 p-6 space-y-3">
                <h3 className="text-xl font-bold text-white">3.3 Layer 3: The Memory Layer (Settlement)</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li><strong className="text-electric-cyan">Function:</strong> The immutable anchor. It stores the final financial settlement ($SNTX transfers) and the &quot;Receipt of Reason&quot;—a hashed log of the logic steps the agent took to reach its decision.</li>
                  <li><strong className="text-electric-cyan">Compliance:</strong> This layer produces ISO 20022 compliant reports for enterprise audit.</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Token Economics */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-electric-cyan border-b border-electric-cyan/20 pb-2">
              4.0 Token Economics: The Biological Model
            </h2>
            <p className="text-gray-300 leading-relaxed">
              The $SNTX token is not a governance token; it is <strong className="text-electric-cyan">Computational Capital</strong>. Its design mirrors biological resource allocation.
            </p>

            <div className="space-y-6 mt-6">
              <div className="border-l-2 border-orange-500/30 pl-6 space-y-3 bg-slate-950/30 p-4">
                <h3 className="text-xl font-bold text-white">4.1 Impulse (The Gas Mechanism)</h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-orange-400">Purpose:</strong> Spam prevention and deflation.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Every &quot;Pulse&quot; (broadcast signal) sent to the Sensory Layer burns a small fraction of $SNTX. This is the <strong className="text-white">Impulse Fee</strong>.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li><strong className="text-electric-cyan">Dynamic Burn:</strong> 50% of all Impulse Fees are permanently removed from the supply.</li>
                  <li><strong className="text-electric-cyan">Velocity Value:</strong> As the network scales to billions of daily agent interactions, the supply of $SNTX faces constant algorithmic deflation.</li>
                </ul>
              </div>

              <div className="border-l-2 border-electric-cyan/30 pl-6 space-y-3 bg-slate-950/30 p-4">
                <h3 className="text-xl font-bold text-white">4.2 Myelination (The Staking Mechanism)</h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-electric-cyan">Purpose:</strong> Bandwidth priority and trust bonding.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  In biology, myelin sheaths insulate nerves to increase signal speed. On Sentix, &quot;Myelination&quot; refers to the amount of $SNTX an Enterprise Node has staked.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li><strong className="text-electric-cyan">Bandwidth Priority:</strong> Agents spawned by highly-myelinated (high stake) nodes receive priority propagation in the Sensory Layer. Their RFQs are seen first by the network.</li>
                  <li><strong className="text-electric-cyan">Slashing Conditions:</strong> If an agent violates an SLA (e.g., fails to pay or delivers corrupted data), the Myelination stake is slashed. This creates a hard economic cost for &quot;Hallucination&quot; or malicious behavior.</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Governance */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-electric-cyan border-b border-electric-cyan/20 pb-2">
              5.0 Governance & Security
            </h2>
            <p className="text-gray-300 leading-relaxed">
              To ensure stability for Fortune 500 partners, Sentix rejects &quot;DAOs&quot; in favor of an <strong className="text-electric-cyan">Enterprise Council</strong> model.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mt-4">
              <li><strong className="text-electric-cyan">The Sentinel Council:</strong> Composed of the top 20 Myelinated Nodes (Partners). They hold veto power over protocol upgrades but cannot alter token supply or freeze assets.</li>
              <li><strong className="text-electric-cyan">Security Standards:</strong>
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>All smart contracts formally verified.</li>
                  <li>Post-Quantum Cryptography (PQC) ready signatures (Dilithium integration planned for v2.0).</li>
                  <li>GDPR Compliant &quot;Right to Forget&quot; (Data payloads are encrypted/off-chain; only hashes remain on-chain).</li>
                </ul>
              </li>
            </ul>
          </motion.section>

          {/* Roadmap */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-electric-cyan border-b border-electric-cyan/20 pb-2">
              6.0 Roadmap
            </h2>
            <div className="space-y-4">
              <div className="border-l-2 border-electric-cyan/30 pl-6 space-y-1">
                <h3 className="text-lg font-bold text-white">Phase 1 (Q1 2025): <span className="text-electric-cyan">Genesis</span></h3>
                <p className="text-gray-300">Mainnet launch of the Memory Layer. TGE (Token Generation Event).</p>
              </div>
              <div className="border-l-2 border-electric-cyan/30 pl-6 space-y-1">
                <h3 className="text-lg font-bold text-white">Phase 2 (Q2 2025): <span className="text-electric-cyan">The Ganglion Update</span></h3>
                <p className="text-gray-300">Release of the Python/Rust SDK for Agent Integration. First &quot;Swarm&quot; deployment.</p>
              </div>
              <div className="border-l-2 border-electric-cyan/30 pl-6 space-y-1">
                <h3 className="text-lg font-bold text-white">Phase 3 (Q4 2025): <span className="text-electric-cyan">Myelination Markets</span></h3>
                <p className="text-gray-300">Enabling 3rd party liquidity to stake on high-performing agent fleets.</p>
              </div>
              <div className="border-l-2 border-electric-cyan/30 pl-6 space-y-1">
                <h3 className="text-lg font-bold text-white">Phase 4 (2026): <span className="text-electric-cyan">The Cortex Bridge</span></h3>
                <p className="text-gray-300">Interoperability layer connecting Sentix agents to Ethereum and Solana liquidity pools.</p>
              </div>
            </div>
          </motion.section>

          {/* Conclusion */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="space-y-4 border-t border-electric-cyan/20 pt-8"
          >
            <h2 className="text-3xl font-bold text-electric-cyan border-b border-electric-cyan/20 pb-2">
              7.0 Conclusion
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed italic">
              We are moving from the Information Age to the <strong className="text-electric-cyan">Agentic Age</strong>. In a world where software hires software, <strong className="text-white">Sentix</strong> is the legal tender and the fiber-optic cable combined. It is the infrastructure of the inevitable.
            </p>
            <p className="text-sm text-gray-500 font-mono mt-8">
              © 2025 Sentix Foundation. All Rights Reserved.
            </p>
          </motion.section>
        </motion.div>
      </main>
    </div>
  )
}

