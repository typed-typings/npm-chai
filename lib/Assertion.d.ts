export interface AssertionStatic {
  (target: any, message?: string): Assertion;
}

export interface Assertion extends LanguageChains, NumericComparison, TypeComparison {
  not: Assertion;
  deep: Deep;
  any: KeyFilter;
  all: KeyFilter;
  a: TypeComparison;
  an: TypeComparison;
  include: Include;
  includes: Include;
  contain: Include;
  contains: Include;
  ok: Assertion;
  true: Assertion;
  false: Assertion;
  null: Assertion;
  undefined: Assertion;
  NaN: Assertion;
  exist: Assertion;
  empty: Assertion;
  arguments: Assertion;
  Arguments: Assertion;
  equal: Equal;
  equals: Equal;
  eq: Equal;
  eql: Equal;
  eqls: Equal;
  property: Property;
  ownProperty: OwnProperty;
  haveOwnProperty: OwnProperty;
  ownPropertyDescriptor: OwnPropertyDescriptor;
  haveOwnPropertyDescriptor: OwnPropertyDescriptor;
  length: Length;
  lengthOf: Length;
  match: Match;
  matches: Match;
  string(string: string, message?: string): Assertion;
  keys: Keys;
  key(string: string): Assertion;
  throw: Throw;
  throws: Throw;
  Throw: Throw;
  respondTo: RespondTo;
  respondsTo: RespondTo;
  itself: Assertion;
  satisfy: Satisfy;
  satisfies: Satisfy;
  closeTo: CloseTo;
  approximately: CloseTo;
  members: Members;
  increase: PropertyChange;
  increases: PropertyChange;
  decrease: PropertyChange;
  decreases: PropertyChange;
  change: PropertyChange;
  changes: PropertyChange;
  extensible: Assertion;
  sealed: Assertion;
  frozen: Assertion;
  oneOf(list: any[], message?: string): Assertion;
}

export interface LanguageChains {
  to: Assertion;
  be: Assertion;
  been: Assertion;
  is: Assertion;
  that: Assertion;
  which: Assertion;
  and: Assertion;
  has: Assertion;
  have: Assertion;
  with: Assertion;
  at: Assertion;
  of: Assertion;
  same: Assertion;
}

export interface NumericComparison {
  above: NumberComparer;
  gt: NumberComparer;
  greaterThan: NumberComparer;
  least: NumberComparer;
  gte: NumberComparer;
  below: NumberComparer;
  lt: NumberComparer;
  lessThan: NumberComparer;
  most: NumberComparer;
  lte: NumberComparer;
  within(start: number, finish: number, message?: string): Assertion;
}

export interface NumberComparer {
  (value: number, message?: string): Assertion;
}

export interface TypeComparison {
  (type: string, message?: string): Assertion;
  instanceof: InstanceOf;
  instanceOf: InstanceOf;
}

export interface InstanceOf {
  (constructor: Object, message?: string): Assertion;
}

export interface CloseTo {
  (expected: number, delta: number, message?: string): Assertion;
}

export interface Deep {
  equal: Equal;
  equals: Equal;
  include: Include;
  property: Property;
  members: Members;
}

export interface KeyFilter {
  keys: Keys;
}

export interface Equal {
  (value: any, message?: string): Assertion;
}

export interface Property {
  (name: string, value?: any, message?: string): Assertion;
}

export interface OwnProperty {
  (name: string, message?: string): Assertion;
}

export interface OwnPropertyDescriptor {
  (name: string, descriptor: PropertyDescriptor, message?: string): Assertion;
  (name: string, message?: string): Assertion;
}

export interface Length extends LanguageChains, NumericComparison {
  (length: number, message?: string): Assertion;
}

export interface Include {
  (value: Object, message?: string): Assertion;
  (value: string, message?: string): Assertion;
  (value: number, message?: string): Assertion;
  string(value: string, message?: string): Assertion;
  keys: Keys;
  members: Members;
  any: KeyFilter;
  all: KeyFilter;
}

export interface Match {
  (regexp: RegExp | string, message?: string): Assertion;
}

export interface Keys {
  (...keys: any[]): Assertion;
  (keys: any[]): Assertion;
  (keys: Object): Assertion;
}

export interface Throw {
  (): Assertion;
  (expected: string, message?: string): Assertion;
  (expected: RegExp, message?: string): Assertion;
  (constructor: Error, expected?: string, message?: string): Assertion;
  (constructor: Error, expected?: RegExp, message?: string): Assertion;
  (constructor: Function, expected?: string, message?: string): Assertion;
  (constructor: Function, expected?: RegExp, message?: string): Assertion;
}

export interface RespondTo {
  (method: string, message?: string): Assertion;
}

export interface Satisfy {
  (matcher: Function, message?: string): Assertion;
}

export interface Members {
  (set: any[], message?: string): Assertion;
}

export interface PropertyChange {
  (object: Object, prop: string, msg?: string): Assertion;
}
