// 198. House Robber
// https://leetcode.com/problems/house-robber/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = (nums) => {
  if (nums.length < 3) return Math.max(...nums);
  let firstHouse = nums[0];
  let secondHouse = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    const currentHouse = nums[i];
    const maxMoney = Math.max(firstHouse + currentHouse, secondHouse);
    [firstHouse, secondHouse] = [secondHouse, maxMoney];
  }
  return secondHouse;
};

var nums = [1, 2, 3, 1];
var expected = 4;
var result = rob(nums);
console.log(result, expected, result === expected);

var nums = [2, 7, 9, 3, 1];
var expected = 12;
var result = rob(nums);
console.log(result, expected, result === expected);
