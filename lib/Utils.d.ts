import {Assertion} from './Assertion';

export interface PathInfo {
  parent: any;
  name: number|string;
  value: any;
  exists: boolean;
}

export interface Utils {
  addChainableMethod(ctx: any, name: string, chainingBehavior: (value: any) => void): void;
  addMethod(ctx: any, name: string, method: (value: any) => void): void;
  addProperty(ctx: any, name: string, getter: () => void): void;
  expectTypes(obj: Object, types: string[]): void;
  flag(obj: Object, key: string, value?: any): any;
  getActual(obj: Object, actual?: any): any;
  getEnumerableProperties(obj: Object): string[];
  getMessage(obj: Object, params: any[]): string;
  getMessage(obj: Object, message: string, negateMessage: string): string;
  getName(func: Function): string;
  getPathInfo(path: string, obj: Object): PathInfo;
  getPathValue(path: string, obj: Object): any;
  getProperties(obj: Object): string[];
  hasProperty(obj: Object, name: string): boolean;
  transferFlags(assertion: Assertion | any, obj: Object, includeAll?: boolean): void;
  inspect(obj: any): any;
}
