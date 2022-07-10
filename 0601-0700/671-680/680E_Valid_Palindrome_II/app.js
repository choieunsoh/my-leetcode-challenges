// https://leetcode.com/problems/valid-palindrome-ii/
// 680. Valid Palindrome II
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  function isPalindrome(s, left, right) {
    while (left < right) {
      if (s[left] !== s[right]) return false;
      left++;
      right--;
    }
    return true;
  }

  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      return (
        isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)
      );
    }
  }

  return true;
};

var s = 'aba';
var expected = true;
console.log(validPalindrome(s), expected);

var s = 'abca';
var expected = true;
console.log(validPalindrome(s), expected);

var s = 'abc';
var expected = false;
console.log(validPalindrome(s), expected);
