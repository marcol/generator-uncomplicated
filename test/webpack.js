const assert = require('yeoman-assert')
const path = require('path')
const helpers = require('yeoman-test')
const files = require('../generators/app/settings/webpack-files')
const targets = files.map((file) => file.target)

describe('Test --webpack', function () {
  before(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .inDir(path.join(__dirname, '.tmp'))
      .withOptions({
        'skip-install': true,
        webpack: true
      })
      .then(function () {
        return true
      })
  })

  it('checks for config file', () => {
    assert.file(targets)
  })

  it('checks if webpack is installed', () => {
    assert.jsonFileContent(path.join(__dirname, '.tmp/package.json'), {
      scripts: {
        build: 'webpack --config webpack.prod.js'
      }
    })
  })
})

module.exports = null
