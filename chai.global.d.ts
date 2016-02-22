import * as Chai from './Chai';

declare global {
  interface Object {
    should: Chai.Assertion;
  }
}
