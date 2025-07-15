// 3136. Valid Word
// https://leetcode.com/problems/valid-word/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function (word) {
  if (word.length < 3) {
    return false;
  }
  let hasVowel = false;
  let hasConsonant = false;
  for (const c of word) {
    if (/[a-zA-Z]/.test(c)) {
      const ch = c.toLowerCase();
      if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
        hasVowel = true;
      } else {
        hasConsonant = true;
      }
    } else if (!/\d/.test(c)) {
      return false;
    }
  }
  return hasVowel && hasConsonant;
};

var word = '234Adas';
var expected = true;
var result = isValid(word);
console.log(result, result === expected);

var word = 'b3';
var expected = false;
var result = isValid(word);
console.log(result, result === expected);

var word = 'a3$e';
var expected = false;
var result = isValid(word);
console.log(result, result === expected);
