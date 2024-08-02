// 2134. Minimum Swaps to Group All 1's Together II
// https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function (nums) {
  const n = nums.length;
  let totalZeroCount = 0;
  for (const num of nums) {
    if (num === 0) totalZeroCount++;
  }

  let currentZeroCount = 0;
  for (let i = 0; i < totalZeroCount; i++) {
    if (nums[i] === 0) currentZeroCount++;
  }

  let maxSwaps = currentZeroCount;
  for (let i = totalZeroCount; i < n + totalZeroCount; i++) {
    if (nums[i % n] === 0) currentZeroCount++;
    if (nums[i - totalZeroCount] === 0) currentZeroCount--;
    maxSwaps = Math.max(maxSwaps, currentZeroCount);
  }

  return totalZeroCount - maxSwaps;
};

var nums = [0, 1, 0, 1, 1, 0, 0];
var expected = 1;
var result = minSwaps(nums);
console.log(result, result === expected);

var nums = [0, 1, 1, 1, 0, 0, 1, 1, 0];
var expected = 2;
var result = minSwaps(nums);
console.log(result, result === expected);

var nums = [1, 1, 0, 0, 1];
var expected = 0;
var result = minSwaps(nums);
console.log(result, result === expected);
