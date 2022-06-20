// https://leetcode.com/problems/reverse-only-letters/
// 917. Reverse Only Letters
/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  let left = 0;
  let right = s.length - 1;
  s = s.split('');

  function isLetter(c) {
    return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
  }

  while (left < right) {
    while (left < s.length && !isLetter(s[left])) {
      left++;
    }
    while (right >= 0 && !isLetter(s[right])) {
      right--;
    }
    if (left < right) {
      [s[left], s[right]] = [s[right], s[left]];
      left++;
      right--;
    }
  }
  return s.join('');
};

var s = 'ab-cd';
var expected = 'dc-ba';
var result = reverseOnlyLetters(s);
console.log(result, result === expected);

var s = 'a-bC-dEf-ghIj';
var expected = 'j-Ih-gfE-dCba';
var result = reverseOnlyLetters(s);
console.log(result, result === expected);

var s = 'Test1ng-Leet=code-Q!';
var expected = 'Qedo1ct-eeLg=ntse-T!';
var result = reverseOnlyLetters(s);
console.log(result, result === expected);
