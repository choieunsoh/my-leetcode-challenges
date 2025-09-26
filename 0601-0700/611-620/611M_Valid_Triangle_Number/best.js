// 611. Valid Triangle Number
// https://leetcode.com/problems/valid-triangle-number/
// T.C.: O(n^2)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
  nums.sort((a, b) => a - b);
  let count = 0;
  const n = nums.length;
  for (let i = n - 1; i > 1; i--) {
    let left = 0;
    let right = i - 1;
    while (left < right) {
      if (nums[left] + nums[right] > nums[i]) {
        count += right - left;
        right--;
      } else {
        left++;
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
