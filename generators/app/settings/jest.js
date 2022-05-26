module.exports = {
  files: [
    {
      source: 'tests/index.js',
      target: './__tests__/index.test.js'
    }
  ],
  package: {
    devDependencies: {
      jest: '^28.1.0',
      'eslint-plugin-jest': '^26.2.2'
    },
    scripts: {
      test: 'jest'
    },
    jest: {
      verbose: true
    },
    overrides: [
      {
        files: [
          '**/{__tests__,tests}/*.{j,t}s?(x)',
          '**/{__tests__,tests}/**/*.{j,t}s?(x)'
        ]
      }
    ]
  }
}
