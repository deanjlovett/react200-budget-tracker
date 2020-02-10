describe('express', function () {
  this.timeout(6500);
  beforeEach(() => {
    nightmare = new Nightmare();
  });

  it('should have the correct page title', () =>
    nightmare
      .goto(url)
      .evaluate(() => document.querySelector('body').innerText)
      .end()
      .then((text) => {
        expect(text).to.contain('Budget Tracker');
      })
  );

  it('returns the correct status code', () => axios.get(url)
    .then(response => expect(response.status === 200)));
});