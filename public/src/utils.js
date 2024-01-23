"use strict";

/**
 *
 * @param {string} name
 * @returns string
 */
export function getCSSVariableValue(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name);
}

/**
 *
 * @param {() => void} func function to call on debounce
 * @param {number} timer debounce timeout
 * @returns
 */
export function debounce(func, timer = 500) {
  let timeoutId;
  return (...args) => {
    if (!timer && typeof func === "function") {
      func.apply(this, args);
    }
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      timeoutId = undefined;
    }, timer);
  };
}
