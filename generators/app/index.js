const Generator = require('yeoman-generator')
const { info } = require('sugar-chalk')

class Uncomplicated extends Generator {
  constructor (args, opts) {
    super(args, { ...opts, unique: 'namespace' })

    // set options
    this.option('jest')
    this.option('webpack')
  }

  /**
   * Initialization methods (checking current project state, getting
   * configs, etc)
   * @return void
   */
  initializing () {
    require('./priorities/initializing')(this)
  }

  /**
   * prompt users for options (where you’d call this.prompt())
   * @return void
   */
  async prompting () {
    const prompts = require('./priorities/prompting')(this)
    info('We need some input from you to setup your project')
    this.answers = await this.prompt(prompts)
  }

  /**
   * Qrite the generator specific files (routes, controllers, etc)
   * @return void
   */
  writing () {
    require('./priorities/writing')(this)
  }

  /**
   *  Called last, cleanup, say good bye, etc
   * @return void
   */
  end () {
    require('./priorities/end')(this)
  }
}

module.exports = Uncomplicated
