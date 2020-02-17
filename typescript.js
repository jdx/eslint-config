module.exports = {
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [
    {
      files: ['*.tsx'],
      extends: './react',
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
  }
}
