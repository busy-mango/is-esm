import { isArrayBuffer } from "./enhance";
import { isNumeric } from "./primitive.pro";
import { isObject } from "./reference";

export interface NarrowFunc<T> {
  (source: unknown): source is T;
}

/**
 * Narrow source key type.
 * @example ```typescript
 * const obj: unknown;
 * isValidKey('key', obj, isString);
 * // obj is Recrode<'key', string>;
 * ```
 */
export function isValidKey<K extends string, T>(
  key: K,
  source: object,
  is: NarrowFunc<T>
): source is Record<K, T> {
  return (key in source) && is((source as Record<K, T>)[key]);
}

/**
 * Narrow source type to `isArrayBufferLike`.
 */
export function isArrayBufferLike(source: unknown): source is ArrayBufferLike {
  return isObject(source) && isValidKey('ArrayBuffer', source, isArrayBuffer);
};

/**
 * Narrow source type to `ArrayBufferView`.
 */
export function isArrayBufferView(source: unknown): source is ArrayBufferView {
  return isObject(source)
    && isValidKey('byteLength', source, isNumeric)
    && isValidKey('byteOffset', source, isNumeric)
    && isValidKey('buffer', source, isArrayBufferLike)
  ;
}

/**
 * Narrow source type to `IArguments`.
 */
export function isArguments(source: unknown): source is typeof arguments {
  return isObject(source) && source.toString() === '[object Arguments]';
}
