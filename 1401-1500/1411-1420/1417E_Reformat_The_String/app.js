// 1417. Reformat The String
// https://leetcode.com/problems/reformat-the-string/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
  let chars = '';
  let digits = '';
  for (const char of s) {
    if (char >= 'a' && char <= 'z') {
      chars += char;
    } else if (char >= '0' && char <= '9') {
      digits += char;
    }
  }

  if (Math.abs(chars.length - digits.length) > 1) {
    return '';
  }

  if (chars.length <= digits.length) {
    [chars, digits] = [digits, chars];
  }

  let result = '';
  let charIndex = 0;
  let digitIndex = 0;
  const minLen = Math.min(chars.length, digits.length);
  while (digitIndex < minLen) {
    result += chars[charIndex++];
    result += digits[digitIndex++];
  }

  if (chars.length !== digits.length) {
    result += chars[charIndex];
  }

  return result;
};

var s = 'a0b1c2';
var expected = '0a1b2c';
var result = reformat(s);
console.log(result, result === expected);

var s = 'leetcode';
var expected = '';
var result = reformat(s);
console.log(result, result === expected);

var s = '1229857369';
var expected = '';
var result = reformat(s);
console.log(result, result === expected);
