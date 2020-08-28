module.exports = [
  {
    source: '_package.json',
    target: 'package.json'
  },
  {
    source: '_LICENSE',
    target: 'LICENSE'
  },
  {
    source: '_README.md',
    target: 'README.md'
  },
  {
    source: 'dotfiles/_.eslintrc.json',
    target: '.eslintrc.json'
  },
  {
    source: 'dotfiles/_.eslintignore',
    target: '.eslintignore'
  },
  {
    source: 'dotfiles/_.gitignore',
    target: '.gitignore'
  },
  {
    source: 'dotfiles/_.remarkrc.js',
    target: '.remarkrc.js'
  },
  {
    source: 'dotfiles/_.npmrc',
    target: '.npmrc'
  },
  {
    source: 'dotfiles/_.stylelintrc.json',
    target: '.stylelintrc.json'
  },
  {
    source: 'dotfiles/_.stylelintignore',
    target: '.stylelintignore'
  }
]
