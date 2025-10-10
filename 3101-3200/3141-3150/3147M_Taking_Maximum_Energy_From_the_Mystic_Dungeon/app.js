// 3147. Taking Maximum Energy From the Mystic Dungeon
// https://leetcode.com/problems/taking-maximum-energy-from-the-mystic-dungeon/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} energy
 * @param {number} k
 * @return {number}
 */
var maximumEnergy = function (energy, k) {
  const n = energy.length;
  const dp = new Array(n).fill(0);
  let maxEnergy = Number.MIN_SAFE_INTEGER;
  for (let i = n - 1; i >= 0; i--) {
    dp[i] = energy[i] + (dp[i + k] ?? 0);
    maxEnergy = Math.max(maxEnergy, dp[i]);
  }
  return maxEnergy;
};

var energy = [5, 2, -10, -5, 1],
  k = 3;
var expected = 3;
var result = maximumEnergy(energy, k);
console.log(result, result === expected);

var energy = [-2, -3, -1],
  k = 2;
var expected = -1;
var result = maximumEnergy(energy, k);
console.log(result, result === expected);

var energy = [5, 2, -10, -5, 1, 5],
  k = 3;
var expected = 5;
var result = maximumEnergy(energy, k);
console.log(result, result === expected);

var energy = [5, 2, -10, -5, 1, 5, 11],
  k = 2;
var expected = 12;
var result = maximumEnergy(energy, k);
console.log(result, result === expected);
