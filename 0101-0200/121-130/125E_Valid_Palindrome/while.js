// https://leetcode.com/problems/valid-palindrome/
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase();
  let left = 0;
  let right = s.length - 1;

  function isInvalid(index) {
    const code = s.charCodeAt(index);
    return (code < 48 || code > 57) && (code < 97 || code > 122);
  }

  while (left < right) {
    while (left < right && isInvalid(left)) left++;
    while (left < right && isInvalid(right)) right--;

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
