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
  let result = 0;

  const firstRemainder = grid[0][0] % x;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] % x !== firstRemainder) return -1;
      nums.push(grid[row][col]);
    }
  }

  nums.sort((a, b) => a - b);

  const length = nums.length;
  let prefixIndex = 0;
  let suffixIndex = length - 1;

  // Move prefixIndex and suffixIndex towards the middle
  while (prefixIndex < suffixIndex) {
    // If the prefix of equal elements is shorter than the suffix
    if (prefixIndex < length - suffixIndex - 1) {
      // Calculate the number of operations required to extend the prefix
      const prefixOperations = ((prefixIndex + 1) * (nums[prefixIndex + 1] - nums[prefixIndex])) / x;
      result += prefixOperations;
      // Move the prefix index forward
      prefixIndex++;
    } else {
      // Calculate the number of operations required to extend the suffix
      const suffixOperations = ((length - suffixIndex) * (nums[suffixIndex] - nums[suffixIndex - 1])) / x;
      result += suffixOperations;
      // Move the suffix index backward
      suffixIndex--;
    }
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
