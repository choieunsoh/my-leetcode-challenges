// 2586. Count the Number of Vowel Strings in Range
// https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/
/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function (words, left, right) {
  let result = 0;
  const vowels = new Set('aeiou'.split(''));
  for (let i = left; i <= right; i++) {
    const word = words[i];
    const first = word.charAt(0);
    const last = word.charAt(word.length - 1);
    if (vowels.has(first) && vowels.has(last)) {
      result++;
    }
  }
  return result;
};

var words = ['are', 'amy', 'u'],
  left = 0,
  right = 2;
var expected = 2;
var result = vowelStrings(words, left, right);
console.log(result, result == expected);

var words = ['hey', 'aeo', 'mu', 'ooo', 'artro'],
  left = 1,
  right = 4;
var expected = 3;
var result = vowelStrings(words, left, right);
console.log(result, result == expected);
