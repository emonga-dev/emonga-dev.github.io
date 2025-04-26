import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import react from 'eslint-plugin-react'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react': react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'no-console': ['warn', { 'allow': ['error', 'info'] }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'max-len': ['error', { 'code': 160, 'tabWidth': 2 }],
      'semi': ['error', 'always'],
      'object-curly-spacing': ['error', 'always'],
      'react/jsx-curly-spacing': ['error', {
        'when': 'always',
        'children': true,
      }],
      'comma-dangle': ['error', 'always-multiline'],
      'comma-spacing': ['error', { 'before': false, 'after': true }],
      'keyword-spacing': ['error', { 'before': true, 'after': true }],
      'eol-last': ['error', 'always'],
      'quotes': ['error', 'single'],
      'react-hooks/exhaustive-deps': 'off',
      'no-trailing-spaces': ['error'],
    },
  },
)
