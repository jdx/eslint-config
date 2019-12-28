const rules = {}
const off = (name, ...args) => rules[name] = [0]
const warn = (name, ...args) => rules[name] = [1, ...args]

// main rules
off('arrow-body-style')
off('no-shadow')
off('no-unused-vars')
off('object-curly-newline')
off('spaced-comment')
off('no-param-reassign')
off('no-trailing-spaces')
off('no-undef')
off('no-useless-constructor')
off('class-methods-use-this')
off('semi')
off('no-plusplus')
off('object-curly-spacing')
off('comma-spacing')
off('no-console')
off('no-useless-return')
off('no-spaced-function')
off('max-classes-per-file')
off('indent')
off('no-cond-assign')
off('no-empty')
off('space-before-function-paren')
off('prefer-const')
off('function-paren-newline')
off('default-case')
off('no-underscore-dangle')
off('no-restricted-syntax')
off('space-in-parens')
off('no-multi-spaces')
off('implicit-arrow-linebreak')
off('max-len')
off('block-spacing')
off('no-unused-expressions')
warn('comma-dangle')
warn('arrow-parens', 'as-needed')
warn('block-spacing')
warn('operator-linebreak', 'before')
warn('prefer-template')
warn('quotes')
warn('lines-between-class-members', 'always', {exceptAfterSingleLine: true})

// import rules
off('import/extensions')
off('import/no-unresolved')
off('import/prefer-default-export')
off('import/export')
warn('import/newline-after-import')
warn('import/order')

// react rules
off('react/jsx-one-expression-per-line')
off('react/prop-types')
off('react/self-closing-comp')
off('react/jsx-indent-props')
off('react/jsx-indent')
warn('react/jsx-closing-bracket-location')
warn('react/jsx-filename-extension', {extensions: ['.jsx', '.tsx']})

// a11y rules
off('jsx-a11y/anchor-is-valid')
off('jsx-a11y/label-has-associated-control')

// typescript rules
off('@typescript-eslint/explicit-function-return-type')
off('@typescript-eslint/camelcase')
off('@typescript-eslint/no-explicit-any')
off('@typescript-eslint/unbound-method')
off('@typescript-eslint/no-empty-function')
off('@typescript-eslint/no-unused-vars', {args: 'none'})
off('@typescript-eslint/member-delimiter-style')
off('@typescript-eslint/require-await')
off('@typescript-eslint/no-non-null-assertion')
off('@typescript-eslint/no-use-before-define')

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  rules,
}
