module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-props-no-spreading': 'off'
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',

        // typescript-eslint specific options
        warnOnUnsupportedTypeScriptVersion: true
      },
      rules: {
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'spaced-comment': ['error', 'always', { markers: ['/'] }],
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/explicit-module-boundary-types': ['off'],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }]
      }
    }
  ],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  settings: {
    'import/resolver': {
      typescript: {}
    }
  }
}
