// 961. N-Repeated Element in Size 2N Array
// https://leetcode.com/problems/n-repeated-element-in-size-2n-array/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
  for (let k = 1; k <= 3; k++) {
    for (let i = 0; i < nums.length - k; i++) {
      if (nums[i] === nums[i + k]) {
        return nums[i];
      }
    }
  }
  return -1;
};

var nums = [1, 2, 3, 3];
var expected = 3;
var result = repeatedNTimes(nums);
console.log(result, expected, result === expected);

var nums = [2, 1, 2, 5, 3, 2];
var expected = 2;
var result = repeatedNTimes(nums);
console.log(result, expected, result === expected);

var nums = [5, 1, 5, 2, 5, 3, 5, 4];
var expected = 5;
var result = repeatedNTimes(nums);
console.log(result, expected, result === expected);
