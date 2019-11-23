const chalk = require('chalk')

module.exports = function (gen) {
  const deps = require('../settings/dependencies.js')

  gen.log(chalk.bold('\nInstalling dependencies...'))

  // set up static test
  if (!gen.options.webpack) {
    deps.devDependencies.push('static-server')
  }

  // add mocha
  if (gen.options.mocha) {
    deps.devDependencies.push('mocha')
  }

  // install npm dependencies
  gen.npmInstall(deps.dependencies, { save: true, skipMessage: true })
  gen.npmInstall(deps.devDependencies, { 'save-dev': true, skipMessage: true })
}
