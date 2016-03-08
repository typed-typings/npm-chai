import {Assertion} from './Assertion';
import {AssertionError} from 'assertion-error';
import {AssertStatic} from './Assert';
import {AssertionStatic} from './Assertion';
import {ExpectStatic} from './Expect';
import {Should} from './Should';
import {Config} from './Config';
import {utils} from './utils';

export interface Chai {
  AssertionError: typeof AssertionError;
  Assertion: AssertionStatic;
  expect: ExpectStatic;
  assert: AssertStatic;
  config: Config;
  util: utils;
  should(): Should;

  /**
   * Provides a way to extend the internals of Chai
   */
  use(fn: (chai: any, utils: utils) => void): Chai;
}

declare global {
  interface Object {
    should: Assertion;
  }
}
