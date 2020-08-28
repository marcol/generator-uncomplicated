const assert = require('yeoman-assert')
const prompts = require('../__mocks__/prompts')

describe('tests default instalation', () => {
  test('checks if files were created', () => {
    const files = require('../generators/app/settings/files')
    const targets = files.map((file) => file.target)
    assert.file(targets)
  })

  test('checks if inserted information is correct', () => {
    assert.jsonFileContent('package.json', {
      name: prompts.project,
      author: prompts.name + ' <' + prompts.email + '>'
    })
  })

  test('checks installed dependencies', () => {
    assert.file('yarn.lock')
  })
})
