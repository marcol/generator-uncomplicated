module.exports = function (gen) {
    gen.log('\nInstalling dependencies...')

    // install npm dependencies
    gen.npmInstall(['normalize.css'], {
        save: true
    })
}
