import '@/styles/globals.css'

import { Gloria_Hallelujah } from '@next/font/google'

import type { AppPropsWithLayout } from '@/types/global'

const gloriaHallelujah = Gloria_Hallelujah({ weight: '400' })

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: any) => page)

  return (
    <>
      {getLayout(<Component {...pageProps} />)}
      <style jsx global>{`
        :root {
          --font-gloria-hallelujah: ${gloriaHallelujah.style.fontFamily};
        }
      `}</style>
    </>
  )
}
