module.exports = [
  {
    source: 'webpack.common.js',
    target: 'webpack.common.js'
  },
  {
    source: 'webpack.prod.js',
    target: 'webpack.prod.js'
  },
  {
    source: 'webpack.dev.js',
    target: 'webpack.dev.js'
  },
  {
    source: 'webpack-index.html',
    target: './source/index.html'
  },
  {
    source: 'scripts/webpack-index.js',
    target: './source/scripts/index.js'
  }
]
