const helpers = require('yeoman-test')
const assert = require('yeoman-assert')
const path = require('path')
const rimraf = require('rimraf')
const { ESLint } = require('eslint')

const prompts = require('../__mocks__/prompts')
const target = path.join(__dirname, '.tmp')

describe('tests default instalation', () => {
  const cfg = require('../generators/app/settings/config')

  beforeAll(async () => {
    process.env.TEST = true
    await helpers
      .run(path.join(__dirname, '../generators/app'))
      .inDir(target)
      .withPrompts(prompts)
      .withOptions({
        'skip-install': false,
        silent: true
      })
  }, 120000)

  afterAll(() => {
    rimraf.sync(target)
    process.env.TEST = false
  })

  test('checks if files were created', () => {
    const targets = cfg.files.map((file) => file.target)
    assert.file(targets)
  })

  test('checks if inserted information is correct', () => {
    assert.jsonFileContent('package.json', {
      name: prompts.project,
      author: {
        name: prompts.name,
        email: prompts.email
      }
    })
  })

  test('checks installed dependencies', () => {
    const pkg = require(path.join(target, 'package.json'))
    Object.keys(cfg.package.dependencies).forEach((key) => {
      assert.textEqual(pkg.dependencies[key], cfg.package.dependencies[key])
    })
    Object.keys(cfg.package.devDependencies).forEach((key) => {
      assert.textEqual(pkg.devDependencies[key], cfg.package.devDependencies[key])
    })
  })

  test('checks scripts', () => {
    const pkg = require(path.join(target, 'package.json'))
    Object.keys(cfg.package.scripts).forEach((key) => {
      assert.textEqual(pkg.scripts[key], cfg.package.scripts[key])
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
