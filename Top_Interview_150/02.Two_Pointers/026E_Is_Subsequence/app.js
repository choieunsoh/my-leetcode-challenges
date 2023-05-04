// 392. Is Subsequence
// https://leetcode.com/problems/is-subsequence/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let sIndex = 0;
  for (let tIndex = 0; tIndex < t.length; tIndex++) {
    if (s.charAt(sIndex) === t.charAt(tIndex)) sIndex++;
    if (sIndex === s.length) return true;
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

var s = 'abc',
  t = '';
var expected = false;
var result = isSubsequence(s, t);
console.log(result, result === expected);
