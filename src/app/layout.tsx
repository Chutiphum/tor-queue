import type { Metadata } from 'next'
import { Inter, Itim } from 'next/font/google'
import './globals.css'
import AuthProvider from './context/AuthProvider'

const inter = Inter({ subsets: ['latin'] })
const itim = Itim({ subsets: ['thai'], weight: '400' })

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
      <body className={itim.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
