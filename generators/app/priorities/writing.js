const chalk = require('chalk')

module.exports = function (gen) {
  let files = require('../settings/files.js')
  const data = {
    project: gen.answers.project,
    name: gen.answers.name,
    email: gen.answers.email,
    year: (new Date().getFullYear()),
    hasJest: gen.options.jest,
    hasWebpack: gen.options.webpack
  }

  gen.log(chalk.bold('\nCreating the necessary files...'))

  if (gen.options.jest) {
    files = files.concat(require('../settings/jest.js').files)
  }

  if (gen.options.webpack) {
    files = files.concat(require('../settings/webpack-files.js'))
  }

  // copying files
  files.forEach((cur) => {
    gen.fs.copyTpl(gen.templatePath(cur.source), gen.destinationPath(cur.target), data)
  })
}
