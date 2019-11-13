module.exports = function (gen) {
    gen.log('\nCreating the necessary files...')
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

    // add index.html
    gen.fs.copyTpl(
        gen.templatePath('index.html'),
        gen.destinationPath('./source/index.html'), {
            project: gen.answers.project,
            name: gen.answers.name,
            email: gen.answers.email
        }
    )

    // add favicon
    gen.fs.copyTpl(
        gen.templatePath('assets/favicon.ico'),
        gen.destinationPath('./source/assets/favicon.ico'), {
            project: gen.answers.project
        }
    )

    // add mobile tile
    gen.fs.copyTpl(
        gen.templatePath('assets/apple-touch-icon.png'),
        gen.destinationPath('./source/assets/apple-touch-icon.png'), {
            project: gen.answers.project
        }
    )
}
