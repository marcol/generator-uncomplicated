module.exports = function (gen) {
  const dependencies = [
    'normalize.css'
  ]

  const devDependencies = [
    'webpack',
    'webpack-cli',
    'style-loader',
    'css-loader',
    'file-loader',
    'html-webpack-plugin',
    'clean-webpack-plugin',
    'webpack-dev-server',
    'webpack-merge',
    'favicons-webpack-plugin',
    'eslint-loader',
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
  ]

  gen.log('\nInstalling dependencies...')

  // install npm dependencies
  gen.npmInstall(dependencies, { save: true, skipMessage: true })
  gen.npmInstall(devDependencies, { 'save-dev': true, skipMessage: true })
}
