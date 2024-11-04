// 3163. String Compression III
// https://leetcode.com/problems/string-compression-iii/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function (word) {
  let result = '';
  let index = 0;
  let count = 1;
  while (index < word.length) {
    while (count < 9 && word[index] === word[index + 1]) {
      count++;
      index++;
    }
    result += count + word[index];
    count = 1;
    index++;
  }
  return result;
};

var word = 'abcde';
var expected = '1a1b1c1d1e';
var result = compressedString(word);
console.log(result, result === expected);

var word = 'aaaaaaaaaaaaaabb';
var expected = '9a5a2b';
var result = compressedString(word);
console.log(result, result === expected);
