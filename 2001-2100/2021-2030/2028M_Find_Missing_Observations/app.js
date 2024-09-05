// 2028. Find Missing Observations
// https://leetcode.com/problems/find-missing-observations/description/
// T.C.: O(m)
// S.C.: O(1)
/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function (rolls, mean, n) {
  const m = rolls.length;
  const rollsSum = rolls.reduce((a, b) => a + b, 0);
  const missingSum = (m + n) * mean - rollsSum;
  const missingMean = (missingSum / n) | 0;
  const remainingRolls = missingSum % n;

  if (missingMean < 1 || missingMean > 6 || (missingMean === 6 && remainingRolls > 0)) return [];

  const result = new Array(n).fill(missingMean);
  for (let i = 0; i < remainingRolls; i++) {
    result[i]++;
  }
  return result;
};

var rolls = [3, 2, 4, 3],
  mean = 4,
  n = 2;
var expected = [6, 6];
var result = missingRolls(rolls, mean, n);
console.log(result, result.join() === expected.sort((a, b) => b - a).join());

var rolls = [1, 5, 6],
  mean = 3,
  n = 4;
var expected = [2, 3, 2, 2];
var result = missingRolls(rolls, mean, n);
console.log(result, result.join() === expected.sort((a, b) => b - a).join());

var rolls = [1, 2, 3, 4],
  mean = 6,
  n = 4;
var expected = [];
var result = missingRolls(rolls, mean, n);
console.log(result, result.join() === expected.sort((a, b) => b - a).join());

var rolls = [1, 2, 3, 4],
  mean = 5,
  n = 6;
var expected = [];
var result = missingRolls(rolls, mean, n);
console.log(result, result.join() === expected.sort((a, b) => b - a).join());

var rolls = [1, 2, 3, 4],
  mean = 4,
  n = 6;
var expected = [5, 5, 5, 5, 5, 5];
var result = missingRolls(rolls, mean, n);
console.log(result, result.join() === expected.sort((a, b) => b - a).join());

var rolls = [3, 2, 3, 4],
  mean = 4,
  n = 6;
var expected = [5, 5, 5, 5, 4, 4];
var result = missingRolls(rolls, mean, n);
console.log(result, result.join() === expected.sort((a, b) => b - a).join());

var rolls = [6, 3, 4, 3, 5, 3],
  mean = 1,
  n = 6;
var expected = [];
var result = missingRolls(rolls, mean, n);
console.log(result, result.join() === expected.sort((a, b) => b - a).join());
