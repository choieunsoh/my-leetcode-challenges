// 3737. Count Subarrays With Majority Element I
// https://leetcode.com/problems/count-subarrays-with-majority-element-i/description/
// T.C.: O(n^2)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function (nums, target) {
  const n = nums.length;
  let result = 0;
  for (let i = 0; i < n; ++i) {
    let count = 0;
    for (let j = i; j < n; ++j) {
      count += nums[j] === target ? 1 : -1;
      if (count > 0) {
        result++;
      }
    }
  }
  return result;
};

var nums = [1, 2, 2, 3],
  target = 2;
var expected = 5;
var result = countMajoritySubarrays(nums, target);
console.log(result, result === expected);

var nums = [1, 1, 1, 1],
  target = 1;
var expected = 10;
var result = countMajoritySubarrays(nums, target);
console.log(result, result === expected);

var nums = [1, 2, 3],
  target = 4;
var expected = 0;
var result = countMajoritySubarrays(nums, target);
console.log(result, result === expected);
