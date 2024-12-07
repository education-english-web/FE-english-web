import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HUSAN - ENGLISH',
  description: 'Dù bạn đang ở đâu, hãy luôn tập trung học ngôn ngữ',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <body className={inter.className}>{children}</body>
      </html>
  )
}

