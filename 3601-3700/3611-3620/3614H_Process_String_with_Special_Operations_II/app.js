// 3614. Process String with Special Operations II
// https://leetcode.com/problems/process-string-with-special-operations-ii/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @param {number} k
 * @return {character}
 */
var processStr = function (s, k) {
  let len = 0;
  for (const c of s) {
    if (c === '*') {
      if (len > 0) {
        len--;
      }
    } else if (c === '#') {
      len *= 2;
    } else if (c === '%') {
      // no change
    } else {
      len++;
    }
  }

  if (k + 1 > len) {
    return '.';
  }

  for (let i = s.length - 1; i >= 0; i--) {
    const c = s[i];
    if (c === '*') {
      len++;
    } else if (c === '#') {
      if (k + 1 > (len + 1) / 2) {
        k -= Math.floor(len / 2);
      }
      len = Math.floor((len + 1) / 2);
    } else if (c === '%') {
      k = len - k - 1;
    } else {
      if (k + 1 === len) {
        return c;
      }
      len--;
    }
  }
  return '.';
};

var s = 'a#b%*',
  k = 1;
var expected = 'a';
var result = processStr(s, k);
console.log(result, result === expected);

var s = 'cd%#*#',
  k = 3;
var expected = 'd';
var result = processStr(s, k);
console.log(result, result === expected);

var s = 'z*#',
  k = 0;
var expected = '.';
var result = processStr(s, k);
console.log(result, result === expected);
