const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './source/scripts/index.js',
  plugins: [
    new CleanWebpackPlugin()
  ],
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
      }, {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: [
          'file-loader'
        ]
      }, {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }, {
        test: /\.(html)$/,
        loader: 'file-loader',
        options: {
          context: 'source',
          name: '[path][name].[ext]'
        }
      }
    ]
  }
}
