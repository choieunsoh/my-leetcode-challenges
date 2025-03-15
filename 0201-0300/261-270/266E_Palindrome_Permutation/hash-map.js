// 266. Palindrome Permutation
// https://leetcode.com/problems/palindrome-permutation/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s.charAt(i), (map.get(s.charAt(i)) ?? 0) + 1);
  }
  let count = 0;
  for (const [_, charCount] of map) {
    count += charCount % 2;
  }
  return count <= 1;
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
