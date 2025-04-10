// 392. Is Subsequence
// https://leetcode.com/problems/is-subsequence/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s === t) return true;

  let sIndex = 0;
  let tIndex = 0;
  while (tIndex < t.length) {
    if (s[sIndex] === t[tIndex]) sIndex++;
    if (sIndex === s.length) return true;
    tIndex++;
  }

  return sIndex === s.length;
};

var s = 'abc',
  t = 'ahbgdc';
var expected = true;
var result = isSubsequence(s, t);
console.log(result, result === expected);

var s = 'axc',
  t = 'ahbgdc';
var expected = false;
var result = isSubsequence(s, t);
console.log(result, result === expected);

var s = 'axc',
  t = 'axc';
var expected = true;
var result = isSubsequence(s, t);
console.log(result, result === expected);

var s = '',
  t = 'axc';
var expected = true;
var result = isSubsequence(s, t);
console.log(result, result === expected);

var s = 'axc',
  t = '';
var expected = false;
var result = isSubsequence(s, t);
console.log(result, result === expected);
