// 2210. Count Hills and Valleys in an Array
// https://leetcode.com/problems/count-hills-and-valleys-in-an-array/description/
// T.C.: O(n^2)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function (nums) {
  let res = 0; // number of peaks and valleys
  const n = nums.length;
  for (let i = 1; i < n - 1; ++i) {
    if (nums[i] === nums[i - 1]) {
      // deduplication
      continue;
    }
    let left = 0; // left side possibly unequal neighboring corresponding state
    for (let j = i - 1; j >= 0; --j) {
      if (nums[j] > nums[i]) {
        left = 1;
        break;
      } else if (nums[j] < nums[i]) {
        left = -1;
        break;
      }
    }
    let right = 0; // right side possibly unequal neighboring corresponding state
    for (let j = i + 1; j < n; ++j) {
      if (nums[j] > nums[i]) {
        right = 1;
        break;
      } else if (nums[j] < nums[i]) {
        right = -1;
        break;
      }
    }
    if (left === right && left !== 0) {
      // at this time, index i is part of a peak or valley.
      ++res;
    }
  }
  return res;
};

var nums = [2, 4, 1, 1, 6, 5];
var expected = 3;
var result = countHillValley(nums);
console.log(result, result === expected);

var nums = [6, 6, 5, 5, 4, 1];
var expected = 0;
var result = countHillValley(nums);
console.log(result, result === expected);
