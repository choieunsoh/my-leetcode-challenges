// 1176. Diet Plan Performance
// https://leetcode.com/problems/diet-plan-performance/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} calories
 * @param {number} k
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var dietPlanPerformance = function (calories, k, lower, upper) {
  let points = 0;
  let sum = 0;
  let n = calories.length;
  for (let i = 0; i < k; i++) {
    sum += calories[i];
  }

  if (sum < lower) points--;
  else if (sum > upper) points++;

  for (let i = k; i < n; i++) {
    sum += calories[i] - calories[i - k];
    if (sum < lower) points--;
    else if (sum > upper) points++;
  }

  return points;
};

var calories = [1, 2, 3, 4, 5],
  k = 1,
  lower = 3,
  upper = 3;
var expected = 0;
var result = dietPlanPerformance(calories, k, lower, upper);
console.log(result, result === expected);

var calories = [3, 2],
  k = 2,
  lower = 0,
  upper = 1;
var expected = 1;
var result = dietPlanPerformance(calories, k, lower, upper);
console.log(result, result === expected);

var calories = [6, 5, 0, 0],
  k = 2,
  lower = 1,
  upper = 5;
var expected = 0;
var result = dietPlanPerformance(calories, k, lower, upper);
console.log(result, result === expected);

var calories = [1, 2, 5, 3, 7, 0, 2, 8, 4, 4],
  k = 3,
  lower = 9,
  upper = 10;
var expected = 2;
var result = dietPlanPerformance(calories, k, lower, upper);
console.log(result, result === expected);
