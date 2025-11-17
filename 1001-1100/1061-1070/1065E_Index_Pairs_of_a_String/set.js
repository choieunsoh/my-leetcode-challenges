// 1065. Index Pairs of a String
// https://leetcode.com/problems/index-pairs-of-a-string/description/
// T.C.: O(n^3 * w log w)
// S.C.: O(w)
/**
 * @param {string} text
 * @param {string[]} words
 * @return {number[][]}
 */
var indexPairs = function (text, words) {
  const result = [];
  const n = text.length;
  const wordSet = new Set(words);
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const target = text.slice(i, j + 1);
      if (wordSet.has(target)) {
        result.push([i, j]);
      }
    }
  }
  return result.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
};

var text = 'thestoryofleetcodeandme',
  words = ['story', 'fleet', 'leetcode'];
var expected = [
  [3, 7],
  [9, 13],
  [10, 17],
];
var result = indexPairs(text, words);
console.log(result, result.join() === expected.join());

var text = 'ababa',
  words = ['aba', 'ab'];
var expected = [
  [0, 1],
  [0, 2],
  [2, 3],
  [2, 4],
];
var result = indexPairs(text, words);
console.log(result, result.join() === expected.join());
