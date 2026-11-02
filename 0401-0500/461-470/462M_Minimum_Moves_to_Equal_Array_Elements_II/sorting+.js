// 462. Minimum Moves to Equal Array Elements II
// https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/
// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  nums.sort((a, b) => a - b);
  let sum = 0;
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    sum += nums[r] - nums[l];
    l++;
    r--;
  }
  return sum;
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
