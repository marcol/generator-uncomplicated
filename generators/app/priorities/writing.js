/* eslint "max-lines-per-function": ["error", 25] */
const chalk = require('chalk')

module.exports = function (gen) {
  let files = require('../settings/files.js')
  const data = {
    project: gen.answers.project,
    name: gen.answers.name,
    email: gen.answers.email,
    year: (new Date().getFullYear()),
    hasMocha: gen.options.mocha
  }

  gen.log(chalk.bold('\nCreating the necessary files...'))

  if (gen.options.mocha) {
    files = files.concat(require('../settings/mocha-files.js'))
  }

  // copying files
  files.forEach((cur) => {
    gen.fs.copyTpl(gen.templatePath(cur.source), gen.destinationPath(cur.target), data)
  })
}
