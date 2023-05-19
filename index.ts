/**
 * @author mango
 * @description type check
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
 * Checks if `value` is the `CSSStyleRule`.
 */
export function isCSSStyleRule(source: unknown): source is CSSStyleRule {
  return source instanceof CSSStyleRule;
}

/**
 * Checks if `value` is the `CSSStyleSheet`.
 */
export function isCSSStyleSheet (source: unknown): source is CSSStyleSheet {
  return source instanceof CSSStyleSheet;
}

/**
 * Checks keyname is vaild object attr & val type is check func
 * @example ```typescript
 * const obj = { key: '' };
 * if (isValidKey('key', obj, isString)) {
 *  // obj.key will be autoComplete by TS
 *  obj.key.trim();
 * }
 * ```
 */
export function isValidKey<K extends string, T>(
  key: K,
  obj: object,
  check: (val: unknown) => val is T,
): obj is Record<K, T> {
  return (key in obj) && check((obj as Record<K, T>)[key]);
}

/**
 * Check source is URLSearchParams
 */
export function isURLSearchParams(source: unknown): source is URLSearchParams {
  return source instanceof URLSearchParams;
}

/**
 * Check source is ArrayBuffer
 */
export function isArrayBuffer(source: unknown): source is ArrayBuffer {
  return source instanceof ArrayBuffer;
}

/**
 * Check source is ArrayBufferLike
 */
export function isArrayBufferLike(source: unknown): source is ArrayBufferLike {
  return isObject(source)
    && isValidKey('ArrayBuffer', source, isArrayBuffer);
};

/**
 * Check source is ArrayBufferView
 */
export function isArrayBufferView(source: unknown): source is ArrayBufferView {
  return isObject(source)
    && isValidKey('byteLength', source, isNumeric)
    && isValidKey('byteOffset', source, isNumeric)
    && isValidKey('buffer', source, isArrayBufferLike)
  ;
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
