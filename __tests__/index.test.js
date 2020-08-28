const helpers = require('yeoman-test')
const path = require('path')
const rimraf = require('rimraf')
const prompts = require('../__mocks__/prompts')
const target = '.tmp'

beforeAll(async (done) => {
  process.env.TEST = true

  await helpers.run(path.join(__dirname, '../generators/app'))
    .inDir(path.join(__dirname, target))
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
  rimraf.sync(path.join(__dirname, target))
})

require('./default')
require('./webpack')
require('./jest')
require('./lint')
