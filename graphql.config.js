require('dotenv').config()
const apiUrl = process.env.SERVER_API_ENDPOINT

module.exports = {
  overwrite: true,
  schema: apiUrl,
  documents: `./src/lib/queries/**/*.gql`,
  extensions: {
    codegen: {
      generates: {
        './src/lib/queries': {
          config: {
            reactApolloVersion: 3,
            withHooks: true,
            exportFragmentSpreadSubTypes: true,
            rawRequest: true,
          },
          plugins: ['typescript-operations', 'typescript-graphql-request'],
          preset: 'near-operation-file',
          presetConfig: {
            baseTypesPath: '__generated__/types.ts',
            extension: '.ts',
            folder: '__generated__',
          },
        },
        './src/lib/queries/__generated__/types.ts': {
          config: {
            namingConvention: 'keep',
          },
          plugins: ['typescript'],
        },
      },
    },
  },
}
