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
  let result = Infinity;

  const firstRemainder = grid[0][0] % x;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] % x !== firstRemainder) return -1;
      nums.push(grid[row][col]);
    }
  }

  nums.sort((a, b) => a - b);

  const length = nums.length;
  const prefixSum = new Array(length).fill(0);
  const suffixSum = new Array(length).fill(0);

  for (let index = 1; index < length; index++) {
    prefixSum[index] = prefixSum[index - 1] + nums[index - 1];
  }

  for (let index = length - 2; index >= 0; index--) {
    suffixSum[index] = suffixSum[index + 1] + nums[index + 1];
  }

  for (let index = 0; index < length; index++) {
    const leftOperations = (nums[index] * index - prefixSum[index]) / x;
    const rightOperations = (suffixSum[index] - nums[index] * (length - index - 1)) / x;
    result = Math.min(result, leftOperations + rightOperations);
  }

  return result;
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
