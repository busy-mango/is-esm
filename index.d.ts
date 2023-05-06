/**
 * @author mango
 *
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
 * Checks if `value.constructor` is the `Object`
 */
export declare function isPureObject(source: unknown): source is Exclude<object, ArrayBuffer | ArrayBufferView | Blob | Date | FormData | ReadableStream>;
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
 * Checks if `value` is HTMLElement
 */
export declare function isHTMLElement(source: unknown): source is HTMLElement;
