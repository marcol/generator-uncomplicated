const assert = require('yeoman-assert')
const path = require('path')

describe('tests installation with webpack', () => {
  test('checks for config file', () => {
    const files = require('../generators/app/settings/webpack-files')
    const targets = files.map((file) => file.target)
    assert.file(targets)
  })

  test('checks if webpack build script is available', () => {
    assert.jsonFileContent(path.join(__dirname, '.tmp/package.json'), {
      scripts: {
        start: 'webpack-dev-server --open --config webpack.dev.js',
        build: 'webpack --config webpack.prod.js'
      }
    })
  })
})
