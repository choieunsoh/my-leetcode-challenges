// 1768. Merge Strings Alternately
// https://leetcode.com/problems/merge-strings-alternately/
// T.C.: O(n+m)
// S.C.: O(1)
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let result = '';
  const maxLength = Math.max(word1.length, word2.length);
  for (let i = 0; i < maxLength; i++) {
    if (i < word1.length) result += word1.charAt(i);
    if (i < word2.length) result += word2.charAt(i);
  }
  return result;
};

var word1 = 'abc',
  word2 = 'pqr';
var expected = 'apbqcr';
var result = mergeAlternately(word1, word2);
console.log(result, result === expected);

var word1 = 'ab',
  word2 = 'pqrs';
var expected = 'apbqrs';
var result = mergeAlternately(word1, word2);
console.log(result, result === expected);

var word1 = 'abcd',
  word2 = 'pq';
var expected = 'apbqcd';
var result = mergeAlternately(word1, word2);
console.log(result, result === expected);
