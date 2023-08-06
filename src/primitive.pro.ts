import { isString } from "./primitive";

/**
 * Narrow source type to `String` && Check is not empty string.
 */
export function isNonEmptyString(source: unknown): source is Exclude<string, ''> {
  return isString(source) && source.trim() !== '';
}

/**
 * Narrow source type to `NaN`.
 */
export function isNaN(source: unknown): source is typeof NaN {
  return Number.isNaN(source);
}

/**
 * Narrow source type to `Number` && Check is not `Infinity`, `-Infinity`, `NaN`.
 */
export function isNumeric(source: unknown): source is number {
  return Number.isFinite(source);
}
