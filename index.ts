/**
 * @author mango
 * 
 */

/** null or undefined */
export type Nil = null | undefined;

/**
 * Checks if `value` is `null` or `undefined`.
 */
export function isNil(source: unknown): source is Nil {
  return source == null
}

/**
 * Checks if `value` is classified as a `String` primitive or object.
 */
export function isString(source: unknown): source is string {
  return typeof source === 'string' || source instanceof String;
}

/**
 * Checks if `value` is classified as a `String` primitive or object.
 */
export function isNonEmptyString(source: unknown): source is Exclude<string, ''> {
  return isString(source) && source.trim() !== '';
}

/**
 * Checks if `value` is classified as a `Function` object.
 */
export function isFunction(source: unknown): source is Function {
  return typeof source === 'function'
}

/**
 * Checks if `value` is the `Object`.
 * @example arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 */
export function isObject(source: unknown): source is object {
  const type = typeof source;
  if (isNil(source)) return false;
  return type === 'object' || type === 'function';
}

/**
 * Checks if `value.constructor` is the `Object`
 */
export function isPureObject (source: unknown): source is Exclude<
  object,
  | ArrayBuffer
  | ArrayBufferView
  | Blob
  | Date
  | FormData
  | ReadableStream
> {
  if (!isObject(source)) return false;
  return source.constructor === Object;
}

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 * @note ** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `Number.isFinite` method.
 */
export function isNumber(source: unknown): source is number {
  return typeof source === 'number' || source instanceof Number;
}

/**
 * Checks if `value` is finite numerical
 * @note `Infinity`, `-Infinity`, `NaN` is not vaild numerical
 */
export function isNumeric(source: unknown): source is number {
  return Number.isFinite(source);
}

/**
 * Checks if `value` is HTMLElement
 */
export function isHTMLElement(source: unknown): source is HTMLElement {
  return source instanceof HTMLElement;
}
