// 2908. Minimum Sum of Mountain Triplets I
// https://leetcode.com/problems/minimum-sum-of-mountain-triplets-i/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function (nums) {
  const n = nums.length;
  const prefixMin = new Array(n);
  prefixMin[0] = Infinity;
  let currentMin = nums[0];
  for (let i = 1; i < n; i++) {
    prefixMin[i] = currentMin;
    currentMin = Math.min(currentMin, nums[i]);
  }

  const suffixMin = new Array(n);
  suffixMin[n - 1] = Infinity;
  currentMin = nums[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    suffixMin[i] = currentMin;
    currentMin = Math.min(currentMin, nums[i]);
  }

  let minSum = Infinity;

  for (let mid = 1; mid < n - 1; mid++) {
    if (nums[mid] > prefixMin[mid] && nums[mid] > suffixMin[mid]) {
      const currentSum = prefixMin[mid] + nums[mid] + suffixMin[mid];
      minSum = Math.min(minSum, currentSum);
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
