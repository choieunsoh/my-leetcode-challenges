// 2300. Successful Pairs of Spells and Potions
// https://leetcode.com/problems/successful-pairs-of-spells-and-potions/
/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
  const n = potions.length;
  potions.sort((a, b) => a - b);
  const minPotion = potions[0];
  const maxPotion = potions[n - 1];

  const result = Array(spells.length).fill(0);
  for (let i = 0; i < spells.length; i++) {
    const spell = spells[i];
    if (spell * maxPotion < success) continue;
    if (spell * minPotion >= success) {
      result[i] = n;
    } else {
      const index = binarySearch(spell);
      result[i] = n - index;
    }
  }

  return result;

  function binarySearch(spell) {
    let left = 0;
    let right = potions.length - 1;
    let minIndexSuccess = right + 1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      const strength = potions[mid] * spell;
      if (strength >= success) {
        minIndexSuccess = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return minIndexSuccess;
  }
};

var spells = [5, 1, 3],
  potions = [1, 2, 3, 4, 5],
  success = 7;
var expected = [4, 0, 3];
var result = successfulPairs(spells, potions, success);
console.log(result, result.join() === expected.join());

var spells = [3, 1, 2],
  potions = [8, 5, 8],
  success = 16;
var expected = [2, 0, 2];
var result = successfulPairs(spells, potions, success);
console.log(result, result.join() === expected.join());

var spells = [3],
  potions = [2, 3, 4],
  success = 16;
var expected = [0];
var result = successfulPairs(spells, potions, success);
console.log(result, result.join() === expected.join());

var spells = [3, 8],
  potions = [2, 3, 4],
  success = 16;
var expected = [0, 3];
var result = successfulPairs(spells, potions, success);
console.log(result, result.join() === expected.join());

var spells = [3],
  potions = [2, 3, 4],
  success = 1;
var expected = [3];
var result = successfulPairs(spells, potions, success);
console.log(result, result.join() === expected.join());
