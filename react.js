module.exports = {
  extends: [
    './typescript',
  ],
  overrides: [
    {
      files: ['*.tsx'],
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
      },
      env: {
        browser: true,
        node: false,
      },
    },
  ],
}
