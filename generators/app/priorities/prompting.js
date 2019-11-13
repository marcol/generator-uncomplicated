module.exports = function (gen) {
    return [
        {
            type: 'input',
            name: 'name', // project name
            message: 'Your project name',
            default: gen.appname
        }
    ]
}
