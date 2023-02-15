// 392. Is Subsequence
// https://leetcode.com/problems/is-subsequence/
var isSubsequence = function (s: string, t: string): boolean {
  let left = 0;
  let right = 0;
  while (left < s.length && right < t.length) {
    if (s[left] === t[right]) left++;
    right++;
  }
  if (left === s.length) return true;
  return false;
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
