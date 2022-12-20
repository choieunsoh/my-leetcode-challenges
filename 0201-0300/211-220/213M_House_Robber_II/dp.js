// 213. House Robber II
// https://leetcode.com/problems/house-robber-ii/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) return nums[0];

  function robFrom(nums, start, end) {
    if (start === end) return nums[start];
    let first = nums[start];
    let second = Math.max(first, nums[start + 1]);
    for (let i = start + 2; i <= end; i++) {
      const money = Math.max(first + nums[i], second);
      first = second;
      second = money;
    }
    return second;
  }

  const first = robFrom(nums, 0, nums.length - 2);
  const second = robFrom(nums, 1, nums.length - 1);
  return Math.max(first, second);
};

var nums = [2, 3, 2];
var expected = 3;
var result = rob(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 1];
var expected = 4;
var result = rob(nums);
console.log(result, result === expected);

var nums = [1, 2, 3];
var expected = 3;
var result = rob(nums);
console.log(result, result === expected);

var nums = [0];
var expected = 0;
var result = rob(nums);
console.log(result, result === expected);
