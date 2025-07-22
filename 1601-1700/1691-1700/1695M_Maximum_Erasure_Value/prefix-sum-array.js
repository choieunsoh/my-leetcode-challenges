// 1695. Maximum Erasure Value
// https://leetcode.com/problems/maximum-erasure-value/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (nums) {
  const n = nums.length;
  const lastIndexes = new Array(10001).fill(-1);
  const prefixSum = new Array(n + 1).fill(0);

  let result = 0;
  let start = 0;
  for (let end = 0; end < n; end++) {
    const currentElement = nums[end];
    prefixSum[end + 1] = prefixSum[end] + currentElement;
    if (lastIndexes[currentElement] !== -1) {
      start = Math.max(start, lastIndexes[currentElement] + 1);
    }

    result = Math.max(result, prefixSum[end + 1] - prefixSum[start]);
    lastIndexes[currentElement] = end;
  }
  return result;
};

var nums = [4, 2, 4, 5, 6];
var expected = 17;
var result = maximumUniqueSubarray(nums);
console.log(result, result === expected);

var nums = [5, 2, 1, 2, 5, 2, 1, 2, 5];
var expected = 8;
var result = maximumUniqueSubarray(nums);
console.log(result, result === expected);
