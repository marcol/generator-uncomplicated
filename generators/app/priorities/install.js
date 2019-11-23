const chalk = require('chalk')

module.exports = function (gen) {
  const deps = require('../settings/dependencies.js')

  gen.log(chalk.bold('\nInstalling dependencies...'))

  // set up static test
  if (gen.options.namespace === 'uncomplicated:app') {
    deps.devDependencies.push('static-server')
  }

  // install npm dependencies
  gen.npmInstall(deps.dependencies, { save: true, skipMessage: true })
  gen.npmInstall(deps.devDependencies, { 'save-dev': true, skipMessage: true })
}
