import { describe, expect, it } from "vitest";

import {
  isNonEmptyArray
} from '../index';

describe('isNonEmptyArray', () => {
  it('should return true if source is a non-empty array', () => {
    expect(isNonEmptyArray([1, 2, 3])).toBe(true);
    expect(isNonEmptyArray(['a', 'b', 'c'])).toBe(true);
  });

  it('should return false if source is an empty array', () => {
    expect(isNonEmptyArray([])).toBe(false);
  });

  it('should return false if source is not an array', () => {
    expect(isNonEmptyArray(undefined)).toBe(false);
    expect(isNonEmptyArray(null)).toBe(false);
    expect(isNonEmptyArray(123)).toBe(false);
    expect(isNonEmptyArray('array')).toBe(false);
    expect(isNonEmptyArray({})).toBe(false);
  });
});