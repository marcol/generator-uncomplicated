const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    /**
     * initialization methods: checking current project state, getting
     * configs, etc)
     * @return void
     */
    initializing () {
        console.log('Welcome to Uncomplicated, a simple generator to start your projects!\n')
        console.log('We need some input from you to setup your project')
    }

    /**
     * prompt users for options (where you’d call this.prompt())
     * @return {Promise} Prompt response
     */
    async prompting () {
        this.answers = await this.prompt([
            {
                type: 'input',
                name: 'name', // project name
                message: 'Your project name',
                default: this.appname
            }
        ])
    }

    /**
     * write the generator specific files (routes, controllers, etc)
     * @return void
     */
    writing () {
        this.log('\n>>> Summary')
        this.log('Project name: ', this.answers.name)
    }

    // configuring - Saving configurations and configure the project (creating .editorconfig files and other metadata files)
    // default - If the method name doesn’t match a priority, it will be pushed to this group.
    // conflicts - Where conflicts are handled (used internally)
    // install - Where installations are run (npm, bower)
    // end - Called last, cleanup, say good bye, etc
}
