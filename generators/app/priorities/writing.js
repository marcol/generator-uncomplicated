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
    ['index.html', './source/index.html'],
    ['assets/favicon.ico', './source/assets/favicon.ico'],
    ['assets/apple-touch-icon.png', './source/assets/apple-touch-icon.png'],
    ['master.css', './source/styles/master.css'],
    ['index.js', './source/scripts/index.js'],
    ['dotfiles/.eslintrc', '.eslintrc'],
    ['dotfiles/.gitignore', '.gitignore']
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
