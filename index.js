module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: './typescript',
    }
  ],
  plugins: [
    'import',
  ],
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {},
    ecmaVersion: 2019,
  },
  rules: {
    'semi': [2, 'never'],
    'quotes': [2, 'single'],
    'linebreak-style': [2, 'unix'],
    'indent': [2, 2],
    'comma-spacing': [2, { before: false, after:true }],
    'object-curly-spacing': [2, 'always', { arraysInObjects: true, objectsInObjects: true }],

    'no-constant-condition': [1],
    'no-empty': [1],
  }
}
