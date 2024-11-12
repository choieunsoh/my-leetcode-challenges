// 1996. The Number of Weak Characters in the Game
// https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/description/
// T.C.: O(n+m)
// S.C.: O(m)
/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function (properties) {
  let weakCharacters = 0;
  let maxAttack = 0;
  for (const [attack] of properties) {
    maxAttack = Math.max(maxAttack, attack);
  }

  const maxDefense = new Array(maxAttack + 1).fill(0);
  for (const [attack, defense] of properties) {
    maxDefense[attack] = Math.max(maxDefense[attack], defense);
  }

  for (let i = maxAttack - 1; i >= 0; i--) {
    maxDefense[i] = Math.max(maxDefense[i], maxDefense[i + 1]);
  }

  for (const [attack, defense] of properties) {
    if (defense < maxDefense[attack + 1]) {
      weakCharacters++;
    }
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
