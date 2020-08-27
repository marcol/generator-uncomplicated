const helpers = require('yeoman-test')
const path = require('path')
const rimraf = require('rimraf')
const prompts = require('../__mocks__/prompts')

describe('Uncomplicated generator tests\n\n', function () {

  beforeAll(() => {
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
  }, 120000)

  require('./generate')
  require('./mocha')
  require('./webpack')

  afterAll(() => {
    rimraf.sync(path.join(__dirname, '.tmp'))
  })
})

module.exports = null
