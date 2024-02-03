import './globals.css'

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
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${env.GTM_ID}');
          `}
        </Script>
        <noscript>
          <iframe
            title="Google Tag Manager (noscript)"
            src={`https://www.googletagmanager.com/ns.html?id=${env.GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
      </body>
    </html>
  )
}
