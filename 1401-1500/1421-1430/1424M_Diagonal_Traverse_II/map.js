// 1424. Diagonal Traverse II
// https://leetcode.com/problems/diagonal-traverse-ii/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function (nums) {
  const map = new Map();
  let max = 0;
  for (let row = nums.length - 1; row >= 0; row--) {
    for (let col = 0; col < nums[row].length; col++) {
      const diagonal = row + col;
      max = Math.max(max, diagonal);
      if (!map.has(diagonal)) map.set(diagonal, []);
      map.get(diagonal).push(nums[row][col]);
    }
  }

  const result = [];
  for (let i = 0; i <= max; i++) {
    const list = map.get(i);
    result.push(...list);
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
