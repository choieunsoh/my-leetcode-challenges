// 1347. Minimum Number of Steps to Make Two Strings Anagram
// https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
  const a = 'a'.charCodeAt(0);
  if (s.length !== t.length) return -1;

  const counter = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    const ch = s.charCodeAt(i) - a;
    counter[ch]++;
  }
  for (let i = 0; i < t.length; i++) {
    const ch = t.charCodeAt(i) - a;
    if (counter[ch] > 0) counter[ch]--;
  }
  return counter.reduce((s, x) => s + x, 0);
};

var s = 'bab',
  t = 'aba';
var expected = 1;
var result = minSteps(s, t);
console.log(result, result === expected);

var s = 'leetcode',
  t = 'practice';
var expected = 5;
var result = minSteps(s, t);
console.log(result, result === expected);

var s = 'anagram',
  t = 'mangaar';
var expected = 0;
var result = minSteps(s, t);
console.log(result, result === expected);
