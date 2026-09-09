// 245. Shortest Word Distance III
// https://leetcode.com/problems/shortest-word-distance-iii/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestWordDistance = function (wordsDict, word1, word2) {
  let indices1 = [];
  let indices2 = [];

  for (let i = 0; i < wordsDict.length; i++) {
    if (wordsDict[i] === word1) {
      indices1.push(i);
    }
    if (wordsDict[i] === word2) {
      indices2.push(i);
    }
  }

  let shortestDistance = Number.MAX_SAFE_INTEGER;

  for (let index of indices1) {
    let nextIndex = upperBound(indices2, index);

    if (nextIndex < indices2.length) {
      shortestDistance = Math.min(shortestDistance, indices2[nextIndex] - index);
    }

    if (nextIndex > 0 && indices2[nextIndex - 1] !== index) {
      shortestDistance = Math.min(shortestDistance, index - indices2[nextIndex - 1]);
    }
  }

  return shortestDistance;

  function upperBound(indices, value) {
    let left = 0;
    let right = indices.length - 1;
    let index = indices.length;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (indices[mid] > value) {
        index = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return index;
  }
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
