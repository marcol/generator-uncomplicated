/* eslint "max-lines-per-function": ["error", 50] */

const helpers = require('yeoman-test')
const path = require('path')
const rimraf = require('rimraf')
const prompts = require('./config/prompts')

describe('Uncomplicated generator tests\n\n', function () {
  this.timeout(90000)

  before(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .inDir(path.join(__dirname, '.tmp'))
      .withPrompts(prompts)
      .withOptions({
        'skip-install': false
      })
      .then(function () {
        console.log('\n-----\n')
        return true
      })
  })

  require('./lint')
  require('./generate')

  after(() => {
    rimraf.sync(path.join(__dirname, '.tmp'))
  })
})

module.exports = null
