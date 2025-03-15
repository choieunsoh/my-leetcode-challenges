// 266. Palindrome Permutation
// https://leetcode.com/problems/palindrome-permutation/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {
  let count = 0;
  for (let i = 0; i < 128 && count <= 1; i++) {
    let ct = 0;
    for (let j = 0; j < s.length; j++) {
      if (s.charCodeAt(j) === i) ct++;
    }
    count += ct % 2;
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
