import { describe, expect, it } from "vitest";

import {
  isUndefined,
  isNotUndefined,
  isNull,
  isNil,
  isString,
  isNumber,
  isTrue,
  isFalse,
  isBoolean,
  isBigInt,
} from '../index';

describe('isUndefined', () => {
  it('should return true if source is undefined', () => {
    const source = undefined;
    expect(isUndefined(source)).toBe(true);
  });
  it('should return false if source is not undefined', () => {
    expect(isUndefined(null)).toBe(false);
    expect(isUndefined(1)).toBe(false);
    expect(isUndefined('2')).toBe(false);
    expect(isUndefined(new Date())).toBe(false);
    expect(isUndefined(0)).toBe(false);
    expect(isUndefined({})).toBe(false);
    expect(isUndefined([])).toBe(false);
    expect(isUndefined(-2)).toBe(false);
  });
});

describe('isNotUndefined', () => {
  it('should return true if the source is not undefined', () => {
    const source: string | undefined = 'example';
    expect(isNotUndefined(source)).toBeTruthy();
  });

  it('should return false if the source is undefined', () => {
    expect(isNotUndefined(undefined)).toBeFalsy();
  });
});

describe('isNull', () => {
  it('should return true if source is null', () => {
    expect(isNull(null)).toBe(true);
  });

  it('should return false if source is not null', () => {
    expect(isNull(undefined)).toBe(false);
    expect(isNull(1)).toBe(false);
    expect(isNull('2')).toBe(false);
    expect(isNull(new Date())).toBe(false);
    expect(isNull(0)).toBe(false);
    expect(isNull({})).toBe(false);
    expect(isNull([])).toBe(false);
    expect(isNull(-2)).toBe(false);
  });
});

describe('should return true if source is null or undefined', () => {
  it('responsibility', () => {
    expect(isNil(null)).toBe(true);
    expect(isNil(undefined)).toBe(true);
  });
  it('should return false if source is not null or not undefined', () => {
    expect(isNull(1)).toBe(false);
    expect(isNull('2')).toBe(false);
    expect(isNull(new Date())).toBe(false);
    expect(isNull(0)).toBe(false);
    expect(isNull({})).toBe(false);
    expect(isNull([])).toBe(false);
    expect(isNull(-2)).toBe(false);
  });
});

describe('isString', () => {
  it('should return true if source is a string literal', () => {
    expect(isString('hello')).toBe(true);
    expect(isString('123')).toBe(true);
    expect(isString('')).toBe(true);
  });
  it('should return true if source is a string object', () => {
    expect(isString(new String('hello'))).toBe(true);
    expect(isString(new String('123'))).toBe(true);
    expect(isString(new String(''))).toBe(true);
  });
  it('should return false if source is not a string', () => {
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString(123)).toBe(false);
    expect(isString(true)).toBe(false);
    expect(isString({})).toBe(false);
  });
});

describe('isNumber', () => {
  it('should return true if source is a number literal', () => {
    expect(isNumber(123)).toBe(true);
    expect(isNumber(0)).toBe(true);
    expect(isNumber(-1.5)).toBe(true);
  });

  it('should return true if source is a number object', () => {
    expect(isNumber(new Number(123))).toBe(true);
    expect(isNumber(new Number(0))).toBe(true);
    expect(isNumber(new Number(-1.5))).toBe(true);
  });

  it('should return false if source is not a number', () => {
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber('123')).toBe(false);
    expect(isNumber(true)).toBe(false);
    expect(isNumber({})).toBe(false);
  });
});

describe('isTrue', () => {
  it('should return true if source is true', () => {
    expect(isTrue(true)).toBe(true);
  });

  it('should return false if source is not true', () => {
    expect(isTrue(false)).toBe(false);
    expect(isTrue(undefined)).toBe(false);
    expect(isTrue(null)).toBe(false);
    expect(isTrue(0)).toBe(false);
    expect(isTrue('true')).toBe(false);
  });
});

describe('isFalse', () => {
  it('should return true if source is false', () => {
    expect(isFalse(false)).toBe(true);
  });

  it('should return false if source is not false', () => {
    expect(isFalse(true)).toBe(false);
    expect(isFalse(undefined)).toBe(false);
    expect(isFalse(null)).toBe(false);
    expect(isFalse(0)).toBe(false);
    expect(isFalse('false')).toBe(false);
  });
});

describe('isBoolean', () => {
  it('should return true if source is true', () => {
    expect(isBoolean(true)).toBe(true);
  });

  it('should return true if source is false', () => {
    expect(isBoolean(false)).toBe(true);
  });

  it('should return false if source is not a boolean', () => {
    expect(isBoolean(undefined)).toBe(false);
    expect(isBoolean(null)).toBe(false);
    expect(isBoolean(0)).toBe(false);
    expect(isBoolean('true')).toBe(false);
    expect(isBoolean('false')).toBe(false);
  });
});

describe('isBigInt', () => {
  it('should return true if source is a bigint', () => {
    expect(isBigInt(BigInt(123))).toBe(true);
    expect(isBigInt(BigInt(0))).toBe(true);
    expect(isBigInt(BigInt(-1))).toBe(true);
  });

  it('should return false if source is not a bigint', () => {
    expect(isBigInt(undefined)).toBe(false);
    expect(isBigInt(null)).toBe(false);
    expect(isBigInt(123)).toBe(false);
    expect(isBigInt(0)).toBe(false);
    expect(isBigInt('123')).toBe(false);
  });
});
