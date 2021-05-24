module.exports = {
  files: [
    { source: '_webpack.common.js', target: 'webpack.common.js' },
    { source: '_webpack.prod.js', target: 'webpack.prod.js' },
    { source: '_webpack.dev.js', target: 'webpack.dev.js' },
    { source: '_webpack-index.html', target: './source/index.html' },
    { source: 'scripts/_webpack-index.js', target: './source/scripts/index.js' }
  ],
  package: {
    scripts: {
      start: 'webpack-dev-server --open --config webpack.dev.js',
      build: 'webpack --config webpack.prod.js'
    },
    devDependencies: {
      webpack: '^5.37.1',
      'webpack-cli': '^4.7.0',
      'css-loader': '^5.2.5',
      'file-loader': '^6.2.0',
      'html-webpack-plugin': '^5.3.1',
      'clean-webpack-plugin': '^3.0.0',
      'webpack-dev-server': '^3.11.2',
      'webpack-merge': '^5.7.3',
      favicons: '^6.2.0',
      'favicons-webpack-plugin': '^5.0.2',
      'extract-css-chunks-webpack-plugin': '^4.9.0',
      'optimize-css-assets-webpack-plugin': '^6.0.0',
      'terser-webpack-plugin': '^5.1.2',
      'babel-loader': '^8.2.2',
      '@babel/core': '^7.14.3',
      '@babel/preset-env': '^7.2.0',
      'eslint-webpack-plugin': ''
    }
  }
}
