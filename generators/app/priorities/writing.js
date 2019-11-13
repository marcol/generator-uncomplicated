module.exports = function (gen) {
    gen.log('\n\nCreating the necessary files...')
    gen.log('appname', gen.appname)

    // set package.json
    gen.fs.copyTpl(
        gen.templatePath('package.json'),
        gen.destinationPath('package.json'), {
            project: gen.answers.project,
            name: gen.answers.name,
            email: gen.answers.email
        }
    )

    // add LICENSE
    gen.fs.copyTpl(
        gen.templatePath('LICENSE'),
        gen.destinationPath('LICENSE'), {
            year: (new Date().getFullYear()),
            name: gen.answers.name,
            email: gen.answers.email
        }
    )
}
