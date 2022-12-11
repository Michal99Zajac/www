import Head from 'next/head'

import type { NextPageWithLayout } from '@/types/global'

const Home: NextPageWithLayout = () => {
  return (
    <div className="h-screen w-screen bg-black">
      <Head>
        <title>home page</title>
      </Head>
    </div>
  )
}

Home.getLayout = (page) => page

export default Home
