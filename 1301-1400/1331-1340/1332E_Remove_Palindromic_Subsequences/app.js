// https://leetcode.com/problems/remove-palindromic-subsequences/
// 1332. Remove Palindromic Subsequences
/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return 2;
    }
    left++;
    right--;
  }
  return 1;
};

var s = 'ababa';
var expected = 1;
var result = removePalindromeSub(s);
console.log(result, result === expected);

var s = 'abb';
var expected = 2;
var result = removePalindromeSub(s);
console.log(result, result === expected);

var s = 'baabb';
var expected = 2;
var result = removePalindromeSub(s);
console.log(result, result === expected);
