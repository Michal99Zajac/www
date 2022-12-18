import '@/styles/globals.css'

import { Gloria_Hallelujah } from '@next/font/google'

import type { AppPropsWithLayout } from '@/types/global'

const gloriaHallelujah = Gloria_Hallelujah({ weight: '400', variable: '--font-gloria-hallelujah' })

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: any) => page)

  return (
    <main className={`${gloriaHallelujah.variable}`}>
      {getLayout(<Component {...pageProps} />)}
    </main>
  )
}
