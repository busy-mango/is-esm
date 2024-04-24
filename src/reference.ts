/* eslint-disable @typescript-eslint/ban-types */
import { isNil } from "./primitive";

/**
 * Narrow source type to `Object`.
 */
export function isObject(source: unknown): source is object {
  const type = typeof source;
  if (isNil(source)) return false;
  return type === "object" || type === "function";
}

/**
 * Narrow source type to `Function`.
 */
export function isFunction(source: unknown): source is Function {
  return typeof source === "function";
}

/**
 * Narrow source type to `Array`.
 */
export function isArray<T>(source: unknown): source is T[] {
  return Array.isArray(source);
}
