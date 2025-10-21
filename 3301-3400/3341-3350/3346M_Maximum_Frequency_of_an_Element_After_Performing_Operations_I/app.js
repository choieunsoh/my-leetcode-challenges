// 3346. Maximum Frequency of an Element After Performing Operations I
// https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-i/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} numOperations
 * @return {number}
 */
var maxFrequency = function (nums, k, numOperations) {
  const maxNum = Math.max(...nums);
  const n = maxNum + k + 2;
  const freq = new Array(n).fill(0);
  for (const num of nums) {
    freq[num]++;
  }

  const prefixSum = new Array(n).fill(0);
  prefixSum[0] = freq[0];
  for (let i = 1; i < n; i++) {
    prefixSum[i] = prefixSum[i - 1] + freq[i];
  }

  let result = 0;
  for (let num = 0; num < n; num++) {
    if (freq[num] === 0 && numOperations === 0) continue;
    const left = Math.max(0, num - k);
    const right = Math.min(n - 1, num + k);
    const total = prefixSum[right] - (left > 0 ? prefixSum[left - 1] : 0);
    const adj = total - freq[num];
    const count = freq[num] + Math.min(numOperations, adj);
    result = Math.max(result, count);
  }
  return result;
};

var nums = [1, 4, 5],
  k = 1,
  numOperations = 2;
var expected = 2;
var result = maxFrequency(nums, k, numOperations);
console.log(result, result === expected);

var nums = [5, 11, 20, 20],
  k = 5,
  numOperations = 1;
var expected = 2;
var result = maxFrequency(nums, k, numOperations);
console.log(result, result === expected);
