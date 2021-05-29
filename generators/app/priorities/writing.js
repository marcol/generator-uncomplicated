const sugar = require('sugar-chalk')
const extend = require('deep-extend')

function expand (module, cfg) {
  const moduleConfig = require('../settings/' + module)
  extend(cfg.package, moduleConfig.package)
  cfg.files = cfg.files ? cfg.files.concat(moduleConfig.files) : moduleConfig.files
}

module.exports = function (gen) {
  const data = {
    project: gen.answers.project,
    name: gen.answers.name,
    email: gen.answers.email,
    year: (new Date().getFullYear()),
    hasJest: gen.options.jest,
    hasWebpack: gen.options.webpack
  }

  const config = {
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
  expand('config', config)

  if (gen.options.jest) {
    expand('jest', config)
  }

  if (gen.options.webpack) {
    expand('webpack', config)
  }

  // copying files
  config.files.forEach((cur) => {
    gen.fs.copyTpl(gen.templatePath(cur.source), gen.destinationPath(cur.target), data)
  })

  // write package.json
  gen.fs.writeJSON(gen.destinationPath('package.json'), config.package)
}
