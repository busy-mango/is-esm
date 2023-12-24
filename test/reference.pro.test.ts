import { describe, expect, it } from "vitest";

import {
  isPlainObject,
  isEmptyArray,
  isNonEmptyArray,
} from '../index';

describe('isPlainObject', () => {
  it('should return true if source is a plain object', () => {
    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject({
      2: 1,
      "a": "b"
    })).toBe(true);
  });

  it('should return false if source is array', () => {
    expect(isPlainObject([])).toBe(false);
  });

  it('should return false if source special constructor object', () => {
    expect(isPlainObject(new URLSearchParams())).toBe(false);
    expect(isPlainObject(new Error())).toBe(false);
    expect(isPlainObject(new FormData())).toBe(false);
    expect(isPlainObject(new Date())).toBe(false);
  });
});

describe('isEmptyArray', () => {
  it('should return false if source is a non-empty array', () => {
    expect(isEmptyArray([1, 2, 3])).toBe(false);
    expect(isEmptyArray(['a', 'b', 'c'])).toBe(false);
  });

  it('should return true if source is an empty array', () => {
    expect(isEmptyArray([])).toBe(true);
  });

  it('should return false if source is not an array', () => {
    expect(isEmptyArray(undefined)).toBe(false);
    expect(isEmptyArray(null)).toBe(false);
    expect(isEmptyArray(123)).toBe(false);
    expect(isEmptyArray('array')).toBe(false);
    expect(isEmptyArray({})).toBe(false);
  });
});

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