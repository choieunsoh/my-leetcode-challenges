// 1248. Count Number of Nice Subarrays
// https://leetcode.com/problems/count-number-of-nice-subarrays/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  let result = 0;
  let sum = 0;
  const max = nums.reduce((sum, num) => sum + (num & 1), 0);
  const prefixSum = new Array(max + 1).fill(0);
  prefixSum[0] = 1;
  for (const num of nums) {
    sum += num & 1;
    if (prefixSum[sum - k]) {
      result += prefixSum[sum - k];
    }
    prefixSum[sum]++;
  }
  return result;
};

var nums = [1, 1, 2, 1, 1],
  k = 3;
var expected = 2;
var result = numberOfSubarrays(nums, k);
console.log(result, result === expected);

var nums = [2, 4, 6],
  k = 1;
var expected = 0;
var result = numberOfSubarrays(nums, k);
console.log(result, result === expected);

var nums = [2, 2, 2, 1, 2, 2, 1, 2, 2, 2],
  k = 2;
var expected = 16;
var result = numberOfSubarrays(nums, k);
console.log(result, result === expected);
