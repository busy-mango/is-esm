import { describe, expect, it } from "vitest";

import {
  isValidKey,
  isArguments,
  isArrayBufferLike,
  isArrayBufferView,
} from '../index';

describe('isValidKey', () => {
  it('should return true if key exists in the source object and passes the validation', () => {
    const obj = { key: 'value' };
    const isString = (value: unknown): value is string => typeof value === 'string';
    expect(isValidKey('key', obj, isString)).toBe(true);
  });

  it('should return false if key does not exist in the source object', () => {
    const obj = { otherKey: 'value' };
    const isString = (value: unknown): value is string => typeof value === 'string';
    expect(isValidKey('key', obj, isString)).toBe(false);
  });

  it('should return false if key exists in the source object but fails the validation', () => {
    const obj = { key: 123 };
    const isString = (value: unknown): value is string => typeof value === 'string';
    expect(isValidKey('key', obj, isString)).toBe(false);
  });
});

describe('isArrayBufferLike', () => {
  it('should return true if source is an ArrayBuffer or ArrayBufferView', () => {
    expect(isArrayBufferLike(new ArrayBuffer(10))).toBe(true);
    expect(isArrayBufferLike(new Uint8Array())).toBe(true);
  });

  it('should return false if source is not an ArrayBuffer or ArrayBufferView', () => {
    expect(isArrayBufferLike(undefined)).toBe(false);
    expect(isArrayBufferLike(null)).toBe(false);
    expect(isArrayBufferLike([])).toBe(false);
    expect(isArrayBufferLike({})).toBe(false);
    expect(isArrayBufferLike('arraybuffer')).toBe(false);
    expect(isArrayBufferLike(123)).toBe(false);
  });
});

describe('isArrayBufferView', () => {
  it('should return true if source is an ArrayBufferView', () => {
    expect(isArrayBufferView(new Int8Array())).toBe(true);
    expect(isArrayBufferView(new Uint8Array())).toBe(true);
    expect(isArrayBufferView(new Uint8ClampedArray())).toBe(true);
    expect(isArrayBufferView(new Int16Array())).toBe(true);
    expect(isArrayBufferView(new Uint16Array())).toBe(true);
    expect(isArrayBufferView(new Int32Array())).toBe(true);
    expect(isArrayBufferView(new Uint32Array())).toBe(true);
    expect(isArrayBufferView(new Float32Array())).toBe(true);
    expect(isArrayBufferView(new Float64Array())).toBe(true);
  });

  it('should return false if source is not an ArrayBufferView', () => {
    expect(isArrayBufferView(undefined)).toBe(false);
    expect(isArrayBufferView(null)).toBe(false);
    expect(isArrayBufferView([])).toBe(false);
    expect(isArrayBufferView({})).toBe(false);
    expect(isArrayBufferView('arraybufferview')).toBe(false);
    expect(isArrayBufferView(123)).toBe(false);
  });
});

describe('isArguments', () => {
  it('should return true if source is an arguments object', () => {
    function testFunction() {
      expect(isArguments(arguments)).toBe(true);
    }
    testFunction();
  });

  it('should return false if source is not an arguments object', () => {
    expect(isArguments(undefined)).toBe(false);
    expect(isArguments(null)).toBe(false);
    expect(isArguments([])).toBe(false);
    expect(isArguments({})).toBe(false);
    expect(isArguments('arguments')).toBe(false);
    expect(isArguments(123)).toBe(false);
  });
});
