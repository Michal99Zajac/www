import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import type { NextComponentType } from 'next/dist/next-server/lib/utils'

export declare type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout: (component: NextComponentType) => JSX.Element
}

export declare type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export declare type SkillLevel = 'advanced' | 'intermediate' | 'basic'
