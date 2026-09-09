// 245. Shortest Word Distance III
// https://leetcode.com/problems/shortest-word-distance-iii/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestWordDistance = function (wordsDict, word1, word2) {
  const indices = [];

  // Store the indices of word1 or word2 and an extra integer in the pair
  // as 0 if the string is word1 or 1 if the string is word2.
  for (let i = 0; i < wordsDict.length; i++) {
    if (wordsDict[i] === word1) {
      indices.push([i, 0]);
    }
    if (wordsDict[i] === word2) {
      indices.push([i, 1]);
    }
  }

  // Initialize it to maximum integer as it will store the minimum distance.
  let shortestDistance = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < indices.length - 1; i++) {
    // If the two consecutive pairs have both different values
    if (indices[i][1] !== indices[i + 1][1] && indices[i][0] !== indices[i + 1][0]) {
      // Find the difference between indices and update shortestDistance
      shortestDistance = Math.min(shortestDistance, indices[i + 1][0] - indices[i][0]);
    }
  }
  return shortestDistance;
};

var wordsDict = ['practice', 'makes', 'perfect', 'coding', 'makes'],
  word1 = 'makes',
  word2 = 'coding';
var expected = 1;
var result = shortestWordDistance(wordsDict, word1, word2);
console.log(result, result === expected);

var wordsDict = ['practice', 'makes', 'perfect', 'coding', 'makes'],
  word1 = 'makes',
  word2 = 'makes';
var expected = 3;
var result = shortestWordDistance(wordsDict, word1, word2);
console.log(result, result === expected);
