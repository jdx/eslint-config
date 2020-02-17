module.exports = {
  plugins: [
    'react',
  ],
  extends: [
    './browser',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true }
  },
  settings: {
    react: { version: 'detect' }
  },
  rules: {
    'react/prop-types': 0
  }
}
