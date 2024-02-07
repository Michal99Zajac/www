import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.API_GRAPHQL_URL,
  config: {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  },
  documents: 'api/graphql/**/*.ts',
  generates: {
    'graphql/generated/index.ts': {
      plugins: [
        'typescript',
        'typescript-react-apollo',
        'typescript-operations',
        'named-operations-object',
        'typescript-validation-schema',
      ],
      config: {
        schema: 'zod',
        strictScalars: true,
        scalars: {
          Date: 'Date',
          DateTime: 'Date',
          JSON: 'any',
          Upload: 'File',
        },
      },
    },
  },
}

export default config
