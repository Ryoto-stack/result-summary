import type { Metadata } from 'next'
import {Hanken_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Hanken_Grotesk({ subsets: ['latin'],weight:['500','700','800'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex items-center justify-center min-h-screen p-5`}>{children}
        
      </body>
    </html>
  )
}
