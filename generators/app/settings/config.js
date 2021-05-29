module.exports = {
  files: [
    { source: '_LICENSE', target: 'LICENSE' },
    { source: '_README.md', target: 'README.md' },
    { source: 'dotfiles/_.eslintrc.json', target: '.eslintrc.json' },
    { source: 'dotfiles/_.eslintignore', target: '.eslintignore' },
    { source: 'dotfiles/_.gitignore', target: '.gitignore' },
    { source: 'dotfiles/_.remarkrc.js', target: '.remarkrc.js' },
    { source: 'dotfiles/_.npmrc', target: '.npmrc' },
    { source: 'dotfiles/_.stylelintrc.json', target: '.stylelintrc.json' },
    { source: 'dotfiles/_.stylelintignore', target: '.stylelintignore' },
    { source: '_index.html', target: './source/index.html' },
    { source: 'assets/logo.svg', target: './source/assets/logo.svg' },
    { source: 'styles/_master.css', target: './source/styles/master.css' },
    { source: 'scripts/_index.js', target: './source/scripts/index.js' }
  ],
  package: {
    version: '0.1.0',
    description: '',
    keywords: [],
    homepage: '',
    bugs: '',
    license: 'ISC',
    dependencies: {
      'normalize.css': ''
    },
    devDependencies: {
      eslint: '^7.27.0',
      '@babel/eslint-parser': '^7.14.3',
      'eslint-plugin-html': '^6.1.2',
      'eslint-plugin-markdown': '^2.2.0',
      'eslint-plugin-filenames': '^1.3.2',
      'eslint-plugin-json-format': '^2.0.1',
      'eslint-plugin-import': '^2.23.4',
      'eslint-plugin-node': '^11.1.0',
      'eslint-plugin-promise': '^4.2.1',
      'eslint-config-standard': '^16.0.2',
      'remark-cli': '^9.0.0',
      'remark-lint': '^8.0.0',
      'remark-preset-lint-recommended': '^5.0.0',
      stylelint: '^13.13.1',
      'stylelint-config-standard': '^22.0.0',
      'browser-sync': '^2.26.14'
    },
    scripts: {
      'lint:css': 'stylelint **/*.html **/*.css',
      'lint:js': 'eslint .',
      'lint:md': 'remark .',
      serve: 'browser-sync start --server ./source --port 8080 --watch ./source --open'
    },
    resolutions: {}
  }
}
