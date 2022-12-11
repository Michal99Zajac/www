/* eslint-disable tailwindcss/no-custom-classname */
import Head from 'next/head'
import Image from 'next/image'

import type { NextPageWithLayout } from '@/types/global'

const Home: NextPageWithLayout = () => {
  return (
    <div className="w-screen">
      <Head>
        <title>Michal Zajac - Home</title>
      </Head>
      <div className="flex h-screen items-center justify-center bg-white">
        <div className="h-min w-min border-[1px] border-gray-200 bg-gray-50 p-4 drop-shadow-lg">
          <div className="image-card h-[400px] w-[400px]">
            <Image
              src="/photo/me.jpg"
              alt="me"
              width={200}
              height={300}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="pt-4">
            <h1 className="text-xl">Hi!</h1>
            <h2>My name is Michal and I am a software engineer.</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

Home.getLayout = (page) => page

export default Home
