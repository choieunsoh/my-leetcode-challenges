// 1424. Diagonal Traverse II
// https://leetcode.com/problems/diagonal-traverse-ii/
// T.C.: O(n * m)
// S.C.: O(n)
/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function (nums) {
  const result = [];
  const rows = nums.length;
  const cols = Math.max(...nums.map((row) => row.length));
  for (let row = 0; row < rows; row++) {
    let i = row;
    let j = 0;
    while (i >= 0 && j < cols) {
      if (nums[i]?.[j]) {
        result.push(nums[i][j]);
      }
      i--;
      j++;
    }
  }
  for (let col = 1; col < cols; col++) {
    let i = rows - 1;
    let j = col;
    while (i >= 0 && j < cols) {
      if (nums[i]?.[j]) {
        result.push(nums[i][j]);
      }
      i--;
      j++;
    }
  }
  return result;
};

var nums = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var expected = [1, 4, 2, 7, 5, 3, 8, 6, 9];
var result = findDiagonalOrder(nums);
console.log(result, result.join() === expected.join());

var nums = [[1, 2, 3, 4, 5], [6, 7], [8], [9, 10, 11], [12, 13, 14, 15, 16]];
var expected = [1, 6, 2, 8, 7, 3, 9, 4, 12, 10, 5, 13, 11, 14, 15, 16];
var result = findDiagonalOrder(nums);
console.log(result, result.join() === expected.join());
