const c = require('./base')()

c.plugins.push('react')

c.extends.push(
  './browser',
  './typescript',
  'plugin:react/recommended',
)

c.parserOptions.ecmaFeatures.jsx = true

c.settings.react = {
  version: 'detect',
}

c.off(
  'react/prop-types',
)

module.exports = c.build()
