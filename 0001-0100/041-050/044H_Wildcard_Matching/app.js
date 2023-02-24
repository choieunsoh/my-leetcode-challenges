// 44. Wildcard Matching
// https://leetcode.com/problems/wildcard-matching/
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (string, pattern) {
  let s = 0,
    p = 0;
  let starIdx = -1,
    pointer = -1;

  while (s < string.length) {
    if ((p < pattern.length && string[s] === pattern[p]) || pattern[p] === '?') {
      s++;
      p++;
    } else if (p < pattern.length && pattern[p] === '*') {
      starIdx = p;
      pointer = s;
      p++;
    } else if (starIdx === -1) return false;
    else {
      p = starIdx + 1;
      s = pointer + 1;
      pointer = s;
    }
  }
  for (let idx = p; idx < pattern.length; idx++) {
    if (pattern[idx] !== '*') return false;
  }
  return true;
};

var s = 'aa',
  p = 'aa';
var expected = true;
var result = isMatch(s, p);
console.log(result, result === expected);

var s = 'aa',
  p = 'a';
var expected = false;
var result = isMatch(s, p);
console.log(result, result === expected);

var s = 'aa',
  p = '*';
var expected = true;
var result = isMatch(s, p);
console.log(result, result === expected);

var s = 'cb',
  p = '?a';
var expected = false;
var result = isMatch(s, p);
console.log(result, result === expected);
