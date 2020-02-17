const c = require('./base')()

c.plugins.push('@typescript-eslint')
c.extends.push('plugin:@typescript-eslint/recommended')
c.parser = '@typescript-eslint/parser'

c.parserOptions.ecmaVersion = 2018
c.parserOptions.sourceType = 'module'

c.off(
  '@typescript-eslint/explicit-function-return-type',
)

module.exports = c.build()
