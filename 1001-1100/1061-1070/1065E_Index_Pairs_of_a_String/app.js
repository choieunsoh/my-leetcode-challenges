// 1065. Index Pairs of a String
// https://leetcode.com/problems/index-pairs-of-a-string/description/
// T.C.: O(n*m*w)
// S.C.: O(1)
/**
 * @param {string} text
 * @param {string[]} words
 * @return {number[][]}
 */
var indexPairs = function (text, words) {
  const result = [];
  const w = words.length;
  for (let i = 0; i < w; i++) {
    const word = words[i];
    const length = word.length;
    let index = 0;

    do {
      index = text.indexOf(word, index);

      if (index !== -1) {
        result.push([index, index + length - 1]);
        index++;
      }
    } while (index !== -1);
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
