const sugar = require('sugar-chalk')
const extend = require('deep-extend')

module.exports = function (gen) {
  const data = {
    project: gen.answers.project,
    name: gen.answers.name,
    email: gen.answers.email,
    year: (new Date().getFullYear()),
    hasJest: gen.options.jest,
    hasWebpack: gen.options.webpack
  }

  const cfg = {
    package: {
      name: gen.answers.project,
      author: {
        name: gen.answers.name,
        email: gen.answers.email
      }
    }
  }

  sugar.info('Creating the necessary files...')

  // get base cofiguration
  extend(cfg, require('../settings/config.js'))

  if (gen.options.jest) {
    extend(cfg, require('../settings/jest.js'))
  }

  if (gen.options.webpack) {
    extend(cfg, require('../settings/webpack.js'))
  }

  // copying files
  cfg.files.forEach((cur) => {
    gen.fs.copyTpl(gen.templatePath(cur.source), gen.destinationPath(cur.target), data)
  })

  // write package.json
  gen.fs.writeJSON(gen.destinationPath('package.json'), cfg.package)
}
