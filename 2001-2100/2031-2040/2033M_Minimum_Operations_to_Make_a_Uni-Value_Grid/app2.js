// 2033. Minimum Operations to Make a Uni-Value Grid
// https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/description/
// T.C.: O(nm log(nm))
// S.C.: O(mn)
/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function (grid, x) {
  const nums = [];
  const mod = grid[0][0] % x;
  const rows = grid.length;
  const cols = grid[0].length;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const currMod = grid[row][col] % x;
      if (currMod !== mod) return -1;
      const steps = (grid[row][col] - mod) / x;
      nums.push(steps);
    }
  }
  nums.sort((a, b) => a - b);

  let count = 0;
  const midStep = nums[nums.length >> 1];
  for (let i = 0; i < nums.length; i++) {
    count += Math.abs(nums[i] - midStep);
  }
  return count;
};

var grid = [
    [2, 4],
    [6, 8],
  ],
  x = 2;
var expected = 4;
var result = minOperations(grid, x);
console.log(result, result === expected);

var grid = [
    [1, 5],
    [2, 3],
  ],
  x = 1;
var expected = 5;
var result = minOperations(grid, x);
console.log(result, result === expected);

var grid = [
    [1, 2],
    [3, 4],
  ],
  x = 2;
var expected = -1;
var result = minOperations(grid, x);
console.log(result, result === expected);
