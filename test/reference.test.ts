import { describe, expect, it } from "vitest";

import {
  isArray,
  isObject,
  isFunction,
} from '../index';

describe('isFunction', () => {
  it('should return true if source is a function', () => {
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction(function() {})).toBe(true);
    expect(isFunction(function namedFunction() {})).toBe(true);
    expect(isFunction(class MyClass {})).toBe(true);
  });

  it('should return false if source is not a function', () => {
    expect(isFunction(undefined)).toBe(false);
    expect(isFunction(null)).toBe(false);
    expect(isFunction(123)).toBe(false);
    expect(isFunction('function')).toBe(false);
    expect(isFunction({})).toBe(false);
  });
});

describe('isObject', () => {
  it('should return true if source is an object', () => {
    expect(isObject({})).toBe(true);
    expect(isObject({ key: 'value' })).toBe(true);
    expect(isObject([])).toBe(true);
    expect(isObject(() => {})).toBe(true);
    expect(isObject(new Date())).toBe(true);
  });

  it('should return false if source is not an object', () => {
    expect(isObject(undefined)).toBe(false);
    expect(isObject(null)).toBe(false);
    expect(isObject(123)).toBe(false);
    expect(isObject('object')).toBe(false);
    expect(isObject(true)).toBe(false);
  });
});

describe('isArray', () => {
  it('should return true if source is an array', () => {
    expect(isArray([])).toBe(true);
    expect(isArray([1, 2, 3])).toBe(true);
    expect(isArray(new Array())).toBe(true);
  });

  it('should return false if source is not an array', () => {
    expect(isArray(undefined)).toBe(false);
    expect(isArray(null)).toBe(false);
    expect(isArray(123)).toBe(false);
    expect(isArray('array')).toBe(false);
    expect(isArray({})).toBe(false);
  });
});
