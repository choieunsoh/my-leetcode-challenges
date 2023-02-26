// 213. House Robber II
// https://leetcode.com/problems/house-robber-ii/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length < 4) return Math.max(...nums);

  function robFrom(nums, start, end) {
    let firstHouse = 0;
    let secondHouse = 0;
    for (let i = start; i < end; i++) {
      const money = Math.max(nums[i] + firstHouse, secondHouse);
      firstHouse = secondHouse;
      secondHouse = money;
    }
    return secondHouse;
  }

  const first = robFrom(nums, 0, nums.length - 1);
  const second = robFrom(nums, 1, nums.length);
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
