// 3136. Valid Word
// https://leetcode.com/problems/valid-word/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function (word) {
  let vowels = new Set('aeiouAEIOU');
  let vowelCount = 0;
  let consonantCount = 0;
  for (const ch of word) {
    if (!((ch >= '0' && ch <= '9') || (ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z'))) {
      return false;
    }
    if (ch >= '0' && ch <= '9') continue;
    if (vowels.has(ch)) {
      vowelCount++;
    } else {
      consonantCount++;
    }
  }
  return word.length >= 3 && vowelCount > 0 && consonantCount > 0;
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
