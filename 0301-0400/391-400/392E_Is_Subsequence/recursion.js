// 392. Is Subsequence
// https://leetcode.com/problems/is-subsequence/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  return isSubsequenceRecursive(0, 0);

  function isSubsequenceRecursive(sIndex, tIndex) {
    if (sIndex === s.length) return true;
    if (tIndex === t.length) return false;
    if (s[sIndex] === t[tIndex]) return isSubsequenceRecursive(sIndex + 1, tIndex + 1);
    return isSubsequenceRecursive(sIndex, tIndex + 1);
  }
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
