[![NPM Downloads](https://img.shields.io/npm/dt/generator-uncomplicated?logo=npm&style=flat-square)](https://www.npmjs.com/package/generator-uncomplicated)
[![NPM Version](https://img.shields.io/npm/v/generator-uncomplicated?logo=npm&style=flat-square)](https://www.npmjs.com/package/generator-uncomplicated)
[![Test](https://img.shields.io/github/workflow/status/marcol/generator-uncomplicated/Node.js%20CI?style=flat-square)](https://github.com/marcol/generator-uncomplicated/actions/runs/100793782)
[![Dependencies](https://img.shields.io/librariesio/release/npm/generator-uncomplicated?style=flat-square)](https://libraries.io/npm/generator-uncomplicated)
[![Code Quality](https://img.shields.io/codacy/grade/e2f30765dfaa40b59b5c715b873aa65d?logo=codacy&style=flat-square)](https://support.codacy.com/hc/en-us/articles/207994765-What-are-the-different-Grades-and-how-are-they-calculated-)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg?logo=javascript&style=flat-square)](https://standardjs.com)

# generator-uncomplicated
Uncomplicated Yeoman Generator to kick-off your projects.

## Install
First install Yeoman:
```
npm install -g yo
```

Now install the ultimate generator:
```
npm install -g generator-uncomplicated
```

Finally, run `yo uncomplicated` and follow the instructions.

You can also use `yo uncomplicated --mocha` to add Mocha support or `yo uncomplicated --webpack` to setup the project with webpack.

## Generator

### Local server
Launch the static dev server:
```
npm run serve
```

### Linting
You can check the code syntax and style for JavaScript and CSS.
```
npm run lint
```
You can also check individually CSS `npm run lint:css`, JavaScript `npm run lint:js` or Markdown `npm run lint:md`.

### Features
*   Base HTML file with meta
*   Normalisation of CSS using [normalize.css](https://www.npmjs.com/package/normalize.css)
*   Empty CSS file included in the HTML file
*   Empty JavaScript file included in the HTML file
*   Automatic creation of package.json
*   Automatic installation of the required NPM packages
*   License (ISC)
*   Config files (dotfiles):
    *   Eslint
    *   Git
    *   NPM
    *   Remark (Markdown)
    *   Stylelint (CSS)
*   JavaScript linting with [eslint](https://eslint.org/)
    *   Following [Standard](https://standardjs.com/rules.html) code style
    *   Extended linting to [json](https://github.com/Bkucera/eslint-plugin-json-format), [html](https://github.com/BenoitZugmeyer/eslint-plugin-html) and [markdown](https://github.com/eslint/eslint-plugin-markdown) files
    *   Linting of [filenames](https://github.com/selaux/eslint-plugin-filenames) according to exports
*   Markdown linting with [remarklint](https://github.com/remarkjs/remark-lint), using the [recommended preset](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-preset-lint-recommended).
*   CSS linting with [stylelint](https://github.com/stylelint/stylelint) following [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)

## Options
### Mocha
Installing the generator with [Mocha](https://mochajs.org/):
```
yo uncomplicated --mocha
```

#### Run tests
```
npm run test
```

#### Developing
You can add your tests in the `test` folder. The `test/index.js` is the entry file.

#### Additional features
*   Index.js with sample tests.
*   Eslint support to mocha.

### Webpack
Installing the generator with [Webpack](https://webpack.js.org/):
```
yo uncomplicated --webpack
```

#### Launching dev server
Webpack provides a dev server with hot reload:
```
npm run serve
```

#### Creating a build
You can create a build to deploy by running the following command:
```
npm run buid
```

#### Additional features
*   Base HTML file with meta and icons
*   [Babel](https://babeljs.io/) support with linting
*   Automatic creation of package.json
*   JavaScript linting with [eslint](https://eslint.org/)
*   [Webpack](https://webpack.js.org/) support
    *   Production and Development environments
    *   Hot reload
    *   CSS and JavaScript bundling
*   Automatic generation of logos and icons from logo.svg

#### Cookbook
##### Create new html file
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
