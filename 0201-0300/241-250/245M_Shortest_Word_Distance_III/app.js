// 245. Shortest Word Distance III
// https://leetcode.com/problems/shortest-word-distance-iii/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestWordDistance = function (wordsDict, word1, word2) {
  // Initialize it to maximum integer as it will store the minimum distance.
  let shortestDistance = Number.MAX_SAFE_INTEGER;

  // Initialize it to -1 as it's not pointing to any index yet.
  let prevIndex = -1;
  for (let i = 0; i < wordsDict.length; i++) {
    // If the string at this index is either word1 or word2
    if (wordsDict[i] === word1 || wordsDict[i] === word2) {
      // If prevIndex is present and pointing to a different string than the string at the current index
      // Or if both word1 and word2 are the same.
      if (prevIndex !== -1 && (wordsDict[prevIndex] !== wordsDict[i] || word1 === word2)) {
        shortestDistance = Math.min(shortestDistance, i - prevIndex);
      }
      // Update the prevIndex to point it to the current index.
      prevIndex = i;
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
