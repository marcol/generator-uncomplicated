const Generator = require('yeoman-generator')
const chalk = require('chalk')

class Uncomplicated extends Generator {
  /**
   * Initialization methods (checking current project state, getting
   * configs, etc)
   * @return void
   */
  initializing () {
    require('./priorities/initializing.js')(this)
  }

  /**
   * prompt users for options (where you’d call this.prompt())
   * @return void
   */
  async prompting () {
    const prompts = require('./priorities/prompting.js')(this)
    this.log(chalk.bold('\nWe need some input from you to setup your project'))
    this.answers = await this.prompt(prompts)
  }

  /**
   * Saving configurations and configure the project (creating .editorconfig
   * files and other metadata files)
   * @return void
   */
  configuring () {}

  /**
   * Qrite the generator specific files (routes, controllers, etc)
   * @return void
   */
  writing () {
    require('./priorities/writing.js')(this)
  }

  /**
   * Handling conflicts (used internally)
   * @return void
   */
  conflicts () {}

  /**
   * Install (npm...)
   * @return void
   */
  install () {
    require('./priorities/install.js')(this)
  }

  /**
   *  Called last, cleanup, say good bye, etc
   * @return void
   */
  end () {
    require('./priorities/end.js')(this)
  }
}

module.exports = Uncomplicated
