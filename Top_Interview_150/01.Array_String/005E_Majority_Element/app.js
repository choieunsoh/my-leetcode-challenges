// 169. Majority Element
// https://leetcode.com/problems/majority-element/
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const min = nums.length / 2;
  const counter = new Map();
  for (const num of nums) {
    const count = counter.get(num) ?? 0;
    if (count + 1 > min) return num;
    counter.set(num, count + 1);
  }
  return nums[0];
};

var nums = [3, 2, 3];
var expected = 3;
var result = majorityElement(nums);
console.log(result, result === expected);

var nums = [2, 2, 1, 1, 1, 2, 2];
var expected = 2;
var result = majorityElement(nums);
console.log(result, result === expected);
