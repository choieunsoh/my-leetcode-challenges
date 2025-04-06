// 368. Largest Divisible Subset
// https://leetcode.com/problems/largest-divisible-subset/
// T.O.: O(n^2)
// S.C.: O(n^2)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
  // Sort the original list in ascending order.
  nums.sort((a, b) => a - b);
  const n = nums.length;

  // EDS: ending divisible subset
  // Container to keep the largest divisible subset
  // that ends with each of the nums.
  const EDS = Array.from({ length: n }, () => []);

  for (let i = 0; i < n; ++i) {
    let maxSubset = [];

    // Find the largest divisible subset of previous elements.
    for (let k = 0; k < i; k++) {
      if (nums[i] % nums[k] === 0 && maxSubset.length < EDS[k].length) {
        maxSubset = EDS[k];
      }
    }

    // Extend the found subset with the element itself.
    EDS[i].push(...maxSubset, nums[i]);
  }

  let result = [];
  for (let i = 0; i < n; ++i) {
    if (EDS[i].length > result.length) {
      result = EDS[i];
    }
  }
  return result;
};

var nums = [1, 2, 3];
var expected = [1, 2];
var result = largestDivisibleSubset(nums);
console.log(result, result.join() === expected.join());

var nums = [1, 2, 4, 8];
var expected = [1, 2, 4, 8];
var result = largestDivisibleSubset(nums);
console.log(result, result.join() === expected.join());

var nums = [1];
var expected = [1];
var result = largestDivisibleSubset(nums);
console.log(result, result.join() === expected.join());

var nums = [3, 17];
var expected = [3];
var result = largestDivisibleSubset(nums);
console.log(result, result.join() === expected.join());

var nums = [2, 4, 7, 8];
var expected = [2, 4, 8];
var result = largestDivisibleSubset(nums);
console.log(result, result.join() === expected.join());
