// https://leetcode.com/problems/house-robber/
// 198. House Robber
var rob = function (nums: number[]): number {
  if (nums.length === 1) return nums[0];

  let firstHouse = nums[0];
  let secondHouse = Math.max(firstHouse, nums[1]);
  for (let i = 2; i < nums.length; i++) {
    const currentHouse = nums[i];
    const maxMoney = Math.max(secondHouse, firstHouse + currentHouse);
    firstHouse = secondHouse;
    secondHouse = maxMoney;
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
