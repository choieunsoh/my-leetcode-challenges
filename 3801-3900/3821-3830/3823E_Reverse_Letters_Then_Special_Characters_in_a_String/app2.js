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
  const letters = [];
  const specials = [];
  const charTypes = new Array(n);

  for (let i = 0; i < n; i++) {
    const char = s[i];
    if (char >= 'a' && char <= 'z') {
      letters.push(char);
      charTypes[i] = 'letter';
    } else {
      specials.push(char);
      charTypes[i] = 'special';
    }
  }

  letters.reverse();
  specials.reverse();

  const result = new Array(n);
  let letterIndex = 0;
  let specialIndex = 0;

  for (let i = 0; i < n; i++) {
    if (charTypes[i] === 'letter') {
      result[i] = letters[letterIndex++];
    } else {
      result[i] = specials[specialIndex++];
    }
  }

  return result.join('');
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
