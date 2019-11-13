const Generator = require('yeoman-generator')

class Uncomplicated extends Generator {
    /**
     * The available priorities are (in running order):
     * 1. initializing - Your initialization methods (checking current project state, getting configs, etc)
     * 2. prompting - Where you prompt users for options (where you’d call this.prompt())
     * 3. configuring - S   aving configurations and configure the project (creating .editorconfig files and other metadata files)
     * 4. default - If the method name doesn’t match a priority, it will be pushed to this group.
     * 5. writing - Where you write the generator specific files (routes, controllers, etc)
     * 6. conflicts - Where conflicts are handled (used internally)
     * 7. install - Where installations are run (npm, bower)
     * 8. end - Called last, cleanup, say good bye, etc
     */
    /**
     * [initializing description]
     * @return {[type]} [description]
     */
    initializing () {
        require('./priorities/initializing.js')()
    }

    /**
     * prompt users for options (where you’d call this.prompt())
     * @return void
     */
    async prompting () {
        const prompts = require('./priorities/prompting.js')(this)
        this.answers = await this.prompt(prompts)
    }

    /**
     * write the generator specific files (routes, controllers, etc)
     * @return void
     */
    end () {
        require('./priorities/end.js')(this)
    }
}

module.exports = Uncomplicated
