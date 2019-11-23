const assert = require('yeoman-assert')
const path = require('path')
const target = 'test/index.js'

describe('Test --mocha', function () {
  it('checks if test file', () => {
    assert.file(target)
  })

  it('checks if webpack is installed', () => {
    assert.jsonFileContent(path.join(__dirname, '.tmp/package.json'), {
      scripts: {
        test: 'mocha \'test/index.js\''
      }
    })
  })
})

module.exports = null
