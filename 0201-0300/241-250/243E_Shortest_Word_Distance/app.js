// 243. Shortest Word Distance
// https://leetcode.com/problems/shortest-word-distance/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function (wordsDict, word1, word2) {
  let result = wordsDict.length;
  let index1 = -1;
  let index2 = -1;
  for (let index = 0; index < wordsDict.length; index++) {
    const word = wordsDict[index];
    if (word === word1) index1 = index;
    if (word === word2) index2 = index;
    if (index1 !== -1 && index2 !== -1) {
      result = Math.min(result, Math.abs(index1 - index2));
    }
  }
  return result;
};

var wordsDict = ['practice', 'makes', 'perfect', 'coding', 'makes'],
  word1 = 'coding',
  word2 = 'practice';
var expected = 3;
var result = shortestDistance(wordsDict, word1, word2);
console.log(result, result === expected);

var wordsDict = ['practice', 'makes', 'perfect', 'coding', 'makes'],
  word1 = 'makes',
  word2 = 'coding';
var expected = 1;
var result = shortestDistance(wordsDict, word1, word2);
console.log(result, result === expected);

var wordsDict = ['a', 'a', 'b', 'b'],
  word1 = 'a',
  word2 = 'b';
var expected = 1;
var result = shortestDistance(wordsDict, word1, word2);
console.log(result, result === expected);
