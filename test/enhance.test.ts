/**
 * @vitest-environment jsdom
 */

import { describe, expect, it } from "vitest";

import {
  isDate,
  isPromise,
  isUint8Array,
  isArrayBuffer,
  isURLSearchParams,
  isFile,
  isBlob,
  isError,
  isRegExp,
  isWeakSet,
} from '../index';

describe('isPromise', () => {
  it('should return true if source is a promise', () => {
    expect(isPromise(new Promise(() => {}))).toBe(true);
    expect(isPromise(Promise.resolve())).toBe(true);
    // reject 怎么办?
  });

  it('should return false if source is not a promise', () => {
    expect(isPromise(undefined)).toBe(false);
    expect(isPromise(null)).toBe(false);
    expect(isPromise(123)).toBe(false);
    expect(isPromise('promise')).toBe(false);
    expect(isPromise({})).toBe(false);
    expect(isPromise([])).toBe(false);
  });
});

describe('isURLSearchParams', () => {
  it('should return true if source is a URLSearchParams', () => {
    const params = new URLSearchParams();
    expect(isURLSearchParams(params)).toBe(true);
  });

  it('should return false if source is not a URLSearchParams', () => {
    expect(isURLSearchParams(undefined)).toBe(false);
    expect(isURLSearchParams(null)).toBe(false);
    expect(isURLSearchParams(123)).toBe(false);
    expect(isURLSearchParams('params')).toBe(false);
    expect(isURLSearchParams({})).toBe(false);
    expect(isURLSearchParams([])).toBe(false);
  });
});

describe('isBlob', () => {
  it('should return true if source is a Blob', () => {
    const blob = new Blob();
    expect(isBlob(blob)).toBe(true);
  });

  it('should return false if source is not a Blob', () => {
    expect(isBlob(undefined)).toBe(false);
    expect(isBlob(null)).toBe(false);
    expect(isBlob(123)).toBe(false);
    expect(isBlob('blob')).toBe(false);
    expect(isBlob({})).toBe(false);
    expect(isBlob([])).toBe(false);
  });
});

describe('isFile', () => {
  it('should return true if source is a File', () => {
    const file = new File([], 'filename');
    expect(isFile(file)).toBe(true);
  });

  it('should return false if source is not a File', () => {
    expect(isFile(undefined)).toBe(false);
    expect(isFile(null)).toBe(false);
    expect(isFile(123)).toBe(false);
    expect(isFile('file')).toBe(false);
    expect(isFile({})).toBe(false);
    expect(isFile([])).toBe(false);
  });
});

describe('isUint8Array', () => {
  it('should return true if source is an Uint8Array', () => {
    const buffer = new Uint8Array(8);
    expect(isUint8Array(buffer)).toBe(true);
  });

  it('should return false if source is not an Uint8Array', () => {
    expect(isUint8Array(undefined)).toBe(false);
    expect(isUint8Array(null)).toBe(false);
    expect(isUint8Array(123)).toBe(false);
    expect(isUint8Array('buffer')).toBe(false);
    expect(isUint8Array({})).toBe(false);
    expect(isUint8Array([])).toBe(false);
  });
});

describe('isWeakSet', () => {
  it('should return true if source is an isWeakSet', () => {
    const buffer = new WeakSet();
    expect(isWeakSet(buffer)).toBe(true);
  });

  it('should return false if source is not an isWeakSet', () => {
    expect(isWeakSet(undefined)).toBe(false);
    expect(isWeakSet(null)).toBe(false);
    expect(isWeakSet(123)).toBe(false);
    expect(isWeakSet('buffer')).toBe(false);
    expect(isWeakSet({})).toBe(false);
    expect(isWeakSet([])).toBe(false);
  });
});

describe('isArrayBuffer', () => {
  it('should return true if source is an ArrayBuffer', () => {
    const buffer = new ArrayBuffer(8);
    expect(isArrayBuffer(buffer)).toBe(true);
  });

  it('should return false if source is not an ArrayBuffer', () => {
    expect(isArrayBuffer(undefined)).toBe(false);
    expect(isArrayBuffer(null)).toBe(false);
    expect(isArrayBuffer(123)).toBe(false);
    expect(isArrayBuffer('buffer')).toBe(false);
    expect(isArrayBuffer({})).toBe(false);
    expect(isArrayBuffer([])).toBe(false);
  });
});

describe('isDate', () => {
  it('should return true if source is a Date', () => {
    const date = new Date();
    expect(isDate(date)).toBe(true);
  });

  it('should return false if source is not a Date', () => {
    expect(isDate(undefined)).toBe(false);
    expect(isDate(null)).toBe(false);
    expect(isDate(123)).toBe(false);
    expect(isDate('date')).toBe(false);
    expect(isDate({})).toBe(false);
    expect(isDate([])).toBe(false);
  });
});

describe('isRegExp', () => {
  it('should return true if source is a RegExp', () => {
    const regex = new RegExp('pattern');
    expect(isRegExp(regex)).toBe(true);
    expect(isRegExp(/asd/)).toBe(true);
  });

  it('should return false if source is not a RegExp', () => {
    expect(isRegExp(undefined)).toBe(false);
    expect(isRegExp(null)).toBe(false);
    expect(isRegExp(123)).toBe(false);
    expect(isRegExp('regex')).toBe(false);
    expect(isRegExp({})).toBe(false);
    expect(isRegExp([])).toBe(false);
  });
});

describe('isError', () => {
  it('should return true if source is an Error', () => {
    const error = new Error('error message');
    expect(isError(error)).toBe(true);
  });

  it('should return false if source is not an Error', () => {
    expect(isError(undefined)).toBe(false);
    expect(isError(null)).toBe(false);
    expect(isError(123)).toBe(false);
    expect(isError('error')).toBe(false);
    expect(isError({})).toBe(false);
    expect(isError([])).toBe(false);
  });
});
