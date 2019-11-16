const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
  entry: './source/scripts/index.js',
  plugins: [
    new HtmlWebpackPlugin({ template: 'source/index.html' }),
    new CleanWebpackPlugin(),
    new FaviconsWebpackPlugin('./source/assets/logo.svg')
  ],
  output: {
    filename: 'scripts.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
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
        test: /\.jsx?$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          emitWarning: true
        }
      }
    ]
  }
}
