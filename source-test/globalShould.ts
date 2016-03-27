import chai = require('chai');

describe('global should', function () {
  it('works', function () {
    var theGlobal: any = typeof window !== 'undefined'
      ? window
      : global;

    theGlobal.globalShould = chai.should();

    try {
        theGlobal.globalShould.not.exist(undefined);
    } finally {
        delete theGlobal.globalShould;
    }
  });
});
