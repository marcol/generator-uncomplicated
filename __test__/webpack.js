const assert = require('yeoman-assert')
const path = require('path')
const files = require('../generators/app/settings/webpack-files')
const targets = files.map((file) => file.target)

describe('Test --webpack', function () {
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
