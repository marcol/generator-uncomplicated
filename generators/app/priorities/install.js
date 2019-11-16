module.exports = function (gen) {
  gen.log('\nInstalling dependencies...')

  // install npm dependencies
  gen.npmInstall(['normalize.css'], {
    save: true
  })

  // install npm dev dependencies
  gen.npmInstall([
    'webpack',
    'webpack-cli',
    'eslint',
    'eslint-plugin-html',
    'eslint-plugin-markdown',
    'eslint-plugin-filenames',
    'eslint-plugin-json-format',
    'eslint-plugin-import',
    'eslint-plugin-node',
    'eslint-plugin-promise',
    'eslint-plugin-standard',
    'eslint-config-standard',
    'remark-cli',
    'remark-lint',
    'remark-preset-lint-recommended',
    'stylelint',
    'stylelint-config-standard'
  ], {
    'save-dev': true
  })
}
