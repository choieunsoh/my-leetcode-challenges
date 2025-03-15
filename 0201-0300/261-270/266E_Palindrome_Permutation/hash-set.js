// 266. Palindrome Permutation
// https://leetcode.com/problems/palindrome-permutation/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {
  const seen = new Set();
  for (const char of s) {
    if (seen.has(char)) {
      seen.delete(char);
    } else {
      seen.add(char);
    }
  }
  return seen.size <= 1;
};

var s = 'code';
var expected = false;
var result = canPermutePalindrome(s);
console.log(result, result === expected);

var s = 'aab';
var expected = true;
var result = canPermutePalindrome(s);
console.log(result, result === expected);

var s = 'carerac';
var expected = true;
var result = canPermutePalindrome(s);
console.log(result, result === expected);

var s = 'aaba';
var expected = false;
var result = canPermutePalindrome(s);
console.log(result, result === expected);

var s = 'aabb';
var expected = true;
var result = canPermutePalindrome(s);
console.log(result, result === expected);
