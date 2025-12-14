'use client'

import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function LegalPage() {
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
            <span className="font-mono text-xs text-electric-cyan">LEGAL & COMPLIANCE</span>
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
              Legal & Compliance
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-mono text-gray-500">
              <div>
                <span className="text-electric-cyan">Last Updated:</span> December 14, 2025
              </div>
              <div className="w-px h-4 bg-electric-cyan/20" />
              <div>
                <span className="text-electric-cyan">Entity:</span> The Sentix Foundation
              </div>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-electric-cyan border-b border-electric-cyan/20 pb-2">
              1.0 Legal Disclaimer
            </h2>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <div className="border-l-2 border-electric-cyan/30 pl-6 space-y-2">
                <h3 className="text-xl font-bold text-white">1.1 No Investment Advice</h3>
                <p>
                  The information provided on this website, in the Whitepaper, and in any accompanying communication does not constitute investment, financial, trading, or other advice. The Sentix Token ($SNTX) is strictly a utility token designed to function as <strong className="text-electric-cyan">"Computational Capital"</strong> (fuel and bandwidth priority) within the Sentix Network. It is not a security, stock, bond, or investment contract. You should not treat any content from the Sentix Foundation as a solicitation to buy or sell any asset.
                </p>
              </div>

              <div className="border-l-2 border-electric-cyan/30 pl-6 space-y-2">
                <h3 className="text-xl font-bold text-white">1.2 No Guarantee of Profit</h3>
                <p>
                  The Sentix Foundation makes no representation or warranty, express or implied, regarding the future value of $SNTX. The value of utility tokens is inherently volatile and derived from network usage. Users should be prepared to lose the entirety of any funds used to acquire $SNTX.
                </p>
              </div>

              <div className="border-l-2 border-electric-cyan/30 pl-6 space-y-2">
                <h3 className="text-xl font-bold text-white">1.3 Regulatory Uncertainty</h3>
                <p>
                  Blockchain technology and artificial intelligence are subject to evolving regulatory landscapes. New regulations or policies may materially adversely affect the development of the Sentix Network and the utility of the $SNTX token.
                </p>
              </div>

              <div className="border-l-2 border-electric-cyan/30 pl-6 space-y-2">
                <h3 className="text-xl font-bold text-white">1.4 Geographic Restrictions</h3>
                <p>
                  The public sale and distribution of $SNTX are not open to residents or citizens of the United States, China, North Korea, Iran, Syria, Cuba, or any other jurisdiction where such participation is prohibited by law (<strong className="text-white">"Restricted Jurisdictions"</strong>). By accessing this site, you affirm that you are not a resident of a Restricted Jurisdiction.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Forward-Looking Statements */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-electric-cyan border-b border-electric-cyan/20 pb-2">
              2.0 Forward-Looking Statements
            </h2>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <div className="border-l-2 border-electric-cyan/30 pl-6 space-y-2">
                <h3 className="text-xl font-bold text-white">2.1 "Safe Harbor" Statement</h3>
                <p>
                  This website and the Sentix Whitepaper contain <strong className="text-electric-cyan">"forward-looking statements"</strong> regarding the Foundation's development roadmap, financial projections, and market position. These statements are identified by words such as "anticipate," "believe," "could," "estimate," "expect," "intend," "may," "plan," "potential," "predict," "project," "should," "will," and "would."
                </p>
              </div>

              <div className="border-l-2 border-electric-cyan/30 pl-6 space-y-2">
                <h3 className="text-xl font-bold text-white">2.2 Material Differences</h3>
                <p>
                  Forward-looking statements are predictions, not guarantees. Actual results may differ materially from those expressed in these statements due to various factors, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                  <li>Technical delays in the development of the Sensory or Ganglion Layers.</li>
                  <li>Cybersecurity breaches or exploits of the smart contract code.</li>
                  <li>Lack of market adoption by Enterprise Partners.</li>
                  <li>Global economic conditions affecting the AI sector.</li>
                </ul>
                <p className="mt-2">
                  The Foundation undertakes no obligation to update or revise any forward-looking statements, whether as a result of new information, future events, or otherwise.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Terms and Conditions */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-electric-cyan border-b border-electric-cyan/20 pb-2">
              3.0 Terms and Conditions ("The Agreement")
            </h2>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <div className="border-l-2 border-electric-cyan/30 pl-6 space-y-2">
                <h3 className="text-xl font-bold text-white">3.1 Acceptance of Terms</h3>
                <p>
                  By accessing or using the Sentix Network website (sentix.network), connecting a wallet, or interacting with the protocol testnet, you agree to be bound by these Terms. If you do not agree, strictly stop using the interface.
                </p>
              </div>

              <div className="border-l-2 border-electric-cyan/30 pl-6 space-y-2">
                <h3 className="text-xl font-bold text-white">3.2 Intellectual Property</h3>
                <p>
                  All content on this site, including the Sentix name, the $SNTX ticker, the <strong className="text-electric-cyan">"Industrial Sci-Fi"</strong> visual interface, logos, code, and text, is the property of the Sentix Foundation and is protected by international copyright and trademark laws.
                </p>
                <div className="mt-4 space-y-2">
                  <p><strong className="text-white">Permitted Use:</strong> You may view, download, and print materials for personal, non-commercial use or for the purpose of evaluating a partnership.</p>
                  <p><strong className="text-white">Prohibited Use:</strong> You may not modify, copy, distribute, or reverse-engineer the interface or the underlying protocol code (unless open-sourced on GitHub) without express written permission.</p>
                </div>
              </div>

              <div className="border-l-2 border-electric-cyan/30 pl-6 space-y-2">
                <h3 className="text-xl font-bold text-white">3.3 Limitation of Liability</h3>
                <p className="font-mono text-sm">
                  TO THE FULLEST EXTENT PERMITTED BY LAW, THE SENTIX FOUNDATION SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO: (A) YOUR USE OF THE SITE OR PROTOCOL; (B) ANY UNAUTHORIZED ACCESS TO YOUR WALLET OR PRIVATE KEYS; (C) ANY BUGS, VIRUSES, OR TROJAN HORSES TRANSMITTED TO OR THROUGH THE SITE; (D) ERRORS OR OMISSIONS IN ANY CONTENT OR DATA.
                </p>
              </div>

              <div className="border-l-2 border-electric-cyan/30 pl-6 space-y-2">
                <h3 className="text-xl font-bold text-white">3.4 User Conduct (The "Anti-Spam" Clause)</h3>
                <p>
                  You agree not to use the Sentix Network to transmit malicious code, spam the Sensory Layer with invalid RFQs, or attempt to destabilize the Ganglion consensus mechanism. Violations may result in the permanent blacklisting of your wallet address and the slashing of any staked $SNTX.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Privacy Policy */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-electric-cyan border-b border-electric-cyan/20 pb-2">
              4.0 Privacy Policy
            </h2>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <div className="border-l-2 border-electric-cyan/30 pl-6 space-y-2">
                <h3 className="text-xl font-bold text-white">4.1 Data Collection</h3>
                <p>
                  We respect your privacy and are committed to protecting your personal data.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                  <li><strong className="text-white">Voluntary Data:</strong> We collect email addresses only if you voluntarily subscribe to the whitelist or newsletter.</li>
                  <li><strong className="text-white">Automatic Data:</strong> When you connect a Web3 wallet (e.g., MetaMask, Rabby), we collect your public wallet address and transaction history relative to the Sentix smart contracts.</li>
                  <li><strong className="text-white">Cookies:</strong> We use minimal cookies strictly for site functionality and aggregated, anonymized analytics (e.g., active user counts).</li>
                </ul>
              </div>

              <div className="border-l-2 border-electric-cyan/30 pl-6 space-y-2">
                <h3 className="text-xl font-bold text-white">4.2 How We Use Your Data</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>To provide access to the Network and process transactions.</li>
                  <li>To notify you of protocol upgrades, governance votes, or security alerts.</li>
                  <li>To prevent fraud and ensure the security of the Myelination (staking) system.</li>
                </ul>
              </div>

              <div className="border-l-2 border-electric-cyan/30 pl-6 space-y-2">
                <h3 className="text-xl font-bold text-white">4.3 Public Blockchain Data</h3>
                <p>
                  <strong className="text-electric-cyan">Critical Note:</strong> Please be aware that transactions on the Sentix Network are recorded on a public blockchain. Your wallet address, transaction amounts, and interaction timestamps are permanently public. We cannot delete or modify this data once it is written to the Memory Layer.
                </p>
              </div>

              <div className="border-l-2 border-electric-cyan/30 pl-6 space-y-2">
                <h3 className="text-xl font-bold text-white">4.4 Third-Party Sharing</h3>
                <p>
                  We do not sell your personal data. We may share data with:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                  <li><strong className="text-white">Service Providers:</strong> Hosting services (e.g., AWS, Vercel) strictly for operational purposes.</li>
                  <li><strong className="text-white">Legal Authorities:</strong> If compelled by a valid court order or subpoena.</li>
                </ul>
              </div>

              <div className="border-l-2 border-electric-cyan/30 pl-6 space-y-2">
                <h3 className="text-xl font-bold text-white">4.5 Contact</h3>
                <p>
                  For legal inquiries or data privacy requests, please contact: <a href="mailto:legal@sentix.network" className="text-electric-cyan hover:underline">legal@sentix.network</a>
                </p>
              </div>
            </div>
          </motion.section>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="border-t border-electric-cyan/20 pt-8"
          >
            <p className="text-sm text-gray-500 font-mono text-center">
              © 2025 Sentix Foundation. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}

