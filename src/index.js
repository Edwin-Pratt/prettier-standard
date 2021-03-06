// const { getPathInHostNodeModules } = require('./utils')
// const babelEslintPath = getPathInHostNodeModules('babel-eslint')
// const eslintConfigPrettierPath = getPathInHostNodeModules('eslint-config-prettier')
// const path = require('path')
//
// module.exports = {
//   parser: babelEslintPath,
//   baseConfig: {
//     extends: [
//       path.join(eslintConfigPrettierPath, 'index.js'),
//       path.join(eslintConfigPrettierPath, 'standard.js'),
//       path.join(eslintConfigPrettierPath, 'react.js')
//     ]
//   }
// }

/* eslint no-console:0 */
const message = `
Looks like you're trying to require/import \`prettier-standard\`.
This module doesn't actually expose a NodeJS interface.
This module's just the CLI for \`prettier-standard\`.
`.trim()

console.info(message)

module.exports = message
