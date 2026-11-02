// 462. Minimum Moves to Equal Array Elements II
// https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/
// T.C.: O(n * m)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  let result = Number.MAX_SAFE_INTEGER;
  let minval = Number.MAX_SAFE_INTEGER;
  let maxval = Number.MIN_SAFE_INTEGER;
  for (const num of nums) {
    minval = Math.min(minval, num);
    maxval = Math.max(maxval, num);
  }
  for (let i = minval; i <= maxval; i++) {
    let sum = 0;
    for (const num of nums) {
      sum += Math.abs(num - i);
    }
    result = Math.min(result, sum);
  }
  return result;
};

var nums = [1, 2, 3];
var expected = 2;
var result = minMoves2(nums);
console.log(result, result === expected);

var nums = [1, 10, 2, 9];
var expected = 16;
var result = minMoves2(nums);
console.log(result, result === expected);

var nums = [1, 0, 0, 8, 6];
var expected = 14;
var result = minMoves2(nums);
console.log(result, result === expected);
