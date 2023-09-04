import { describe, expect, it } from "vitest";

import { isUndefined, isNull, isNil, isString } from '../src/primitive';

describe('isUndefined', () => {
  it('responsibility', () => {
    const source = undefined;
    expect(isUndefined(source)).toBe(true);
  });
  it('boundary', () => {
    [
      null,
      1,
      '2',
      new Date(),
      0,
      -1,
      {},
      [],
    ].forEach((source) => {
      expect(isUndefined(source)).toBe(false);
    });
  });
});

describe('isNull', () => {
  it('responsibility', () => {
    const source = null;
    expect(isNull(source)).toBe(true);
  });
  it('boundary', () => {
    [
      undefined,
      1,
      '2',
      new Date(),
      0,
      -1,
      {},
      [],
    ].forEach((source) => {
      expect(isNull(source)).toBe(false);
    });
  });
});

describe('isNil', () => {
  it('responsibility', () => {
    const source1 = null;
    const source2 = undefined;
    expect(isNil(source1)).toBe(true);
    expect(isNil(source2)).toBe(true);
  });
  it('boundary', () => {
    [
      1,
      '2',
      new Date(),
      0,
      -1,
      {},
      [],
    ].forEach((source) => {
      expect(isNil(source)).toBe(false);
    });
  });
});

describe('isString', () => {
  it('responsibility', () => {
    const source1 = 'null';
    const source2 = new String(undefined);
    const source3 = (33).toString();
    expect(isString(source1)).toBe(true);
    expect(isString(source2)).toBe(true);
    expect(isString(source3)).toBe(true);
  });
  it('boundary', () => {
    [
      13,
      new Date(),
      {},
      [],
      true,
    ].forEach((source) => {
      expect(isNil(source)).toBe(false);
    });
  });
});
