import js from '@eslint/js'
import { defineConfig } from 'eslint/config'
import astro from 'eslint-plugin-astro'
import prettier from 'eslint-plugin-prettier'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import tseslint from 'typescript-eslint'

// parsers
const tsParser = tseslint.parser
const astroParser = astro.parser

export default defineConfig([
  // Global configuration
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // Base configs
  js.configs.recommended,
  tseslint.configs.recommended,

  // Prettier config
  {
    plugins: {
      prettier: prettier,
    },
    rules: {
      // disable warnings, since prettier should format on save
      'prettier/prettier': 'warn',
    },
  },

  // Imports
  {
    files: ['**/*.{js,mjs,cjs,ts,astro}'],
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/exports': 'warn',
      'simple-import-sort/imports': 'warn',
    },
  },

  // astro setup with a11y
  astro.configs.recommended,
  astro.configs['jsx-a11y-recommended'],
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.astro'],
        sourceType: 'module',
        ecmaVersion: 'latest',
        project: './tsconfig.json',
      },
    },
    rules: {
      'no-undef': 'off', // Disable "not defined" errors for specific Astro types that are globally available (ImageMetadata)
      '@typescript-eslint/no-explicit-any': 'off', // you may want this as it can get annoying
    },
  },

  // Ignore patterns
  {
    ignores: ['dist/**', '**/*.d.ts'],
  },
])
