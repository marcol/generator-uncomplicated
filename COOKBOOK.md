# generator-uncomplicated Cookbook

## Create new html file
A new HTML file, test.html in this case, can be added by adding the following code in the `webpack.common.js`.

```
plugins: [
  new HtmlWebpackPlugin({ template: 'source/index.html' }),
  new HtmlWebpackPlugin({
    filename: 'test.html',
    template: 'src/assets/test.html'
  }),
  new FaviconsWebpackPlugin('./source/assets/logo.svg'),
  new CleanWebpackPlugin()
]
```

You can get more information in the [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin).
