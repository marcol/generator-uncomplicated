const assert = require('yeoman-assert')
const path = require('path')

describe('tests installation with jest', () => {
  test('checks if test file', () => {
    const files = require('../generators/app/settings/jest').files
    const targets = files.map((file) => file.target)
    assert.file(targets)
  })

  test('checks if jest was added an eslint plugin', () => {
    assert.jsonFileContent(path.join(__dirname, '.tmp/.eslintrc.json'), {
      plugins: ['html', 'markdown', 'json-format', 'filenames', 'jest']
    })
  })

  test('checks if jest script is available', () => {
    assert.jsonFileContent(path.join(__dirname, '.tmp/package.json'), {
      scripts: {
        test: 'jest'
      },
      overrides: [{
        files: [
          '**/__tests__/*?(.test|.spec).{j,t}s?(x)',
          '**/tests/*?(.test|.spec).{j,t}s?(x)'
        ],
        env: {
          'jest/globals': true
        }
      }]
    })
  })
})
