/* eslint-env mocha, chai */

/* global chai, maxPrimeSum */

describe('maxPrimeSum', function () {
  it('maxPrimeSum(10000) should take less than 20ms', function () {
    chai.expect(maxPrimeSum(10000)).to.eql([9521, 65]);
    this.slow(0);
    this.timeout(200);
  });
  it('maxPrimeSum(100000) should take less than 200ms', function () {
    this.slow(0);
    chai.expect(maxPrimeSum(100000)).to.eql([92951, 183]);
    this.timeout(2000);
  });
});
