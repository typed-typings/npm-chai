export interface AssertStatic extends Assert {
}

export interface Assert {
    /**
     * @param expression Expression to test for truthiness.
     * @param message Message to display on error.
     */
    (expression: any, message?: string): void;
    (expression: any, messageCallback: () => string): void;

    fail(actual?: any, expected?: any, msg?: string, operator?: string): void;

    ok(val: any, msg?: string): void;
    isOk(val: any, msg?: string): void;
    notOk(val: any, msg?: string): void;
    isNotOk(val: any, msg?: string): void;

    equal(act: any, exp: any, msg?: string): void;
    notEqual(act: any, exp: any, msg?: string): void;

    strictEqual(act: any, exp: any, msg?: string): void;
    notStrictEqual(act: any, exp: any, msg?: string): void;

    deepEqual(act: any, exp: any, msg?: string): void;
    notDeepEqual(act: any, exp: any, msg?: string): void;

    isTrue(val: any, msg?: string): void;
    isFalse(val: any, msg?: string): void;

    isNotTrue(val: any, msg?: string): void;
    isNotFalse(val: any, msg?: string): void;

    isNull(val: any, msg?: string): void;
    isNotNull(val: any, msg?: string): void;

    isUndefined(val: any, msg?: string): void;
    isDefined(val: any, msg?: string): void;

    isNaN(val: any, msg?: string): void;
    isNotNaN(val: any, msg?: string): void;

    isAbove(val: number, abv: number, msg?: string): void;
    isBelow(val: number, blw: number, msg?: string): void;

    isAtLeast(val: number, atlst: number, msg?: string): void;
    isAtMost(val: number, atmst: number, msg?: string): void;

    isFunction(val: any, msg?: string): void;
    isNotFunction(val: any, msg?: string): void;

    isObject(val: any, msg?: string): void;
    isNotObject(val: any, msg?: string): void;

    isArray(val: any, msg?: string): void;
    isNotArray(val: any, msg?: string): void;

    isString(val: any, msg?: string): void;
    isNotString(val: any, msg?: string): void;

    isNumber(val: any, msg?: string): void;
    isNotNumber(val: any, msg?: string): void;

    isBoolean(val: any, msg?: string): void;
    isNotBoolean(val: any, msg?: string): void;

    typeOf(val: any, type: string, msg?: string): void;
    notTypeOf(val: any, type: string, msg?: string): void;

    instanceOf(val: any, type: Function, msg?: string): void;
    notInstanceOf(val: any, type: Function, msg?: string): void;

    include(exp: string, inc: any, msg?: string): void;
    include(exp: any[], inc: any, msg?: string): void;
    include(exp: Object, inc: Object, msg?: string): void;

    notInclude(exp: string, inc: any, msg?: string): void;
    notInclude(exp: any[], inc: any, msg?: string): void;

    match(exp: any, re: RegExp, msg?: string): void;
    notMatch(exp: any, re: RegExp, msg?: string): void;

    property(obj: Object, prop: string, msg?: string): void;
    notProperty(obj: Object, prop: string, msg?: string): void;
    deepProperty(obj: Object, prop: string, msg?: string): void;
    notDeepProperty(obj: Object, prop: string, msg?: string): void;

    propertyVal(obj: Object, prop: string, val: any, msg?: string): void;
    propertyNotVal(obj: Object, prop: string, val: any, msg?: string): void;

    deepPropertyVal(obj: Object, prop: string, val: any, msg?: string): void;
    deepPropertyNotVal(obj: Object, prop: string, val: any, msg?: string): void;

    lengthOf(exp: any, len: number, msg?: string): void;
    //alias frenzy
    throw(fn: Function, msg?: string): void;
    throw(fn: Function, regExp: RegExp): void;
    throw(fn: Function, errType: Function, msg?: string): void;
    throw(fn: Function, errType: Function, regExp: RegExp): void;

    throws(fn: Function, msg?: string): void;
    throws(fn: Function, regExp: RegExp): void;
    throws(fn: Function, errType: Function, msg?: string): void;
    throws(fn: Function, errType: Function, regExp: RegExp): void;

    Throw(fn: Function, msg?: string): void;
    Throw(fn: Function, regExp: RegExp): void;
    Throw(fn: Function, errType: Function, msg?: string): void;
    Throw(fn: Function, errType: Function, regExp: RegExp): void;

    doesNotThrow(fn: Function, msg?: string): void;
    doesNotThrow(fn: Function, regExp: RegExp): void;
    doesNotThrow(fn: Function, errType: Function, msg?: string): void;
    doesNotThrow(fn: Function, errType: Function, regExp: RegExp): void;

    operator(val: any, operator: string, val2: any, msg?: string): void;
    closeTo(act: number, exp: number, delta: number, msg?: string): void;
    approximately(act: number, exp: number, delta: number, msg?: string): void;

    sameMembers(set1: any[], set2: any[], msg?: string): void;
    sameDeepMembers(set1: any[], set2: any[], msg?: string): void;
    includeMembers(superset: any[], subset: any[], msg?: string): void;
    includeDeepMembers(superset: any[], subset: any[], msg?: string): void;

    ifError(val: any, msg?: string): void;

    isExtensible(obj: {}, msg?: string): void;
    extensible(obj: {}, msg?: string): void;
    isNotExtensible(obj: {}, msg?: string): void;
    notExtensible(obj: {}, msg?: string): void;

    isSealed(obj: {}, msg?: string): void;
    sealed(obj: {}, msg?: string): void;
    isNotSealed(obj: {}, msg?: string): void;
    notSealed(obj: {}, msg?: string): void;

    isFrozen(obj: Object, msg?: string): void;
    frozen(obj: Object, msg?: string): void;
    isNotFrozen(obj: Object, msg?: string): void;
    notFrozen(obj: Object, msg?: string): void;

    oneOf(inList: any, list: any[], msg?: string): void;

    changes(fn: Function, obj: {}, property: string): void;
    doesNotChange(fn: Function, obj: {}, property: string): void;
    increases(fn: Function, obj: {}, property: string): void;
    doesNotIncrease(fn: Function, obj: {}, property: string): void;

    decreases(fn: Function, obj: {}, property: string): void;
    doesNotDecrease(fn: Function, obj: {}, property: string): void;
  }
