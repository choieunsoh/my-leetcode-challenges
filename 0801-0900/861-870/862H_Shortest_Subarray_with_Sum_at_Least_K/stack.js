// 862. Shortest Subarray with Sum at Least K
// https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function (nums, k) {
  const n = nums.length;

  // Stack-like list to store cumulative sums and their indices
  const stack = [[0, -1]];

  let sum = 0;
  let shortestSubarrayLength = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    // Update cumulative sum
    sum += nums[i];

    // Remove entries from stack that are larger than current cumulative sum
    while (stack.length && sum <= stack.at(-1)[0]) {
      stack.pop();
    }

    // Add current cumulative sum and index to stack
    stack.push([sum, i]);

    const candidateIndex = findCandidateIndex(stack, sum - k);

    // If a valid candidate is found, update the shortest subarray length
    if (candidateIndex !== -1) {
      shortestSubarrayLength = Math.min(shortestSubarrayLength, i - stack[candidateIndex][1]);
    }
  }

  if (shortestSubarrayLength === Number.MAX_SAFE_INTEGER) return -1;
  return shortestSubarrayLength;

  // Binary search to find the largest index where cumulative sum is <= target
  function findCandidateIndex(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (nums[mid][0] <= target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return right;
  }
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
