import './globals.css'

import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Hello! I'm Michal Zajac!",
  description: "It's my personal website.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
