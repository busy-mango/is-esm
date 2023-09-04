/** `Null` || `undefined` */
export type Nil = null | undefined;

/**
 * Narrow source type to `undefined`.
 */
export function isUndefined(source: unknown): source is undefined {
  return source === undefined;
}

/**
 * Narrow source type to `null`.
 */
export function isNull(source: unknown): source is null {
  return source === null;
}

/**
 * Narrow source type to `Nil`.
 */
export function isNil(source: unknown): source is Nil {
  return isNull(source) || isUndefined(source);
}

/**
 * Narrow source type to `String`.
 */
export function isString(source: unknown): source is string {
  return typeof source === 'string' || source instanceof String;
}

/**
 * Narrow source type to `Number`.
 * @note Exclude `Infinity`, `-Infinity`, and `NaN`.
 */
export function isNumber(source: unknown): source is number {
  return typeof source === 'number' || source instanceof Number;
}

/**
 * Narrow source type to `true`.
 */
export function isTrue(source: unknown): source is true {
  return source === true;
}

/**
 * Narrow source type to `false`.
 */
export function isFalse(source: unknown): source is true {
  return source === false;
}

/**
 * Narrow source type to `Boolean`.
 */
export function isBoolean(source: unknown): source is Boolean {
  return isTrue(source) || isFalse(source);
}

/**
 * Narrow source type to `Boolean`.
 */
export function isBigInt(source: unknown): source is bigint {
  return typeof source === 'bigint';
}
