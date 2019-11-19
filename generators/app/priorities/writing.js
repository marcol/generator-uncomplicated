module.exports = function (gen) {
  const fs = require('fs')
  const files = JSON.parse(fs.readFileSync(gen.templatePath('../json/files.json')))
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
