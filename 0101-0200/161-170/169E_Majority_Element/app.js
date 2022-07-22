// https://leetcode.com/problems/majority-element/
// 169. Majority Element
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const min = nums.length / 2;
  const counter = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (counter.has(num)) {
      counter.set(num, counter.get(num) + 1);
    } else {
      counter.set(num, 1);
    }
    if (counter.get(num) > min) return num;
  }
  return nums[0];
};

var nums = [3, 2, 3];
var expected = 3;
console.log(majorityElement(nums), expected);

var nums = [2, 2, 1, 1, 1, 2, 2];
var expected = 2;
console.log(majorityElement(nums), expected);
