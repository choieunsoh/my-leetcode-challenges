// 3560. Find Minimum Log Transportation Cost
// https://leetcode.com/problems/find-minimum-log-transportation-cost/description/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minCuttingCost = function (n, m, k) {
  let cost = 0;
  if (n > k) {
    cost += (n - k) * k;
  }
  if (m > k) {
    cost += (m - k) * k;
  }
  return cost;
};

var n = 6,
  m = 5,
  k = 5;
var expected = 5;
var result = minCuttingCost(n, m, k);
console.log(result, result === expected);

var n = 4,
  m = 4,
  k = 6;
var expected = 0;
var result = minCuttingCost(n, m, k);
console.log(result, result === expected);

var n = 1,
  m = 4,
  k = 2;
var expected = 4;
var result = minCuttingCost(n, m, k);
console.log(result, result === expected);

var n = 1,
  m = 5,
  k = 3;
var expected = 6;
var result = minCuttingCost(n, m, k);
console.log(result, result === expected);
