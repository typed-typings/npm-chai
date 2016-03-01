/// <reference path="../bundle.d.ts" />
import c = require('chai');

c.should()

c.use((chai, utils) => {
  utils.addChainableMethod(chai.Assertion.prototype, 'foo', function (str) {
    let obj = utils.flag(this, 'object');
    new chai.Assertion(obj).to.be.equal(str);
  })
});

let someObject = {};
console.log(someObject.should.be.an('object'));
