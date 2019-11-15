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
    'eslint-plugin-json-format',
    'eslint-plugin-import',
    'eslint-plugin-node',
    'eslint-plugin-promise',
    'eslint-plugin-standard',
    'eslint-config-standard'
  ], {
    'save-dev': true
  })
}
