const helpers = require('yeoman-test')
const path = require('path')
const rimraf = require('rimraf')
const prompts = require('./config/prompts')

describe('Uncomplicated generator tests\n\n', function () {
  this.timeout(120000)

  before(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .inDir(path.join(__dirname, '.tmp'))
      .withPrompts(prompts)
      .withOptions({
        'skip-install': false,
        webpack: true,
        mocha: true
      })
      .then(function () {
        console.log('\n-----\n')
        return true
      })
  })

  require('./generate')
  require('./mocha')
  require('./webpack')

  after(() => {
    rimraf.sync(path.join(__dirname, '.tmp'))
  })
})

module.exports = null
