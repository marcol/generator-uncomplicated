[![NPM Downloads](https://img.shields.io/npm/dt/generator-uncomplicated?logo=npm&style=flat-square)](https://www.npmjs.com/package/generator-uncomplicated)
[![NPM Version](https://img.shields.io/npm/v/generator-uncomplicated?logo=npm&style=flat-square)](https://www.npmjs.com/package/generator-uncomplicated)
[![NPM Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/generator-uncomplicated?logo=snyk&style=flat-square)](https://snyk.io/vuln/search?q=generator-uncomplicated&type=npm)
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

## Uage
### Developing

#### Local server
Launch the webpack server:
```
npm run start
// or you can use
npm run serve
```

#### Linting
You can check the code syntax and style for JavaScript and CSS.
```
npm run lint
```
You can also check individually CSS `npm run lint:css`, JavaScript `npm run lint:js` or Markdown `npm run lint:md`.

#### Testing
Currently the test script only checks code validation. You can test your project by running:
```
npm run test
```

### Deploying
You can create a build to deploy by running the following command:
```
npm run build
```
All the needed assets will be in the public folder. Please take in mind that this folder is set to be ignored in the .gitignore config file.

## Cookbook
You can check the [cookbook](COOKBOOK.md) to expand the generated output functionality.

## Features
*   Base HTML file with meta and icons
*   Normalisation of CSS using [normalize.css](https://www.npmjs.com/package/normalize.css)
*   Empty CSS file included in the HTML file
*   Empty JavaScript file included in the HTML file
*   [Babel](https://babeljs.io/) support with linting
*   Automatic creation of package.json
*   Automatic installation of the required NPM packages
*   License (ISC)
*   JavaScript linting with [eslint](https://eslint.org/)
    *   Following [Standard](https://standardjs.com/rules.html) code style
    *   Extended linting to [json](https://github.com/Bkucera/eslint-plugin-json-format), [html](https://github.com/BenoitZugmeyer/eslint-plugin-html) and [markdown](https://github.com/eslint/eslint-plugin-markdown) files
    *   Linting of [filenames](https://github.com/selaux/eslint-plugin-filenames) according to exports
*   Markdown linting with [remarklint](https://github.com/remarkjs/remark-lint), using the [recommended preset](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-preset-lint-recommended).
*   CSS linting with [stylelint](https://github.com/stylelint/stylelint) following [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)
*   [Webpack](https://webpack.js.org/) support
    *   Production and Development environments
    *   Hot reload
    *   CSS and JavaScript bundling
*   Automatic generation of logos and icons from logo.svg
