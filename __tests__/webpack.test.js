const helpers = require('yeoman-test')
const assert = require('yeoman-assert')
const path = require('path')
const rimraf = require('rimraf')
const { ESLint } = require('eslint')

const prompts = require('../__mocks__/prompts')
const target = path.join(__dirname, '.tmp-webpack')

describe('tests installation with webpack', () => {
  const cfg = require('../generators/app/settings/webpack')

  beforeAll(async (done) => {
    process.env.TEST = true
    await helpers
      .run(path.join(__dirname, '../generators/app'))
      .inDir(target)
      .withPrompts(prompts)
      .withOptions({
        'skip-install': false,
        silent: true,
        webpack: true
      })

    done()
  }, 120000)

  afterAll(() => {
    rimraf.sync(target)
    process.env.TEST = false
  })

  test('checks for config file', () => {
    const targets = cfg.files.map((file) => file.target)
    assert.file(targets)
  })

  test('checks if webpack build script is available', () => {
    assert.jsonFileContent(path.join(target, 'package.json'), {
      scripts: cfg.package.scripts
    })
  })

  test('runs linting', async () => {
    const eslint = new ESLint({
      cwd: target,
      resolvePluginsRelativeTo: target
    })
    const results = await eslint.lintFiles(['**/*.js'])
    const { errorCount } = results.reduce((acc, cur) => {
      return { errorCount: acc.errorCount + cur.errorCount }
    })
    expect(errorCount).toBe(0)
  })
})
