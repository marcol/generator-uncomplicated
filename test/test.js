describe('Test', () => {
  it('should succeed', (done) => {
    setTimeout(done, 1000)
  })

  it('should fail', () => {
    setTimeout(() => {
      throw new Error('Failed')
    }, 1000)
  })

  it('should randomly fail', () => {
    if (require('./module')) {
      throw new Error('Randomly failed')
    }
  })
})
