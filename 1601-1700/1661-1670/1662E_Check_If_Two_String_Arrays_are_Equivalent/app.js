// 1662. Check If Two String Arrays are Equivalent
// https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/
/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  return word1.join('') === word2.join('');
};

var word1 = ['ab', 'c'],
  word2 = ['a', 'bc'];
var expected = true;
var result = arrayStringsAreEqual(word1, word2);
console.log(result, result === expected);

var word1 = ['a', 'cb'],
  word2 = ['ab', 'c'];
var expected = false;
var result = arrayStringsAreEqual(word1, word2);
console.log(result, result === expected);

var word1 = ['abc', 'd', 'defg'],
  word2 = ['abcddefg'];
var expected = true;
var result = arrayStringsAreEqual(word1, word2);
console.log(result, result === expected);
