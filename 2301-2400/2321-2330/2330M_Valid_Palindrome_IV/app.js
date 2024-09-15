// 2330. Valid Palindrome IV
// https://leetcode.com/problems/valid-palindrome-iv/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {boolean}
 */
var makePalindrome = function (s) {
  let operations = 0;
  let left = 0;
  let right = s.length - 1;
  while (left <= right) {
    if (s[left] !== s[right]) {
      operations++;
      if (operations > 2) {
        return false;
      }
    }
    left++;
    right--;
  }
  return true;
};

var s = 'abcdba';
var expected = true;
var result = makePalindrome(s);
console.log(result, result === expected);

var s = 'aa';
var expected = true;
var result = makePalindrome(s);
console.log(result, result === expected);

var s = 'abcdef';
var expected = false;
var result = makePalindrome(s);
console.log(result, result === expected);
