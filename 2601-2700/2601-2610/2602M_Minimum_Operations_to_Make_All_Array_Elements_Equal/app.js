// 2602. Minimum Operations to Make All Array Elements Equal
// https://leetcode.com/problems/minimum-operations-to-make-all-array-elements-equal/
/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var minOperations = function (nums, queries) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const prefixSum = [...nums];
  const suffixSum = [...nums];
  for (let i = 1; i < n; i++) {
    prefixSum[i] += prefixSum[i - 1];
  }
  for (let i = n - 2; i >= 0; i--) {
    suffixSum[i] += suffixSum[i + 1];
  }

  const result = [];
  for (const query of queries) {
    const splitIndex = binarySearch(query);
    const leftDiff = splitIndex > 0 ? query * splitIndex - prefixSum[splitIndex - 1] : 0;
    const rightDiff = splitIndex < n ? suffixSum[splitIndex] - query * (n - splitIndex) : 0;
    result.push(Math.abs(leftDiff) + Math.abs(rightDiff));
  }

  return result;

  function binarySearch(target) {
    let index = 0;
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (nums[mid] > target) {
        index = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return index;
  }
};

var nums = [3, 1, 6, 8],
  queries = [1, 5];
var expected = [14, 10];
var result = minOperations(nums, queries);
console.log(result, result.join() === expected.join());

var nums = [2, 9, 6, 3],
  queries = [10];
var expected = [20];
var result = minOperations(nums, queries);
console.log(result, result.join() === expected.join());
