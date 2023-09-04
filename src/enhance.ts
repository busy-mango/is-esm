/**
 * Narrow source type to `Promise`.
 */
export function isPromise<T, S>(source: Promise<T> | S): source is Promise<T> {
  return source instanceof Promise;
}

/**
 * Narrow source type to `CSSStyleRule`.
 */
export function isCSSStyleRule(source: unknown): source is CSSStyleRule {
  return source instanceof CSSStyleRule;
}

/**
 * Narrow source type to `CSSStyleSheet`.
 */
export function isCSSStyleSheet (source: unknown): source is CSSStyleSheet {
  return source instanceof CSSStyleSheet;
}

/**
 * Narrow source type to `URLSearchParams`.
 */
export function isURLSearchParams(source: unknown): source is URLSearchParams {
  return source instanceof URLSearchParams;
}

/**
 * Narrow source type to `HTMLElement`.
 */
export function isElement(source: unknown): source is Element {
  return source instanceof Element;
}

/**
 * Narrow source type to `HTMLElement`.
 */
export function isHTMLElement(source: unknown): source is HTMLElement {
  return source instanceof HTMLElement;
}

/**
 * Narrow source type to `Blob`.
 */
export function isBlob(source: unknown): source is Blob {
  return source instanceof Blob;
}

/**
 * Narrow source type to `File`.
 */
export function isFile(source: unknown): source is File {
  return source instanceof File;
}

/**
 * Narrow source type to `ArrayBuffer`.
 */
export function isArrayBuffer(source: unknown): source is ArrayBuffer {
  return source instanceof ArrayBuffer;
}

/**
 * Narrow source type to `Date`.
 */
export function isDate(source: unknown): source is Date {
  return source instanceof Date;
}

/**
 * Narrow source type to `RegExp`.
 */
export function isRegExp(source: unknown): source is RegExp {
  return source instanceof RegExp;
}

/**
 * Narrow source type to `Error`.
 */
export function isError(source: unknown): source is Error {
  return source instanceof Error;
}
