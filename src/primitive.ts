/** `Null` || `undefined` */
export type Nil = null | undefined;

/**
 * Narrow source type to `undefined`.
 */
export function isUndefined(source: unknown): source is undefined {
  return source === undefined;
}

/**
 * Narrow source type is not `nundefined`.
 */
export function isNotUndefined<T>(source: undefined | T): source is T {
  return source !== undefined;
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
  return typeof source === "string" || source instanceof String;
}

/**
 * Narrow source type to `Number`.
 * @note Exclude `Infinity`, `-Infinity`, and `NaN`.
 */
export function isNumber(source: unknown): source is number {
  return typeof source === "number" || source instanceof Number;
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
export function isFalse(source: unknown): source is false {
  return source === false;
}

/**
 * Narrow source type to `boolean`.
 */
export function isBoolean(source: unknown): source is boolean {
  return isTrue(source) || isFalse(source);
}

/**
 * Narrow source type to `number` and `source` is int.
 */
export function isInt(source: unknown): source is number {
  return isNumber(source) && source % 1 === 0;
}

/**
 * Narrow source type to `number` and `source` is float.
 */
export const isFloat = (source: unknown): source is number => {
  return isNumber(source) && source % 1 !== 0;
};

/**
 * Narrow source type to `bigint`.
 */
export function isBigInt(source: unknown): source is bigint {
  return typeof source === "bigint";
}

/**
 * Narrow source type to `symbol`.
 */
export function isSymbol(source: unknown): source is symbol {
  return typeof source === "symbol";
}
