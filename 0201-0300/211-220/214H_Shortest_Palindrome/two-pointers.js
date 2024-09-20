// 214. Shortest Palindrome
// https://leetcode.com/problems/shortest-palindrome/description/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
  const n = s.length;
  let left = 0;
  for (let right = n - 1; right >= 0; right--) {
    if (s[left] === s[right]) {
      left++;
    }
  }

  if (left === n) return s;

  const nonPalindromeSuffix = s.slice(left);
  const reversedNonPalindromeSuffix = reverse(nonPalindromeSuffix);
  const shortestPalindromeMiddle = shortestPalindrome(s.slice(0, left));

  return reversedNonPalindromeSuffix + shortestPalindromeMiddle + nonPalindromeSuffix;

  function reverse(str) {
    return str.split('').reverse().join('');
  }
};

var s = 'aacecaaa';
var expected = 'aaacecaaa';
var result = shortestPalindrome(s);
console.log(result, result === expected);

var s = 'abcd';
var expected = 'dcbabcd';
var result = shortestPalindrome(s);
console.log(result, result === expected);
