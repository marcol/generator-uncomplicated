const assert = require('assert')

describe('Main context', function () {
  before(function () {})

  describe('sub context', function () {
    it('tests something', function () {
      assert('something', 'string')
    })
  })

  after(function () {})
})
