import { isArray } from "./reference";

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
