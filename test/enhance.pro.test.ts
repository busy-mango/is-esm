import { describe, expect, it } from "vitest";

import {
  isValidKey,
  isArguments,
  isArrayBufferLike,
  isArrayBufferView,
  isBufferSource,
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

describe('isBufferSource function', () => {
  it('should return true for Uint8Array', () => {
    expect(isBufferSource(new Uint8Array([65, 66, 67]))).toBe(true);
    expect(isBufferSource(new Uint16Array([65, 66, 67]))).toBe(true);
    expect(isBufferSource(new Uint32Array([65, 66, 67]))).toBe(true);
  });

  it('should return true for ArrayBuffer', () => {
    const buffer = new ArrayBuffer(8);
    expect(isBufferSource(buffer)).toBe(true);
  });

  it('should return true for TypedArray', () => {
    expect(isBufferSource(new Float32Array([1, 2, 3, 4]))).toBe(true);
    expect(isBufferSource(new Float64Array([1, 2, 3, 4]))).toBe(true);
  });

  it('should return true for TypedArray', () => {
    expect(isBufferSource(new Int8Array([1, 2, 3, 4]))).toBe(true);
    expect(isBufferSource(new Int16Array([1, 2, 3, 4]))).toBe(true);
    expect(isBufferSource(new Int32Array([1, 2, 3, 4]))).toBe(true);
  });

  it('should return true for DataView', () => {
    const buffer = new DataView(new ArrayBuffer(16));
    expect(isBufferSource(buffer)).toBe(true);
  });

  it('should return false for non-BufferSource types', () => {
    expect(isBufferSource(null)).toBe(false);
    expect(isBufferSource(undefined)).toBe(false);
    expect(isBufferSource('string')).toBe(false);
    expect(isBufferSource(123)).toBe(false);
    expect(isBufferSource({})).toBe(false);
    expect(isBufferSource([])).toBe(false);
    expect(isBufferSource(new Map())).toBe(false);
    expect(isBufferSource(new Set())).toBe(false);
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
