module.exports = {
  files: [
    { source: 'tests/index.js', target: './__tests__/index.test.js' }
  ],
  package: {
    devDependencies: {
      jest: '^27.0.0-next.11',
      'eslint-plugin-jest': '^24.3.6'
    },
    scripts: {
      test: 'jest'
    },
    overrides: [
      {
        files: [
          '**/{__tests__,tests}/*.{j,t}s?(x)',
          '**/{__tests__,tests}/**/*.{j,t}s?(x)'
        ],
        env: {
          'jest/globals': true
        }
      }
    ]
  }
}
