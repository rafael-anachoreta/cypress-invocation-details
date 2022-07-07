describe('reporter spec', () => {
  it('passes', () => {
    expect(1).to.equal(1)
  })
  xit('pending', () => {  })
  it('retries', () => {
    expect(1).to.equal(2)
  })
})
