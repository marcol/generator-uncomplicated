module.exports = function (gen) {
  const deps = require('../config/dependencies.js')

  gen.log('\nInstalling dependencies...')

  // install npm dependencies
  gen.npmInstall(deps.dependencies, { save: true, skipMessage: true })
  gen.npmInstall(deps.devDependencies, { 'save-dev': true, skipMessage: true })
}
