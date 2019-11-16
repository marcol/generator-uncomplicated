module.exports = function (gen) {
  const data = {
    project: gen.answers.project,
    name: gen.answers.name,
    email: gen.answers.email,
    year: (new Date().getFullYear())
  }

  const files = [
    ['package.json', 'package.json'],
    ['LICENSE', 'LICENSE'],
    ['README.md', 'README.md'],
    ['dotfiles/.eslintrc.json', '.eslintrc.json'],
    ['dotfiles/.eslintignore', '.eslintignore'],
    ['dotfiles/.gitignore', '.gitignore'],
    ['dotfiles/.remarkrc.js', '.remarkrc.js'],
    ['dotfiles/.stylelintrc.json', '.stylelintrc.json'],
    ['webpack.common.js', 'webpack.common.js'],
    ['webpack.prod.js', 'webpack.prod.js'],
    ['webpack.dev.js', 'webpack.dev.js'],
    ['index.html', './source/index.html'],
    ['assets/icon.svg', './source/assets/icon.svg'],
    ['styles/master.css', './source/styles/master.css'],
    ['scripts/index.js', './source/scripts/index.js']
  ]

  gen.log('\nCreating the necessary files...')
  gen.log('appname', gen.appname)

  // copying files
  files.forEach((cur) => {
    gen.fs.copyTpl(
      gen.templatePath(cur[0]),
      gen.destinationPath(cur[1]),
      data
    )
  })
}
