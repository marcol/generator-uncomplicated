module.exports = function (gen) {
  const files = require('../config/files.js')
  const data = {
    project: gen.answers.project,
    name: gen.answers.name,
    email: gen.answers.email,
    year: (new Date().getFullYear())
  }

  gen.log('\nCreating the necessary files...')

  // copying files
  files.forEach((cur) => {
    gen.fs.copyTpl(gen.templatePath(cur.source), gen.destinationPath(cur.target), data)
  })
}
