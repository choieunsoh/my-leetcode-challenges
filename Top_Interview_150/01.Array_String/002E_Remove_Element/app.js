// 27. Remove Element
// https://leetcode.com/problems/remove-element/
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== val) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
  }
  nums.length = left;
  return nums.length;
};

var nums = [3, 2, 2, 3],
  val = 3;
var expected = 2;
var result = removeElement(nums, val);
console.log(result, result === expected);

var nums = [0, 1, 2, 2, 3, 0, 4, 2],
  val = 2;
var expected = 5;
var result = removeElement(nums, val);
console.log(result, result === expected);

var nums = [1, 1],
  val = 1;
var expected = 0;
var result = removeElement(nums, val);
console.log(result, result === expected);
