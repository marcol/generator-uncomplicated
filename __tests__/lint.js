const { ESLint } = require('eslint')
const path = require('path')
const target = '.tmp'

describe('linting files', () => {
  test('runs linting', async () => {
    const eslint = new ESLint({
      cwd: path.join(__dirname, target),
      resolvePluginsRelativeTo: path.join(__dirname, target)
    })
    const results = await eslint.lintFiles(['**/*.js'])
    const { errorCount } = results.reduce((acc, cur) => {
      return { errorCount: acc.errorCount + cur.errorCount }
    })
    expect(errorCount).toBe(0)
  })
})
