import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TexAgent — AI Automation for Local Service Businesses',
  description:
    'We build and run a fully automated booking and customer communication system for your spa, salon, or service business.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
