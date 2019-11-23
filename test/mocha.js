const assert = require('yeoman-assert')
const files = require('../generators/app/settings/files')
const prompts = require('./config/prompts')
const targets = files.map((file) => file.target)

describe('Test --mocha', function () {
  it('checks if test file', () => {
    assert.file(targets)
  })

  it('checks if mocha is installed', () => {
    assert.jsonFileContent('package.json', {
      name: prompts.project
    })
  })
})

module.exports = null
