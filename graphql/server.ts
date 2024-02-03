import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'

import { env } from '@/config/env'

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: env.API_GRAPHQL_URL,
      headers: {
        // assign the API token to the Authorization header
        Authorization: `Bearer ${env.API_TOKEN}`,
      },
    }),
  })
})

export default getClient
