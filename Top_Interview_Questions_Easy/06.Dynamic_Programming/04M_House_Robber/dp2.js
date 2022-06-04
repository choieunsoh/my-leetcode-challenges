// https://leetcode.com/problems/house-robber/
// 198. House Robber
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = (nums) => {
  if (nums.length === 1) return nums[0];

  let maxMoney = 0;
  let last2ndHouse = 0;
  let prevMaxMoney = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const currentHouse = nums[i];
    maxMoney = Math.max(last2ndHouse + currentHouse, prevMaxMoney);
    last2ndHouse = prevMaxMoney;
    prevMaxMoney = maxMoney;
  }
  return maxMoney;
};

var nums = [1, 2, 3, 1];
var expected = 4;
var result = rob(nums);
console.log(result, expected, result === expected);

var nums = [2, 7, 9, 3, 1];
var expected = 12;
var result = rob(nums);
console.log(result, expected, result === expected);
