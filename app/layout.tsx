import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import dynamic from 'next/dynamic'
import LenisProvider from '@/components/providers/LenisProvider'

const AnimatedBackground = dynamic(() => import('@/components/AnimatedBackground'), {
  ssr: false,
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sentix Network | The Currency of Computational Thought',
  description: 'The first specialized settlement layer for the Agentic Economy. We provide the rails for AI to do business.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-black text-white`}>
        <LenisProvider>
          <AnimatedBackground />
          {children}
        </LenisProvider>
      </body>
    </html>
  )
}
