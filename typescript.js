module.exports = {
  extends: [
    '.',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      plugins: [
        '@typescript-eslint',
      ],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
      ],
      parser: '@typescript-eslint/parser',
      rules: {
        'no-unused-vars': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/class-name-casing': 0,
        '@typescript-eslint/camelcase': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/member-delimiter-style': [2, {
          multiline: {
            delimiter: 'none',
            requireLast: true
          },
          singleline: {
            delimiter: 'semi',
            requireLast: false
          },
        }],

        'import/first': 2,
        'import/exports-last': 2,
        'import/no-duplicates': 2,
        'import/extensions': 2,
        'import/newline-after-import': 2,
        'import/order': [2, {
          'newlines-between': 'always',
          'alphabetize': {order: 'asc'},
        }],
      },
    },
  ],
}
