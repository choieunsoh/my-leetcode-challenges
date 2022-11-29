// https://leetcode.com/problems/majority-element/
// 169. Majority Element
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = 0;
  let candidate = nums[0];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (count === 0) candidate = num;
    num === candidate ? count++ : count--;
  }
  return candidate;
};

var nums = [3, 2, 3];
var expected = 3;
console.log(majorityElement(nums), expected);

var nums = [2, 2, 1, 1, 1, 2, 2];
var expected = 2;
console.log(majorityElement(nums), expected);
