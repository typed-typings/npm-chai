export interface Should extends ShouldAssertion {
  not: ShouldAssertion;
  fail(actual: any, expected: any, message?: string, operator?: string): void;
}

export interface ShouldAssertion {
  Throw: ShouldThrow;
  throw: ShouldThrow;
  equal(value1: any, value2: any, message?: string): void;
  exist(value: any, message?: string): void;
}

export interface ShouldThrow {
  (actual: Function): void;
  (actual: Function, expected: string | RegExp, message?: string): void;
  (actual: Function, constructor: Error | Function, expected?: string | RegExp, message?: string): void;
}

