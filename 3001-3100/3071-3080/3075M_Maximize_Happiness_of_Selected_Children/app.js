// 3075. Maximize Happiness of Selected Children
// https://leetcode.com/problems/maximize-happiness-of-selected-children/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function (happiness, k) {
  const n = happiness.length;
  let result = 0;
  let turns = 0;
  happiness.sort((a, b) => b - a);

  for (let i = 0; i < k; i++) {
    result += Math.max(0, happiness[i] - turns);
    turns++;
  }

  return result;
};

var happiness = [1, 2, 3],
  k = 2;
var expected = 4;
var result = maximumHappinessSum(happiness, k);
console.log(result, result === expected);

var happiness = [1, 1, 1, 1],
  k = 2;
var expected = 1;
var result = maximumHappinessSum(happiness, k);
console.log(result, result === expected);

var happiness = [2, 3, 4, 5],
  k = 1;
var expected = 5;
var result = maximumHappinessSum(happiness, k);
console.log(result, result === expected);

var happiness = [2, 3, 4, 5],
  k = 2;
var expected = 8;
var result = maximumHappinessSum(happiness, k);
console.log(result, result === expected);

var happiness = [2, 83, 62],
  k = 3;
var expected = 144;
var result = maximumHappinessSum(happiness, k);
console.log(result, result === expected);

var happiness = [12, 1, 42],
  k = 3;
var expected = 53;
var result = maximumHappinessSum(happiness, k);
console.log(result, result === expected);
