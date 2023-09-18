import { describe, expect, it } from "vitest";

import {
  isNaN,
  isFinite,
  isInteger,
  isSafeInteger,
  isNonEmptyString,
} from '../index';

describe('isNonEmptyString', () => {
  it('should return true if source is a non-empty string', () => {
    expect(isNonEmptyString('hello')).toBe(true);
    expect(isNonEmptyString('123')).toBe(true);
  });

  it('should return false if source is an empty string', () => {
    expect(isNonEmptyString('  ')).toBe(false);
    expect(isNonEmptyString('')).toBe(false);
  });

  it('should return false if source is not a string', () => {
    expect(isNonEmptyString(undefined)).toBe(false);
    expect(isNonEmptyString(null)).toBe(false);
    expect(isNonEmptyString(123)).toBe(false);
    expect(isNonEmptyString(true)).toBe(false);
    expect(isNonEmptyString({})).toBe(false);
  });
});

describe('isNaN', () => {
  it('should return true if source is NaN', () => {
    expect(isNaN(NaN)).toBe(true);
  });

  it('should return false if source is not NaN', () => {
    expect(isNaN(undefined)).toBe(false);
    expect(isNaN(null)).toBe(false);
    expect(isNaN(0)).toBe(false);
    expect(isNaN('NaN')).toBe(false);
  });
});

describe('isNumeric', () => {
  it('should return true if source is a numeric value', () => {
    expect(isFinite(123)).toBe(true);
    expect(isFinite(0)).toBe(true);
    expect(isFinite(-1.5)).toBe(true);
  });

  it('should return false if source is not a numeric value', () => {
    expect(isFinite(undefined)).toBe(false);
    expect(isFinite(null)).toBe(false);
    expect(isFinite('123')).toBe(false);
    expect(isFinite(true)).toBe(false);
    expect(isFinite(NaN)).toBe(false);
    expect(isFinite(Infinity)).toBe(false);
    expect(isFinite(-Infinity)).toBe(false);
  });
});

describe('isInteger', () => {
  it('should return true if source is an integer', () => {
    expect(isInteger(123)).toBe(true);
    expect(isInteger(0)).toBe(true);
    expect(isInteger(-1)).toBe(true);
  });

  it('should return false if source is not an integer', () => {
    expect(isInteger(undefined)).toBe(false);
    expect(isInteger(null)).toBe(false);
    expect(isInteger(1.23)).toBe(false);
    expect(isInteger('123')).toBe(false);
    expect(isInteger(true)).toBe(false);
  });
});

describe('isSafeInteger', () => {
  it('should return true if source is a safe integer', () => {
    expect(isSafeInteger(123)).toBe(true);
    expect(isSafeInteger(0)).toBe(true);
    expect(isSafeInteger(-1)).toBe(true);
    expect(isSafeInteger(Number.MAX_SAFE_INTEGER)).toBe(true);
    expect(isSafeInteger(Number.MIN_SAFE_INTEGER)).toBe(true);
  });

  it('should return false if source is not a safe integer', () => {
    expect(isSafeInteger(undefined)).toBe(false);
    expect(isSafeInteger(null)).toBe(false);
    expect(isSafeInteger(1.23)).toBe(false);
    expect(isSafeInteger('123')).toBe(false);
    expect(isSafeInteger(true)).toBe(false);
    expect(isSafeInteger(Number.MAX_VALUE)).toBe(false);
    expect(isSafeInteger(Number.MIN_VALUE)).toBe(false);
  });
});
