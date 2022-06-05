// https://leetcode.com/problems/remove-element/
// 27. Remove Element
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let left = 0;
  let right = 0;
  while (right < nums.length) {
    if (nums[right] !== val) {
      nums[left] = nums[right];
      left++;
    }
    right++;
  }
  return left;
};

var nums = [2],
  val = 3;
var expected = 1; // nums = [2,2,_,_]
var result = removeElement(nums, val);
console.log(result, expected, result === expected);

var nums = [3, 2, 2, 3],
  val = 3;
var expected = 2; // nums = [2,2,_,_]
var result = removeElement(nums, val);
console.log(result, expected, result === expected);

var nums = [0, 1, 2, 2, 3, 0, 4, 2],
  val = 2;
var expected = 5; // nums = [0,1,4,0,3,_,_,_]
var result = removeElement(nums, val);
console.log(result, expected, result === expected);
