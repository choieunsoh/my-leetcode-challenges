// 1216. Valid Palindrome III
// https://leetcode.com/problems/valid-palindrome-iii/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var isValidPalindrome = function (s, k) {
  const n = s.length;
  const memo = new Array(n).fill(0);
  for (let i = n - 2; i >= 0; i--) {
    let prev = 0;
    for (let j = i + 1; j < n; j++) {
      const temp = memo[j];
      if (s.charAt(i) === s.charAt(j)) {
        memo[j] = prev;
      } else {
        memo[j] = 1 + Math.min(memo[j], memo[j - 1]);
      }
      prev = temp;
    }
  }
  return memo[n - 1] <= k;
};

var s = 'abcdeca',
  k = 2;
var expected = true;
var result = isValidPalindrome(s, k);
console.log(result, result === expected);

var s = 'abbababa',
  k = 1;
var expected = true;
var result = isValidPalindrome(s, k);
console.log(result, result === expected);
