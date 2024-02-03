import { cleanEnv, str, url } from 'envalid'

export const env = cleanEnv(process.env, {
  API_TOKEN: str({
    desc: 'The API token used to authenticate requests to the API',
  }),
  API_URL: url({
    desc: 'The URL of the API',
    example: 'https://api.example.com/api',
  }),
  API_GRAPHQL_URL: url({
    desc: 'The URL of the GraphQL API',
    example: 'https://api.example.com/graphql',
  }),
  NODE_ENV: str({ choices: ['development', 'test', 'production'] }),
})

export default env
