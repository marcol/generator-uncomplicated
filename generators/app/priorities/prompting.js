const shell = require('shelljs')

module.exports = function (gen) {
    let email = 'your@email.com'
    let name = 'John Doe'

    if (shell.which('git')) {
        email = shell.exec('git config user.email', { silent: true }).replace(/\n/g, '')
        name = shell.exec('git config user.name', { silent: true }).replace(/\n/g, '') || name
    }

    return [
        {
            type: 'input',
            name: 'project',
            message: 'Your name',
            default: gen.appname
        },
        {
            type: 'input',
            name: 'name',
            message: 'Your name',
            default: name
        },
        {
            type: 'input',
            name: 'email',
            message: 'Your email',
            default: email
        }
    ]
}
