// 2908. Minimum Sum of Mountain Triplets I
// https://leetcode.com/problems/minimum-sum-of-mountain-triplets-i/
// T.C.: O(n^3)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function (nums) {
  let minSum = Infinity;
  const n = nums.length;
  for (let left = 0; left < n - 2; left++) {
    for (let mid = left + 1; mid < n - 1; mid++) {
      for (let right = mid + 1; right < n; right++) {
        if (nums[left] < nums[mid] && nums[mid] > nums[right]) {
          minSum = Math.min(minSum, nums[left] + nums[mid] + nums[right]);
        }
      }
    }
  }
  return minSum === Infinity ? -1 : minSum;
};

var nums = [8, 6, 1, 5, 3];
var expected = 9;
var result = minimumSum(nums);
console.log(result, result === expected);

var nums = [5, 4, 8, 7, 10, 2];
var expected = 13;
var result = minimumSum(nums);
console.log(result, result === expected);

var nums = [6, 5, 4, 3, 4, 5];
var expected = -1;
var result = minimumSum(nums);
console.log(result, result === expected);
