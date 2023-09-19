// 164. Maximum Gap
// https://leetcode.com/problems/maximum-gap/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
  const n = nums.length;

  if (n < 2) {
    return 0;
  }

  if (n < 3) {
    return Math.abs(nums[0] - nums[1]);
  }

  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;
  for (const num of nums) {
    max = Math.max(max, num);
    min = Math.min(min, num);
  }

  if (max === min) {
    return 0;
  }

  const k = n - 1;
  const averageGap = (max - min) / k;
  const minBuckets = new Array(k);
  const maxBuckets = new Array(k);
  minBuckets[0] = min;
  maxBuckets[0] = min;
  minBuckets[k - 1] = max;
  maxBuckets[k - 1] = max;

  for (const num of nums) {
    if (num === min || num === max) {
      continue;
    }

    const j = Math.floor((num - min) / averageGap);
    minBuckets[j] = minBuckets[j] ? Math.min(minBuckets[j], num) : num;
    maxBuckets[j] = maxBuckets[j] ? Math.max(maxBuckets[j], num) : num;
  }

  let largestGap = 0;
  let prevMaxIndex = 0;
  for (let i = 1; i < n - 1; i++) {
    if (minBuckets[i]) {
      largestGap = Math.max(largestGap, minBuckets[i] - maxBuckets[prevMaxIndex]);
    }

    if (maxBuckets[i]) {
      prevMaxIndex = i;
    }
  }

  return largestGap;
};

var nums = [3, 6, 9, 1];
var expected = 3;
var result = maximumGap(nums);
console.log(result, result === expected);

var nums = [10];
var expected = 0;
var result = maximumGap(nums);
console.log(result, result === expected);
