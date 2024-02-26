import type { Metadata } from 'next'
import { Inter, Itim, Pridi } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const itim = Itim({ subsets: ['thai'], weight: '400' })
const pridi = Pridi({ subsets: ['thai'], weight: '400' })

export const metadata: Metadata = {
  title: 'ต่อคิว | Tor Queue',
  description: 'ต่อคิว | Tor Queue',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={pridi.className}>{children}</body>
    </html>
  )
}
