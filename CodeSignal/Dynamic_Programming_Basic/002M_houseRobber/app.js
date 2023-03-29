// houseRobber
// LC-198. House Robber
// https://leetcode.com/problems/house-robber/
/**
 * @param {number[]} nums
 * @return {number}
 */
function houseRobber(nums) {
  if (nums.length === 0) return 0;
  if (nums.length < 3) return Math.max(...nums);
  let one = nums[0];
  let two = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    const num = nums[i];
    const next = Math.max(one + num, two);
    [one, two] = [two, next];
  }
  return two;
}

var nums = [1, 1, 1];
var expected = 2;
var result = houseRobber(nums);
console.log(result, result === expected);

var nums = [];
var expected = 0;
var result = houseRobber(nums);
console.log(result, result === expected);

var nums = [0, 0];
var expected = 0;
var result = houseRobber(nums);
console.log(result, result === expected);

var nums = [2, 1];
var expected = 2;
var result = houseRobber(nums);
console.log(result, result === expected);

var nums = [82, 217, 170, 215, 153, 55, 185, 55, 185, 232, 69, 131, 130, 102];
var expected = 1082;
var result = houseRobber(nums);
console.log(result, result === expected);
