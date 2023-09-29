// 2393. Count Strictly Increasing Subarrays
// https://leetcode.com/problems/count-strictly-increasing-subarrays/
/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function (nums) {
  let result = 0;
  const n = nums.length;
  for (let i = 1; i < n; i++) {
    let currCount = 1;
    while (nums[i] > nums[i - 1]) {
      currCount++;
      i++;
    }
    result += (currCount * (currCount + 1)) / 2;
  }
  return result;
};

var nums = [1, 3, 5, 4, 4, 6];
var expected = 10;
var result = countSubarrays(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 4, 5];
var expected = 15;
var result = countSubarrays(nums);
console.log(result, result === expected);
