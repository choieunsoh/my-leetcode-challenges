// 325. Maximum Size Subarray Sum Equals k
// https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/description/
// T.C.: O(N)
// S.C.: O(N)
var maxSubArrayLen = function (nums: number[], k: number): number {
  let result = 0;
  let prefixSum = 0;
  const map = new Map<number, number>();
  for (let index = 0; index < nums.length; index++) {
    prefixSum += nums[index];
    if (prefixSum === k) {
      result = index + 1;
    }
    if (map.has(prefixSum - k)) {
      result = Math.max(result, index - map.get(prefixSum - k)!);
    }
    if (!map.has(prefixSum)) {
      map.set(prefixSum, index);
    }
  }
  return result;
};

var nums = [1, -1, 5, -2, 3],
  k = 3;
var expected = 4;
var result = maxSubArrayLen(nums, k);
console.log(result, result === expected);

var nums = [-2, -1, 2, 1],
  k = 1;
var expected = 2;
var result = maxSubArrayLen(nums, k);
console.log(result, result === expected);

var nums = [1, 0, -1],
  k = -1;
var expected = 2;
var result = maxSubArrayLen(nums, k);
console.log(result, result === expected);
