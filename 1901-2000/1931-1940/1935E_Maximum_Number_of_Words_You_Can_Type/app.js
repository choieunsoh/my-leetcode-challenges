// 1935. Maximum Number of Words You Can Type
// https://leetcode.com/problems/maximum-number-of-words-you-can-type/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
  const words = text.split(' ');
  const broken = new Set(brokenLetters);
  let brokenCount = 0;
  for (const word of words) {
    for (const char of word) {
      if (broken.has(char)) {
        brokenCount++;
        break;
      }
    }
  }
  return words.length - brokenCount;
};

var text = 'hello world',
  brokenLetters = 'ad';
var expected = 1;
var result = canBeTypedWords(text, brokenLetters);
console.log(result, result === expected);

var text = 'leet code',
  brokenLetters = 'lt';
var expected = 1;
var result = canBeTypedWords(text, brokenLetters);
console.log(result, result === expected);

var text = 'leet code',
  brokenLetters = 'e';
var expected = 0;
var result = canBeTypedWords(text, brokenLetters);
console.log(result, result === expected);
