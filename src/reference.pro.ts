import { isArray, isObject } from "./reference";

export type PlainObject = {
  [key: string]: unknown | undefined;
}

export function isPlainObject(source: unknown): source is PlainObject {
  const { getPrototypeOf } = Object;
  return isObject(source) && getPrototypeOf({}) === getPrototypeOf(source);
}

/**
 * Narrow source type to `Array` && Check is empty array.
 */
export function isEmptyArray<T>(source: unknown | T[]): source is T[] {
  return isArray(source) && source.length === 0;
}

/**
 * Narrow source type to `Array` && Check is not empty.
 */
export function isNonEmptyArray<T>(source: unknown | T[]): source is T[] {
  return isArray(source) && source.length > 0;
}
