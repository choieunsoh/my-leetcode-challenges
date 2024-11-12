// 1996. The Number of Weak Characters in the Game
// https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/description/
// T.C.: O(n log n)
// S.C.: O(log n)
/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function (properties) {
  properties.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
  let maxDefense = 0;
  let weakCharacters = 0;
  for (let i = properties.length - 1; i >= 0; i--) {
    if (properties[i][1] < maxDefense) {
      weakCharacters++;
    }
    maxDefense = Math.max(maxDefense, properties[i][1]);
  }
  return weakCharacters;
};

var properties = [
  [5, 5],
  [6, 3],
  [3, 6],
];
var expected = 0;
var result = numberOfWeakCharacters(properties);
console.log(result, result === expected);

var properties = [
  [2, 2],
  [3, 3],
];
var expected = 1;
var result = numberOfWeakCharacters(properties);
console.log(result, result === expected);

var properties = [
  [1, 5],
  [10, 4],
  [4, 3],
];
var expected = 1;
var result = numberOfWeakCharacters(properties);
console.log(result, result === expected);
