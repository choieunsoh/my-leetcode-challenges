// 2172. Maximum AND Sum of Array
// https://leetcode.com/problems/maximum-and-sum-of-array/description/
// T.C.: O(2^(2*numSlots) * numSlots)
// S.C.: O(2^(2*numSlots))
/**
 * @param {number[]} nums
 * @param {number} numSlots
 * @return {number}
 */
var maximumANDSum = function (nums, numSlots) {
  const originalSize = nums.length;
  nums.length = 2 * numSlots;
  for (let i = originalSize; i < nums.length; i++) {
    nums[i] = 0;
  }

  const n = nums.length;
  const dp = new Array(1 << n).fill(0);

  for (let mask = 1; mask < 1 << n; mask++) {
    const cnt = countBits(mask);
    const slot = (cnt + 1) / 2;
    for (let i = 0; i < n; ++i) {
      if ((mask >> i) & 1) {
        // we assign nums[i] to `slot`-th slot
        dp[mask] = Math.max(dp[mask], dp[mask ^ (1 << i)] + (slot & nums[i]));
      }
    }
  }
  return dp[(1 << n) - 1];

  function countBits(num) {
    let cnt = 0;
    while (num) {
      num &= num - 1;
      cnt++;
    }
    return cnt;
  }
};

var nums = [1, 2, 3, 4, 5, 6],
  numSlots = 3;
var expected = 9;
var result = maximumANDSum(nums, numSlots);
console.log(result, result === expected);

var nums = [1, 3, 10, 4, 7, 1],
  numSlots = 9;
var expected = 24;
var result = maximumANDSum(nums, numSlots);
console.log(result, result === expected);
