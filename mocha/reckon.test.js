'use strict';
var reckon =  require('./../test/src/reckon');
var expect = require('chai').expect;

describe('Reckon', function() {
  describe('#reckon', function() {
    it('return add result', function() {
      expect(reckon.add(1, 2)).to.be.equal(3);
    });
    it('return divide result', function() {
      expect(reckon.divide(2, 2)).equal(1);
    });
  });
});
