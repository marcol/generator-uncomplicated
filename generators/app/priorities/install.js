module.exports = function (gen) {
  const fs = require('fs')
  const json = JSON.parse(fs.readFileSync(gen.templatePath('../json/dependencies.json')))

  gen.log('\nInstalling dependencies...')

  // install npm dependencies
  gen.npmInstall(json.dependencies, { save: true, skipMessage: true })
  gen.npmInstall(json.devDependencies, { 'save-dev': true, skipMessage: true })
}
