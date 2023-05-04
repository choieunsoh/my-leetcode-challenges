// 125. Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }

  return true;
};
var s = 'A man, a plan, a canal: Panama';
var expect = true;
var result = isPalindrome(s);
console.log(result, result === expect);

var s = 'race a car';
var expect = false;
var result = isPalindrome(s);
console.log(result, result === expect);

var s = ' ';
var expect = true;
var result = isPalindrome(s);
console.log(result, result === expect);

var s = '.,';
var expect = true;
var result = isPalindrome(s);
console.log(result, result === expect);
