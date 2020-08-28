const helpers = require('yeoman-test')
const assert = require('yeoman-assert')
const path = require('path')
const rimraf = require('rimraf')
const prompts = require('../__mocks__/prompts')

describe('Uncomplicated generator tests', function () {
  beforeAll(async (done) => {
    process.env.TEST = true
    await helpers.run(path.join(__dirname, '../generators/app'))
      .inDir(path.join(__dirname, '.tmp'))
      .withPrompts(prompts)
      .withOptions({
        'skip-install': false,
        silent: true,
        webpack: true,
        jest: true
      })
    done()
  }, 120000)

  afterAll(() => {
    rimraf.sync(path.join(__dirname, '.tmp'))
  })

  it('checks if files were created', () => {
    const files = require('../generators/app/settings/files')
    const targets = files.map((file) => file.target)
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

  it('checks for config file', () => {
    const files = require('../generators/app/settings/webpack-files')
    const targets = files.map((file) => file.target)
    assert.file(targets)
  })

  it('checks if webpack build script is available', () => {
    assert.jsonFileContent(path.join(__dirname, '.tmp/package.json'), {
      scripts: {
        start: 'webpack-dev-server --open --config webpack.dev.js',
        build: 'webpack --config webpack.prod.js'
      }
    })
  })

  it('checks if test file', () => {
    const files = require('../generators/app/settings/jest').files
    const targets = files.map((file) => file.target)
    assert.file(targets)
  })

  it('checks if jest script is available', () => {
    assert.jsonFileContent(path.join(__dirname, '.tmp/package.json'), {
      scripts: {
        test: 'jest'
      }
    })
  })
})

module.exports = null
