import { isArray, isObject } from "./reference";

export type PlainObject = {
  [key: string]: unknown | undefined;
}

export function isPlainObject(source: unknown): source is PlainObject {
  if (!isObject(source)) return false;
  if (toString.call(source) !== '[object Object]') return false;

  const { getPrototypeOf } = Object;
  if (getPrototypeOf(source) === null) return true;

  const closure = { prototype: source };
  while (getPrototypeOf(closure.prototype) !== null) {
    closure.prototype = getPrototypeOf(closure.prototype);
  }
  return getPrototypeOf(source) === closure.prototype;
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
