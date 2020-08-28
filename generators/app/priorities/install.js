const sugar = require('sugar-chalk')
const deps = require('../settings/dependencies')
const webpackDeps = require('../settings/webpack-dependencies')

module.exports = function (gen) {
  sugar.info('Installing dependencies...')

  // set up static test
  if (gen.options.webpack) {
    deps.devDependencies = deps.devDependencies.concat(webpackDeps.devDependencies)
  } else {
    deps.devDependencies.push('static-server')
  }

  // add jest
  if (gen.options.hasJest) {
    deps.devDependencies.push(require('../settings/jest').devDependencies)
  }

  // install npm dependencies
  console.log('gen.options.silent', gen.options.silent)
  gen.yarnInstall(deps.dependencies, {
    save: true,
    skipMessage: true,
    silent: gen.options.silent
  })
  gen.yarnInstall(deps.devDependencies, {
    dev: true,
    skipMessage: true
  })
}
