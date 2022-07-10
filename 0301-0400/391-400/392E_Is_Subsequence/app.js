// https://leetcode.com/problems/is-subsequence/
// 392. Is Subsequence
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s === t) return true;

  let slow = 0;
  let fast = 0;
  while (fast < t.length) {
    if (s[slow] === t[fast]) slow++;
    if (slow === s.length) return true;
    fast++;
  }

  return false;
};

var s = 'abc',
  t = 'ahbgdc';
var expected = true;
console.log(isSubsequence(s, t), expected);

var s = 'axc',
  t = 'ahbgdc';
var expected = false;
console.log(isSubsequence(s, t), expected);
