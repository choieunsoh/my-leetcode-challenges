// 3347. Maximum Frequency of an Element After Performing Operations II
// https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-ii/description/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} numOperations
 * @return {number}
 */
var maxFrequency = function (nums, k, numOperations) {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  const map = new Map();
  let result = 0;

  // case 1: existing element as potential target
  let i = 0;
  let j = 0;
  for (const num of nums) {
    // increase gap
    while (j < n && nums[j] <= num + k) {
      map.set(nums[j], (map.get(nums[j]) ?? 0) + 1);
      j++;
    }

    // decrease gap
    while (i < n && nums[i] < num - k) {
      map.set(nums[i], (map.get(nums[i]) ?? 0) - 1);
      i++;
    }

    const curr = Math.min(j - i, map.get(num) + numOperations);
    result = Math.max(result, curr);
  }

  // case 2: non existing element as potential target
  j = 0;
  for (let i = 0; i < n; i++) {
    while (j < n && nums[j] <= nums[i] + 2 * k) {
      j++;
    }

    const curr = Math.min(j - i, numOperations);
    result = Math.max(result, curr);
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
