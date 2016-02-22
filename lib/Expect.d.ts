import {AssertionStatic} from './Assertion.d.ts';

export interface ExpectStatic extends AssertionStatic {
  fail(actual?: any, expected?: any, message?: string, operator?: string): void;
}
