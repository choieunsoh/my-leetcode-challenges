// 76. Minimum Window Substring
// https://leetcode.com/problems/minimum-window-substring/
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const counter = Array(128).fill(0);
  for (let i = 0; i < t.length; i++) {
    const code = t.charCodeAt(i);
    counter[code]++;
  }

  const MAX = Number.MAX_SAFE_INTEGER;
  let minLength = MAX;
  let remainChar = t.length;
  let start = 0;
  let left = 0;
  let right = 0;
  while (right < s.length) {
    const indexR = s.charCodeAt(right++);
    if (counter[indexR]-- > 0) remainChar--;

    while (remainChar === 0) {
      if (right - left < minLength) {
        minLength = right - left;
        start = left;
      }

      const indexL = s.charCodeAt(left++);
      if (counter[indexL]++ === 0) remainChar++;
    }
  }

  if (minLength === MAX) return '';
  return s.substring(start, start + minLength);
};

var s = 'ADOBECODEBANC',
  t = 'ABC';
var expected = 'BANC';
var result = minWindow(s, t);
console.log(result, expected, result === expected);

var s = 'a',
  t = 'a';
var expected = 'a';
var result = minWindow(s, t);
console.log(result, expected, result === expected);

var s = 'a',
  t = 'aa';
var expected = '';
var result = minWindow(s, t);
console.log(result, expected, result === expected);

var s = 'ab',
  t = 'a';
var expected = 'a';
var result = minWindow(s, t);
console.log(result, expected, result === expected);

var s = 'bba',
  t = 'ab';
var expected = 'ba';
var result = minWindow(s, t);
console.log(result, expected, result === expected);
