import { describe, expect, it } from "vitest";

import { isUndefined, isNull } from '../src/primitive';

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
      expect(isUndefined(source)).toBe(false);
    });
  });
});
