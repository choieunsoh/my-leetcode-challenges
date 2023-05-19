// 9. Palindrome Number
// https://leetcode.com/problems/palindrome-number/
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  if (x < 10) return true;

  let num = x;
  let mod = 0;

  while (num > 0) {
    mod = (num % 10) + mod * 10;
    num = (num / 10) | 0;
  }
  return mod === x;
};

var x = 122343221;
var expected = true;
var result = isPalindrome(x);
console.log(result, result === expected);

var x = 121;
var expected = true;
var result = isPalindrome(x);
console.log(result, result === expected);

var x = -121;
var expected = false;
var result = isPalindrome(x);
console.log(result, result === expected);

var x = 0;
var expected = true;
var result = isPalindrome(x);
console.log(result, result === expected);

var x = 10;
var expected = false;
var result = isPalindrome(x);
console.log(result, result === expected);
