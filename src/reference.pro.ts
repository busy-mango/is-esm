import { isNil, isString } from "./primitive";
import { isEmptyString, isNaN } from "./primitive.pro";
import { isArray, isObject } from "./reference";

/** Defines a PlainObject type, which is an object whose key is a string and whose value is of unknown type. */
export type PlainObject = {
  [key: string]: unknown;
};

/**
 * Checks if the given source is an empty object.
 * @param source The object to check.
 * @returns true if source is a null object, false otherwise.
 */
export function isEmptyObject(source: unknown): source is PlainObject {
  return isPlainObject(source) && Reflect.ownKeys(source).length === 0;
}

/**
 * Checks if the given source is a pure object (i.e. a normal JavaScript object, excluding built-in objects and functions).
 * @param source The object to check.
 * @returns true if source is a pure object, false otherwise.
 */
export function isPlainObject(source: unknown): source is PlainObject {
  // If it's not an object, return false
  if (!isObject(source)) return false;
  // If it's not a standard object (created by {} or new Object()), then return false
  if (toString.call(source) !== "[object Object]") return false;

  const { getPrototypeOf } = Object; // Get the prototype object in the prototype chain.

  // If the prototype object in the prototype chain is null, it is a pure object
  if (getPrototypeOf(source) === null) return true;

  // Use closures to keep track of the prototype chain
  const closure = { prototype: source };
  while (getPrototypeOf(closure.prototype) !== null) {
    closure.prototype = getPrototypeOf(closure.prototype) as object;
  }
  // If the prototype object that the prototype chain of the source object ends up pointing to is equal to the prototype object in the closure, then it's a pure object
  return getPrototypeOf(source) === closure.prototype;
}

/**
 * Narrow source type to `Array` && Check is empty array.
 */
export function isEmptyArray<T>(source: unknown): source is T[] {
  return isArray(source) && source.length === 0;
}

/**
 * Narrow source type to `Array` && Check is not empty.
 */
export function isNonEmptyArray<T>(source: unknown): source is T[] {
  return isArray(source) && source.length > 0;
}

/**
 * Narrow source type to `Array` && Check is not empty.
 */
export function isStringArray(source: unknown): source is string[] {
  return isNonEmptyArray(source) && source.every(isString);
}

/**
 * Checks if the given value is empty value.
 * Empty values include `[]`, `{}`, `''`, `null`, `undefined`, `NaN`.
 * @param source The value to check.
 * @returns true if source is null, false otherwise.
 */
export function isEmpty(source: unknown) {
  // Checks for an empty array, empty object, empty string, null, or NaN, and returns true if one of the conditions is met.
  return (
    isEmptyArray(source) || // Check if it's an empty array.
    isEmptyObject(source) || // Check if it's an empty object.
    isEmptyString(source) || // Check if it's an empty string.
    isNil(source) || // Check if it is null or undefined.
    isNaN(source) // Check if it's NaN.
  );
}
