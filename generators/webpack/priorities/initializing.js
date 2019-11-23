const chalk = require('chalk')

/**
 * initialization methods: checking current project state, getting
 * configs, etc)
 * @return void
 */
module.exports = function (gen) {
  gen.log(chalk.bold.blue('\nWelcome to Uncomplicated, a simple generator to start your web projects!'))
}
