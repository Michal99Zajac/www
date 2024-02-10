import './globals.css'

import { GoogleTagManager } from '@next/third-parties/google'
import type { Metadata } from 'next'
import Script from 'next/script'

import { env } from '@/config/env'

export const metadata: Metadata = {
  title: 'Michal Zajac | Developer',
  description: "Hello there! I'm Michal Zajac, a software developer based in Poland.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <GoogleTagManager gtmId={env.GTM_ID} />
      </body>
    </html>
  )
}
