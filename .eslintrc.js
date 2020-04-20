module.exports = {
  plugins: [
    'import',
  ],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
  ],
  env: {
    es6: true,
    node: true,
  },
  rules: {
    'semi': [2, 'never'],
    'quotes': [2, 'single'],
    'linebreak-style': [2, 'unix'],
    'indent': [2, 2],
    'comma-spacing': [2, { before: false, after: true }],
    'object-curly-spacing': [2, 'never'],

    'no-constant-condition': [1],
    'no-empty': [1],
  }
}
