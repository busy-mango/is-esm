/**
 * @vitest-environment jsdom
 */

import { describe, expect, it } from "vitest";

import {
  isPlainObject,
  isEmptyArray,
  isNonEmptyArray,
} from '../index';

describe('isPlainObject', () => {
  const element = document && document.createElement('div');

  it('should return false if source special constructor object', () => {
    expect(isPlainObject(new URLSearchParams())).toBe(false);
    expect(isPlainObject(new Error())).toBe(false);
    expect(isPlainObject(new FormData())).toBe(false);
    expect(isPlainObject(new Date())).toBe(false);
  });

  it('should detect plain objects', () => {
    function foo(a) {
      this.a = 1;
    }

    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject({ a: 1 })).toBe(true);
    expect(isPlainObject({ constructor: foo })).toBe(true);
    expect(isPlainObject([1, 2, 3])).toBe(false);
    expect(isPlainObject(new foo(1))).toBe(false);
    expect(isPlainObject(1)).toBe(false);
  });

  it('should return `true` for objects with a `[[Prototype]]` of `null`', () => {
    const object = Object.create(null);
    expect(isPlainObject(object)).toBe(true);

    object.constructor = Object.prototype.constructor;
    expect(isPlainObject(object)).toBe(true);
  });

  it('should return `true` for objects with a `valueOf` property', () => {
    expect(isPlainObject({ valueOf: 0 })).toBe(true);
  });

  it('should return `false` for objects with a writable `Symbol.toStringTag` property', () => {
    if (Symbol && Symbol.toStringTag) {
      const object = {};
      object[Symbol.toStringTag] = 'X';
      expect(isPlainObject(object)).toEqual(false);
    }
  });

  it('should return `false` for objects with a custom `[[Prototype]]`', () => {
    const object = Object.create({ a: 1 });
    expect(isPlainObject(object)).toBe(false);
  });

  it('should return `false` for DOM elements', () => {
    if (element) {
      expect(isPlainObject(element)).toBe(false);
    }
  });

  it('should return `false` for non-Object objects', function () {
    expect(isPlainObject(arguments)).toBe(false);
    expect(isPlainObject(Error)).toBe(false);
    expect(isPlainObject(Math)).toBe(false);
  });

  it('should return `false` for objects with a read-only `Symbol.toStringTag` property', () => {
    if (Symbol && Symbol.toStringTag) {
      const object = {};

      Object.defineProperty(object, Symbol.toStringTag, {
        configurable: true,
        enumerable: false,
        writable: false,
        value: 'X',
      });

      expect(isPlainObject(object)).toEqual(false);
    }
  });

  it('should not mutate `value`', () => {
    if (Symbol && Symbol.toStringTag) {
      const proto = {};
      proto[Symbol.toStringTag] = undefined;
      const object = Object.create(proto);

      expect(isPlainObject(object)).toBe(false);
    }
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
