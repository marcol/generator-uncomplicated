const path = require('path')

module.exports = {
  entry: './source/scripts/index.js',
  output: {
    filename: 'scripts.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}
