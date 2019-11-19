const assert = require('yeoman-assert')
const path = require('path')
const CLIEngine = require('eslint').CLIEngine
const cli = new CLIEngine()

describe('Linting', () => {
  it('Lints JavaScript files', () => {
    const report = cli.executeOnFiles([path.join(__dirname, '../generators/')])
    assert.equal(0, report.errorCount + report.warningCount)
  })
})

module.exports = null
