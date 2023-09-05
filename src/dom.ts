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
