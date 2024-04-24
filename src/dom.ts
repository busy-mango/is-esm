/**
 * Narrow source type to `CSSStyleRule`.
 */
export function isCSSStyleRule(source: unknown): source is CSSStyleRule {
  return source instanceof CSSStyleRule;
}

/**
 * Checks if the given source is an instance of CSSStyleSheet.
 * If is CSSStyleSheet, narrow to CSSStyleSheet.
 * @param {unknown} source - The value to be checked.
 * @returns {boolean} Returns true if the source is an instance of CSSStyleSheet, false otherwise.
 */
export function isCSSStyleSheet(source: unknown): source is CSSStyleSheet {
  return source instanceof CSSStyleSheet;
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
