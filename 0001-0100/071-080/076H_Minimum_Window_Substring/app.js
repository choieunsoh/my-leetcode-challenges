// 76. Minimum Window Substring
// https://leetcode.com/problems/minimum-window-substring/
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let remain = 0;
  const counter = {};
  for (let i = 0; i < t.length; i++) {
    const char = t.charAt(i);
    if (!counter[char]) {
      remain++;
      counter[char] = 0;
    }
    counter[char]++;
  }

  let start = 0;
  let end = 0;
  let minLength = Number.MAX_VALUE;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    const charR = s.charAt(right);
    if (counter[charR] !== undefined) {
      counter[charR]--;
    }
    if (counter[charR] === 0) remain--;

    while (remain === 0) {
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        start = left;
        end = right;
      }

      const charL = s.charAt(left);
      if (counter[charL] !== undefined) {
        counter[charL]++;
      }
      if (counter[charL] > 0) remain++;

      left++;
    }
  }

  if (minLength === Number.MAX_VALUE) return '';

  return s.slice(start, end + 1);
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
