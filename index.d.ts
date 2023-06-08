/**
 * @author mango
 * @description type check
 */
/** null or undefined */
export type Nil = null | undefined;
/**
 * Checks if `value` is `null` or `undefined`.
 */
export declare function isNil(source: unknown): source is Nil;
/**
 * Checks if `value` is classified as a `String` primitive or object.
 */
export declare function isString(source: unknown): source is string;
/**
 * Checks if `value` is classified as a `String` primitive or object.
 */
export declare function isNonEmptyString(source: unknown): source is Exclude<string, ''>;
/**
 * Checks if `value` is classified as a `Function` object.
 */
export declare function isFunction(source: unknown): source is Function;
/**
 * Checks if `value` is the `Object`.
 * @example arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 */
export declare function isObject(source: unknown): source is object;
/**
 * Checks if `value` is classified as a `Number` primitive or object.
 * @note ** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `Number.isFinite` method.
 */
export declare function isNumber(source: unknown): source is number;
/**
 * Checks if `value` is finite numerical
 * @note `Infinity`, `-Infinity`, `NaN` is not vaild numerical
 */
export declare function isNumeric(source: unknown): source is number;
/**
 * Checks if `value` is array
 */
export declare function isArray(source: unknown): source is unknown[];
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
export declare function isValidKey<K extends string, T>(key: K, obj: object, check: (val: unknown) => val is T): obj is Record<K, T>;
/**
 * Checks if `value` is the `CSSStyleRule`.
 */
export declare function isCSSStyleRule(source: unknown): source is CSSStyleRule;
/**
 * Checks if `value` is the `CSSStyleSheet`.
 */
export declare function isCSSStyleSheet(source: unknown): source is CSSStyleSheet;
/**
 * Check source is URLSearchParams
 */
export declare function isURLSearchParams(source: unknown): source is URLSearchParams;
/**
 * Check source is ArrayBuffer
 */
export declare function isArrayBuffer(source: unknown): source is ArrayBuffer;
/**
 * Check source is ArrayBufferLike
 */
export declare function isArrayBufferLike(source: unknown): source is ArrayBufferLike;
/**
 * Check source is ArrayBufferView
 */
export declare function isArrayBufferView(source: unknown): source is ArrayBufferView;
/**
 * Checks if `value` is HTMLElement
 */
export declare function isHTMLElement(source: unknown): source is HTMLElement;
