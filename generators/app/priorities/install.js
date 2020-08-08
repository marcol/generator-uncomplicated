const chalk = require('chalk')

module.exports = function (gen) {
  const deps = require('../settings/dependencies')
  const webpackDeps = require('../settings/webpack-dependencies')

  gen.log(chalk.bold('\nInstalling dependencies...'))

  // set up static test
  if (gen.options.webpack) {
    deps.devDependencies = deps.devDependencies.concat(webpackDeps.devDependencies)
  } else {
    deps.devDependencies.push('static-server')
  }

  // add mocha
  if (gen.options.mocha) {
    deps.devDependencies.push('mocha')
  }

  // install npm dependencies
  gen.yarnInstall(deps.dependencies, { save: true, skipMessage: true })
  gen.yarnInstall(deps.devDependencies, { 'save-dev': true, skipMessage: true })
}
