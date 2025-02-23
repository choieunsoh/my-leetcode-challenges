// 3462. Maximum Sum With at Most K Elements
// https://leetcode.com/problems/maximum-sum-with-at-most-k-elements/description/
// T.C.: O(n*m log (n*m))
// S.C.: O(n*m)
/**
 * @param {number[][]} grid
 * @param {number[]} limits
 * @param {number} k
 * @return {number}
 */
var maxSum = function (grid, limits, k) {
  const nums = [];
  for (let row = 0; row < grid.length; row++) {
    const rows = grid[row].sort((a, b) => b - a);
    for (let col = 0; col < Math.min(limits[row], rows.length); col++) {
      nums.push(grid[row][col]);
    }
  }

  nums.sort((a, b) => b - a);

  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  return sum;
};

var grid = [
    [1, 2],
    [3, 4],
  ],
  limits = [1, 2],
  k = 2;
var expected = 7;
var result = maxSum(grid, limits, k);
console.log(result, result === expected);

var grid = [
    [5, 3, 7],
    [8, 2, 6],
  ],
  limits = [2, 2],
  k = 3;
var expected = 21;
var result = maxSum(grid, limits, k);
console.log(result, result === expected);

var grid = [
    [7, 10, 3, 3, 7, 7, 0],
    [5, 5, 9, 2, 10, 5, 2],
  ],
  limits = [3, 7],
  k = 7;
var expected = 53;
var result = maxSum(grid, limits, k);
console.log(result, result === expected);
