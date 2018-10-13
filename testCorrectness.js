/* eslint-env mocha, chai */

/* global chai, primeGen */

describe('primeGen', function () {
  it('primeGen(10) = [2, 3, 5, 7]', function () {
    chai.expect(primeGen(10)).to.eql([2, 3, 5, 7]);
  });
  it('primeGen(20) = [2, 3, 5, 7, 11, 13, 17, 19]', function () {
    chai.expect(primeGen(20)).to.eql([2, 3, 5, 7, 11, 13, 17, 19]);
  });
});
