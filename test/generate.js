const assert = require('yeoman-assert')
const files = require('../generators/app/config/files.js')
const prompts = require('./config/prompts.js')
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
    assert.file('package-lock.json')
  })

  it('Test dev environment', () => {})
  it('Test if dependencies are up-to-date', () => {})
  it('Test build', () => {})
})

module.exports = null
