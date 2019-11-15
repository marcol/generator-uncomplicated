module.exports = function (gen) {
  gen.log('\nInstalling dependencies...')

  // install npm dependencies
  gen.npmInstall(['normalize.css'], {
    save: true
  })

  // install npm dev dependencies
  gen.npmInstall([
    'csslint',
    'eslint',
    'eslint-plugin-html',
    'eslint-plugin-markdown',
    'eslint-plugin-filenames',
    'eslint-config-standard'
  ], {
    'save-dev': true
  })
}
