/* eslint "max-lines-per-function": ["error", 50] */

const helpers = require('yeoman-test')
const assert = require('yeoman-assert')
const path = require('path')
const rimraf = require('rimraf')
const fs = require('fs')
const json = JSON.parse(fs.readFileSync(path.join(__dirname, '../generators/app/json/files.json')))
const files = json.map((cur) => cur.target)

const prompts = {
  project: 'test project',
  name: 'Jane Doe',
  email: 'jane@test.org'
}

describe('Generator deploy', function () {
  this.timeout(90000)

  before(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .inDir(path.join(__dirname, '.tmp'))
      .withPrompts(prompts)
      .withOptions({
        'skip-install': false,
        'skip-cache': false
      })
      .then(function () {
        return true
      })
  })

  it('checks if files were created', () => {
    assert.file(files)
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

  after(() => {
    rimraf.sync(path.join(__dirname, '.tmp'))
  })
})

module.exports = null
