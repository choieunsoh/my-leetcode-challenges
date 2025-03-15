// 266. Palindrome Permutation
// https://leetcode.com/problems/palindrome-permutation/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {
  const map = new Array(128).fill(0);
  for (let i = 0; i < s.length; i++) {
    map[s.charCodeAt(i)]++;
  }
  let count = 0;
  for (let char = 0; char < map.length && count <= 1; char++) {
    count += map[char] % 2;
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
