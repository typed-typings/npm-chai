import * as AE from 'assertion-error';

import * as Assert from './Assert';
import * as Assertion from './Assertion';
import * as Expect from './Expect';
import * as Should from './Should';
import * as Config from './Config';
import * as Utils from './Utils';

declare namespace chai {
  export interface AssertionStatic extends Assertion.AssertionStatic {}
  export class AssertionError extends AE.AssertionError {}
  export var Assertion: Assertion.Assertion;
  export var expect: Expect.ExpectStatic;
  export var assert: Assert.AssertStatic;
  export var config: Config.Config;
  export var util: Utils.Utils;
  export function should(): Should.Should;
  export function Should(): Should.Should;
  /**
   * Provides a way to extend the internals of Chai
   */
  export function use(fn: (chai: any, utils: Utils.Utils) => void): typeof chai;
}

export = chai;

declare global {
  interface Object {
    should: Assertion.Assertion;
  }
}
