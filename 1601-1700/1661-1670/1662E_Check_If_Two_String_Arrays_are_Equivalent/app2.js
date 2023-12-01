// 1662. Check If Two String Arrays are Equivalent
// https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/
// T.C.: O(n + m)
// S.C.: O(1)
/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  let arr1Index = 0;
  let arr2Index = 0;
  let word1Index = 0;
  let word2Index = 0;
  let w1 = word1[arr1Index];
  let w2 = word2[arr2Index];
  while (arr1Index < word1.length && arr2Index < word2.length && w1[word1Index] === w2[word2Index]) {
    if (++word1Index === w1.length) {
      word1Index = 0;
      w1 = word1[++arr1Index];
    }
    if (++word2Index === w2.length) {
      word2Index = 0;
      w2 = word2[++arr2Index];
    }
  }

  return arr1Index === word1.length && arr2Index === word2.length && word1Index === 0 && word2Index === 0;
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

var word1 = ['abc', 'd', 'defg'],
  word2 = ['abcddefgh'];
var expected = false;
var result = arrayStringsAreEqual(word1, word2);
console.log(result, result === expected);
