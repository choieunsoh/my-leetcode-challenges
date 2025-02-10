// 3174. Clear Digits
// https://leetcode.com/problems/clear-digits/description/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
  let charIndex = 0;
  const str = s.split('');

  // Until we reach the end of the string
  while (charIndex < str.length) {
    if (isDigit(str[charIndex])) {
      // Remove the digit from the string
      str.splice(charIndex, 1);
      // If there is a character to the left of the digit, remove it
      if (charIndex > 0) {
        str.splice(charIndex - 1, 1);
        // Adjust the index to account for the removed character
        charIndex--;
      }
    } else {
      // Move to the next character if it's not a digit
      charIndex++;
    }
  }
  return str.join('');

  function isDigit(ch) {
    return ch >= '0' && ch <= '9';
  }
};

var s = 'abc';
var expected = 'abc';
var result = clearDigits(s);
console.log(result, result === expected);

var s = 'cb34';
var expected = '';
var result = clearDigits(s);
console.log(result, result === expected);
