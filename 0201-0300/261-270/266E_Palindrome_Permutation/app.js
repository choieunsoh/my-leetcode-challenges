// 266. Palindrome Permutation
// https://leetcode.com/problems/palindrome-permutation/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {
  const a = 'a'.charCodeAt(0);
  const counts = new Array(26).fill(0);
  let odds = 0;
  for (let i = 0; i < s.length; i++) {
    const ch = s.charCodeAt(i) - a;
    counts[ch]++;
    if (counts[ch] % 2 === 0) {
      odds--;
    } else {
      odds++;
    }
  }
  return odds < 2;
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
