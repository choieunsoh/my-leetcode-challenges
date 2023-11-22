// 1424. Diagonal Traverse II
// https://leetcode.com/problems/diagonal-traverse-ii/
// T.C.: O(n)
// S.C.: O(sqrt(n))
/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function (nums) {
  const result = [];
  let queue = [[0, 0]];
  while (queue.length) {
    const qq = [];
    for (const [r, c] of queue) {
      result.push(nums[r][c]);
      if (c === 0 && r + 1 < nums.length) {
        qq.push([r + 1, c]);
      }
      if (c + 1 < nums[r].length) {
        qq.push([r, c + 1]);
      }
    }
    queue = qq;
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
