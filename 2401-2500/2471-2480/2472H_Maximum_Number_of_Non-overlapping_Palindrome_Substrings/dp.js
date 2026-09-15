// 2472. Maximum Number of Non-overlapping Palindrome Substrings
// https://leetcode.com/problems/maximum-number-of-non-overlapping-palindrome-substrings/description/
// T.C.: O(n^2)
// S.C.: O(n^2)
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxPalindromes = function (s, k) {
  const n = s.length;
  const isPalindrome = Array.from({ length: n }, () => Array(n).fill(false));

  for (let len = 1; len <= n; len++) {
    for (let left = 0; left + len <= n; left++) {
      const right = left + len - 1;
      isPalindrome[left][right] = s[left] === s[right] && (len <= 2 || isPalindrome[left + 1][right - 1]);
    }
  }

  const dp = Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i - 1];
    for (let j = 0; j + k <= i; j++) {
      if (isPalindrome[j][i - 1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return dp[n];
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
