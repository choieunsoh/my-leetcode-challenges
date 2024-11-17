// 862. Shortest Subarray with Sum at Least K
// https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function (nums, k) {
  const n = nums.length;
  const prefixSum = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i];
  }

  let shortestSubarrayLength = Number.MAX_SAFE_INTEGER;
  const queue = [];
  for (let endIndex = 0; endIndex <= n; endIndex++) {
    while (queue.length && prefixSum[endIndex] - prefixSum[queue[0]] >= k) {
      const startIndex = queue.shift();
      shortestSubarrayLength = Math.min(shortestSubarrayLength, endIndex - startIndex);
    }

    while (queue.length && prefixSum[endIndex] <= prefixSum[queue.at(-1)]) {
      queue.pop();
    }

    queue.push(endIndex);
  }

  if (shortestSubarrayLength === Number.MAX_SAFE_INTEGER) return -1;
  return shortestSubarrayLength;
};

var nums = [1],
  k = 1;
var expected = 1;
var result = shortestSubarray(nums, k);
console.log(result, result === expected);

var nums = [1, 2],
  k = 4;
var expected = -1;
var result = shortestSubarray(nums, k);
console.log(result, result === expected);

var nums = [2, -1, 2],
  k = 3;
var expected = 3;
var result = shortestSubarray(nums, k);
console.log(result, result === expected);
