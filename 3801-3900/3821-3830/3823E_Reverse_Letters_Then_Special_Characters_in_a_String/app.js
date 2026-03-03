// 3823. Reverse Letters Then Special Characters in a String
// https://leetcode.com/problems/reverse-letters-then-special-characters-in-a-string/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {string}
 */
var reverseByType = function (s) {
  const n = s.length;
  const chars = s.split('');
  let charLeftIndex = 0;
  let charRightIndex = n - 1;
  while (charLeftIndex < charRightIndex) {
    while (charLeftIndex < n && !isChar(charLeftIndex)) {
      charLeftIndex++;
    }
    while (charRightIndex >= 0 && !isChar(charRightIndex)) {
      charRightIndex--;
    }
    if (charLeftIndex < charRightIndex) {
      [chars[charLeftIndex], chars[charRightIndex]] = [chars[charRightIndex], chars[charLeftIndex]];
      charLeftIndex++;
      charRightIndex--;
    }
  }

  let specialLeftIndex = 0;
  let specialRightIndex = n - 1;
  while (specialLeftIndex < specialRightIndex) {
    while (specialLeftIndex < n && isChar(specialLeftIndex)) {
      specialLeftIndex++;
    }
    while (specialRightIndex >= 0 && isChar(specialRightIndex)) {
      specialRightIndex--;
    }
    if (specialLeftIndex < specialRightIndex) {
      [chars[specialLeftIndex], chars[specialRightIndex]] = [chars[specialRightIndex], chars[specialLeftIndex]];
      specialLeftIndex++;
      specialRightIndex--;
    }
  }

  return chars.join('');

  function isChar(charIndex) {
    return chars[charIndex] >= 'a' && chars[charIndex] <= 'z';
  }
};

var s = ')ebc#da@f(';
var expected = '(fad@cb#e)';
var result = reverseByType(s);
console.log(result, result === expected);

var s = 'z';
var expected = 'z';
var result = reverseByType(s);
console.log(result, result === expected);

var s = '!@#$%^&*()';
var expected = ')(*&^%$#@!';
var result = reverseByType(s);
console.log(result, result === expected);
