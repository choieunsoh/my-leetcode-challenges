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
  let min = Number.MAX_SAFE_INTEGER;
  let sum = 0;
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  for (let i = 0; i < nums.length; i++) {
    let ans = nums[i] * i - sum + (total - sum - nums[i] * (nums.length - i));
    min = Math.min(min, ans);
    sum += nums[i];
  }
  return min;
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
