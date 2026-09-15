// 2472. Maximum Number of Non-overlapping Palindrome Substrings
// https://leetcode.com/problems/maximum-number-of-non-overlapping-palindrome-substrings/description/
// T.C.: O(n*k)
// S.C.: O(1)
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxPalindromes = function (s, k) {
  const n = s.length;
  let result = 0;
  let start = 0;

  for (let r = k - 1; r < n; r++) {
    let l = r - k + 1;
    if (l >= start && check(l, r)) {
      result++;
      start = r + 1;
      continue;
    }

    l = r - k;
    if (l >= start && check(l, r)) {
      result++;
      start = r + 1;
    }
  }

  return result;

  function check(l, r) {
    while (l < r) {
      if (s[l++] !== s[r--]) {
        return false;
      }
    }
    return true;
  }
};

var s = 'abaccdbbd',
  k = 3;
var expected = 2;
var result = maxPalindromes(s, k);
console.log(result, result === expected);

var s = 'adbcda',
  k = 2;
var expected = 0;
var result = maxPalindromes(s, k);
console.log(result, result === expected);
