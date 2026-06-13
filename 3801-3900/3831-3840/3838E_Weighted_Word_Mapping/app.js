// 3838. Weighted Word Mapping
// https://leetcode.com/problems/weighted-word-mapping/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function (words, weights) {
  let result = '';
  const a = 'a'.charCodeAt(0);
  const z = 'z'.charCodeAt(0);
  for (const word of words) {
    let sum = 0;
    for (const ch of word) {
      sum += weights[ch.charCodeAt(0) - a];
    }
    // 0 -> z, 1 -> y, ..., 25 -> a
    result += String.fromCharCode(z - (sum % 26));
  }

  return result;
};

var words = ['abcd', 'def', 'xyz'],
  weights = [5, 3, 12, 14, 1, 2, 3, 2, 10, 6, 6, 9, 7, 8, 7, 10, 8, 9, 6, 9, 9, 8, 3, 7, 7, 2];
var expected = 'rij';
var result = mapWordWeights(words, weights);
console.log(result, result === expected);

var words = ['a', 'b', 'c'],
  weights = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
var expected = 'yyy';
var result = mapWordWeights(words, weights);
console.log(result, result === expected);

var words = ['abcd'],
  weights = [7, 5, 3, 4, 3, 5, 4, 9, 4, 2, 2, 7, 10, 2, 5, 10, 6, 1, 2, 2, 4, 1, 3, 4, 4, 5];
var expected = 'g';
var result = mapWordWeights(words, weights);
console.log(result, result === expected);
