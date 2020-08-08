const assert = require('yeoman-assert')
const prompts = require('./config/prompts')
const files = require('../generators/app/settings/files')
const targets = files.map((file) => file.target)

describe('Generator deploy', function () {
  it('checks if files were created', () => {
    assert.file(targets)
  })

  it('checks if inserted information is correct', () => {
    assert.jsonFileContent('package.json', {
      name: prompts.project,
      author: prompts.name + ' <' + prompts.email + '>'
    })
  })

  it('checks installed dependencies', () => {
    assert.file('yarn.lock')
  })
})

module.exports = null
