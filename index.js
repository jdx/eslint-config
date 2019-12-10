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
warn('arrow-parens', 'as-needed')
warn('block-spacing')
warn('comma-dangle')
warn('function-paren-newline')
warn('implicit-arrow-linebreak')
warn('max-len', {code: 100})
warn('no-trailing-spaces')
warn('no-undef')
warn('object-curly-spacing')
warn('operator-linebreak', 'before')
warn('prefer-template')
warn('quotes')
warn('semi', 'never')

// import rules
off('import/extensions')
off('import/no-unresolved')
off('import/prefer-default-export')
warn('import/newline-after-import')
warn('import/order')

// react rules
off('react/jsx-one-expression-per-line')
off('react/prop-types')
off('react/self-closing-comp')
warn('react/jsx-closing-bracket-location')
warn('react/jsx-filename-extension', {extensions: ['.jsx', '.tsx']})

// a11y rules
off('jsx-a11y/anchor-is-valid')
off('jsx-a11y/label-has-associated-control')

// typescript rules
off('@typescript-eslint/explicit-function-return-type')
off('@typescript-eslint/unbound-method')
warn('@typescript-eslint/no-unused-vars', {args: 'none'})
warn('@typescript-eslint/member-delimiter-style', {
  multiline: {delimiter: 'comma'},
  singleline: {delimiter: 'comma'},
})

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
