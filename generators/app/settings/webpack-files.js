module.exports = [
  {
    source: '_webpack.common.js',
    target: 'webpack.common.js'
  },
  {
    source: '_webpack.prod.js',
    target: 'webpack.prod.js'
  },
  {
    source: '_webpack.dev.js',
    target: 'webpack.dev.js'
  },
  {
    source: '_webpack-index.html',
    target: './source/index.html'
  },
  {
    source: 'scripts/_webpack-index.js',
    target: './source/scripts/index.js'
  }
]
