// 3347. Maximum Frequency of an Element After Performing Operations II
// https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-ii/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} numOperations
 * @return {number}
 */
var maxFrequency = function (nums, k, numOperations) {
  nums.sort((a, b) => a - b);

  let result = 0;
  const numCount = new Map();
  const modes = new Set();
  let lastNumIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[lastNumIndex]) {
      numCount.set(nums[lastNumIndex], i - lastNumIndex);
      result = Math.max(result, i - lastNumIndex);
      addMode(nums[lastNumIndex]);

      lastNumIndex = i;
    }
  }

  numCount.set(nums[lastNumIndex], nums.length - lastNumIndex);
  result = Math.max(result, nums.length - lastNumIndex);
  addMode(nums[lastNumIndex]);

  for (const mode of modes) {
    const [left, right] = [leftBound(mode - k), rightBound(mode + k)];

    let tempAns;
    if (numCount.has(mode)) {
      tempAns = Math.min(right - left + 1, numCount.get(mode) + numOperations);
    } else {
      tempAns = Math.min(right - left + 1, numOperations);
    }

    result = Math.max(result, tempAns);
  }

  return result;

  function addMode(value) {
    modes.add(value);

    if (value - k >= nums.at(0)) {
      modes.add(value - k);
    }

    if (value + k <= nums.at(-1)) {
      modes.add(value + k);
    }
  }

  function leftBound(value) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] < value) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  }

  function rightBound(value) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
      const mid = Math.floor((left + right + 1) / 2);
      if (nums[mid] > value) {
        right = mid - 1;
      } else {
        left = mid;
      }
    }
    return left;
  }
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
