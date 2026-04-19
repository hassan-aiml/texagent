import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TexAgent — Turn Missed Calls Into Booked Jobs',
  description:
    'AI-powered missed call recovery for HVAC, plumbing, and electrical contractors. Responds in 30 seconds. Follows up automatically.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, overflow: 'hidden' }}>{children}</body>
    </html>
  )
}