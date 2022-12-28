import '@/styles/globals.css'

import type { AppPropsWithLayout } from '@/types/global'

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: any) => page)

  return <>{getLayout(<Component {...pageProps} />)}</>
}
