// 1351. Count Negative Numbers in a Sorted Matrix
// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  let result = 0;
  const rows = grid.length;
  for (let row = rows - 1; row >= 0; row--) {
    const nums = grid[row];
    const count = binarySearch(nums);
    result += count;
  }
  return result;

  function binarySearch(nums) {
    let index = -1;
    let left = 0;
    let right = nums.length - 1;
    if (nums[right] >= 0) return 0;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (nums[mid] < 0) {
        index = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return nums.length - index;
  }
};

var grid = [
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3],
];
var expected = 8;
var result = countNegatives(grid);
console.log(result, result === expected);

var grid = [
  [3, 2],
  [1, 0],
];
var expected = 0;
var result = countNegatives(grid);
console.log(result, result === expected);
