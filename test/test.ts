/// <reference path="../typings/main.d.ts" />
/// <reference path="../out/main.d.ts" />
import test = require('blue-tape');
import c = require('chai');

test('use()', (t) => {
  t.test('addChainableMethod()', (t) => {
    t.plan(1);
    c.use((chai, utils) => {
      utils.addChainableMethod(chai.Assertion.prototype, 'foo', function(str) {
        let obj = utils.flag(this, 'object');
        new chai.Assertion(obj).to.be.equal(str);
      });
      t.assert(typeof (new chai.Assertion({})).foo === 'function', 'foo is function');
      t.end();
    });
  });
});

test('BDD', (t) => {
  c.should();
  let someObject = {};
  someObject.should.be.an('object');
  t.pass('should.be.an()');
  t.end();
});
