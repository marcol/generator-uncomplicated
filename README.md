
[![NPM Downloads](https://img.shields.io/npm/dt/generator-uncomplicated?logo=npm&style=flat-square)](https://www.npmjs.com/package/generator-uncomplicated)
[![NPM Version](https://img.shields.io/npm/v/generator-uncomplicated?logo=npm&style=flat-square)](https://www.npmjs.com/package/generator-uncomplicated)
[![NPM Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/generator-uncomplicated?logo=snyk&style=flat-square)](https://snyk.io/vuln/search?q=generator-uncomplicated&type=npm)
[![Dependencies](https://img.shields.io/librariesio/release/npm/generator-uncomplicated?style=flat-square)](https://libraries.io/npm/generator-uncomplicated)
[![Code Quality](https://img.shields.io/codacy/grade/e2f30765dfaa40b59b5c715b873aa65d?logo=codacy&style=flat-square)](https://support.codacy.com/hc/en-us/articles/207994765-What-are-the-different-Grades-and-how-are-they-calculated-)

# generator-uncomplicated
Uncomplicated Yeoman Generator to kick-off your projects.

## Install
First install Yeoman:
```javascript
npm install -g yo
```

Now install the ultimate generator:
```javascript
npm install -g generator-uncomplicated
```

## Usage
Run `yo uncomplicated` and follow the instructions.

## Scripts

### Linting JavaScript
```javascript
npm run lint:js
```

### Linting CSS
```javascript
npm run lint:css
```

### Linting
You can check the code syntax and style for JavaScript and CSS.
```javascript
npm run lint
```
You can also check individually CSS ```npm run lint:css``` or JavaScript ```npm run lint:js```

## Features
*   Base HTML file with meta and icons
*   Normalizations of CSS using [normalize.css](https://www.npmjs.com/package/normalize.css)
*   Empty CSS file included in the HTML file
*   Empty JavaScript file included in the HTML file
*   Automatic creation of package.json
*   Automatic installation of the required NPM packages
*   License (ISC)
*   JavaScript linting with [eslint](https://eslint.org/)
    *   Following [Standard](https://standardjs.com/rules.html) code style
    *   Extended linting to [json](https://github.com/Bkucera/eslint-plugin-json-format), [html](https://github.com/BenoitZugmeyer/eslint-plugin-html) and [markdown](https://github.com/eslint/eslint-plugin-markdown) files
    *   Linting of [filenames](https://github.com/selaux/eslint-plugin-filenames) according to exports
