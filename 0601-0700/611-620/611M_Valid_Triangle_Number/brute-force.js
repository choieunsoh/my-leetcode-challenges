// 611. Valid Triangle Number
// https://leetcode.com/problems/valid-triangle-number/
// T.C.: O(n^3)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] > nums[k] && nums[i] + nums[k] > nums[j] && nums[j] + nums[k] > nums[i]) {
          count++;
        }
      }
    }
  }
  return count;
};

var nums = [2, 2, 3, 4];
var expected = 3;
var result = triangleNumber(nums);
console.log(result, result === expected);

var nums = [4, 2, 3, 4];
var expected = 4;
var result = triangleNumber(nums);
console.log(result, result === expected);

var nums = [7, 0, 0, 0];
var expected = 0;
var result = triangleNumber(nums);
console.log(result, result === expected);
