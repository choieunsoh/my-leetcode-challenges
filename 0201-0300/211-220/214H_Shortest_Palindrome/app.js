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
  const rs = s.split('').reverse().join('');
  for (let i = 0; i < n; i++) {
    const firstPart = s.substring(0, n - i);
    const secondPart = rs.substring(i);
    if (firstPart === secondPart) {
      return rs.substring(0, i) + s;
    }
  }
  return '';
};

var s = 'aacecaaa';
var expected = 'aaacecaaa';
var result = shortestPalindrome(s);
console.log(result, result === expected);

var s = 'abcd';
var expected = 'dcbabcd';
var result = shortestPalindrome(s);
console.log(result, result === expected);
