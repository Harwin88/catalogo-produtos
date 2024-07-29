import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema:
    './node_modules/@nautical-commerce/graphql-schema/nautical/schema.graphql',
  documents: ['app/graphql/**/*.gql'],
  generates: {
    'app/graphql/_generated/types.ts': {
      plugins: ['typescript', 'typescript-operations'],
      config: {
        avoidOptionals: {
          field: true,
          inputValue: false,
          object: true,
          defaultValue: true,
        },
        declarationKind: 'interface',
      },
    },
    'app/graphql/_generated/sdk.ts': {
      preset: 'import-types',
      presetConfig: {
        typesPath: './types',
      },
      plugins: ['typescript-graphql-request'],
      config: {
        avoidOptionals: true,
      },
    },
  },
}

export default config
