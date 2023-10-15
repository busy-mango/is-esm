import { isArrayBuffer, isUint8Array } from "./enhance";
import { isFinite } from "./primitive.pro";
import { isObject } from "./reference";

/** Type narrow func define */
export interface NarrowFunc<T> {
  (source: unknown): boolean;
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
  return (
    isArrayBuffer(source)
    || isUint8Array(source)
    || isObject(source) && isValidKey('ArrayBuffer', source, isArrayBuffer)
  );
};

/**
 * Narrow source type to `ArrayBufferView`.
 */
export function isArrayBufferView(source: unknown): source is ArrayBufferView {
  return isObject(source)
    && isValidKey('byteLength', source, isFinite)
    && isValidKey('byteOffset', source, isFinite)
    && isValidKey('buffer', source, isArrayBufferLike)
  ;
}

/**
 * Narrow source type to `IArguments`.
 */
export function isArguments(source: unknown): source is typeof arguments {
  return isObject(source) && source.toString() === '[object Arguments]';
}
