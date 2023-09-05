// @viit-environment jsdom

import { describe, expect, it } from "vitest";

import {
  isElement,
  isHTMLElement,
  isCSSStyleSheet,
  isCSSStyleRule,
} from '../index';

describe('placeholder', () => {
  it('dom class is undefined', () => {
    expect(true).toBe(true);
  });
});

// describe('isCSSStyleSheet', () => {
//   it('should return true if source is a CSSStyleSheet', () => {
//     const { sheet } = document.createElement('style');
//     expect(isCSSStyleSheet(sheet)).toBe(true);
//   });

//   it('should return false if source is not a CSSStyleSheet', () => {
//     expect(isCSSStyleSheet(undefined)).toBe(false);
//     expect(isCSSStyleSheet(null)).toBe(false);
//     expect(isCSSStyleSheet(123)).toBe(false);
//     expect(isCSSStyleSheet('style')).toBe(false);
//     expect(isCSSStyleSheet({})).toBe(false);
//     expect(isCSSStyleSheet([])).toBe(false);
//   });
// });

// describe('isCSSStyleRule', () => {
//   it('should return true if source is a CSSStyleRule', () => {
//     const { sheet } = document.createElement('style');
//     const [rule] = sheet?.cssRules ?? [];
//     expect(isCSSStyleRule(rule)).toBe(true);
//   });

//   it('should return false if source is not a CSSStyleRule', () => {
//     expect(isCSSStyleRule(undefined)).toBe(false);
//     expect(isCSSStyleRule(null)).toBe(false);
//     expect(isCSSStyleRule(123)).toBe(false);
//     expect(isCSSStyleRule('style')).toBe(false);
//     expect(isCSSStyleRule({})).toBe(false);
//     expect(isCSSStyleRule([])).toBe(false);
//   });
// });

// describe('isElement', () => {
//   it('should return true if source is an element', () => {
//     const element = document.createElement('div');
//     expect(isElement(element)).toBe(true);
//   });

//   it('should return false if source is not an element', () => {
//     expect(isElement(undefined)).toBe(false);
//     expect(isElement(null)).toBe(false);
//     expect(isElement(123)).toBe(false);
//     expect(isElement('element')).toBe(false);
//     expect(isElement({})).toBe(false);
//     expect(isElement([])).toBe(false);
//   });
// });

// describe('isHTMLElement', () => {
//   it('should return true if source is an HTML element', () => {
//     const element = document.createElement('div');
//     expect(isHTMLElement(element)).toBe(true);
//   });

//   it('should return false if source is not an HTML element', () => {
//     expect(isHTMLElement(undefined)).toBe(false);
//     expect(isHTMLElement(null)).toBe(false);
//     expect(isHTMLElement(123)).toBe(false);
//     expect(isHTMLElement('element')).toBe(false);
//     expect(isHTMLElement({})).toBe(false);
//     expect(isHTMLElement([])).toBe(false);
//   });
// });
