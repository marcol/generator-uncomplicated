const helpers = require('yeoman-test')
const assert = require('yeoman-assert')
const path = require('path')
const rimraf = require('rimraf')
const { ESLint } = require('eslint')

const prompts = require('../__mocks__/prompts')
const target = path.join(__dirname, '.tmp-jest')

describe('tests installation with jest', () => {
  const cfg = require('../generators/app/settings/jest')

  beforeAll(async (done) => {
    process.env.TEST = true
    await helpers
      .run(path.join(__dirname, '../generators/app'))
      .inDir(target)
      .withPrompts(prompts)
      .withOptions({
        'skip-install': false,
        silent: true,
        jest: true
      })

    done()
  }, 120000)

  afterAll(() => {
    rimraf.sync(target)
    process.env.TEST = false
  })

  test('checks if test file', () => {
    const targets = cfg.files.map((file) => file.target)
    assert.file(targets)
  })

  test('checks if jest was added an eslint plugin', () => {
    assert.jsonFileContent(path.join(target, '.eslintrc.json'), {
      plugins: ['html', 'markdown', 'json-format', 'filenames', 'jest']
    })
  })

  test('checks if jest script is available', () => {
    const pkg = require(path.join(target, 'package.json'))

    Object.keys(cfg.package.scripts).forEach((key) => {
      assert.textEqual(pkg.scripts[key], cfg.package.scripts[key])
    })
  })

  test('checks if overrides are in package.json', () => {
    assert.jsonFileContent(path.join(target, 'package.json'), { overrides: cfg.package.overrides })
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
