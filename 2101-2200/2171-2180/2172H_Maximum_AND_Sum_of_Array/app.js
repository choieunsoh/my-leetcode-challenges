// 2172. Maximum AND Sum of Array
// https://leetcode.com/problems/maximum-and-sum-of-array/description/
// T.C.: O(n * 3^numSlots)
// S.C.: O(3^numSlots)
/**
 * @param {number[]} nums
 * @param {number} numSlots
 * @return {number}
 */
var maximumANDSum = function (nums, numSlots) {
  const memo = [];
  return dp(0, 0);

  function dp(index, mask) {
    if (memo[mask] !== undefined) return memo[mask];
    if (index === nums.length) return 0;

    let max = 0;
    for (let slot = 1, maskBit = 1; slot <= numSlots; slot++, maskBit *= 3) {
      if (((mask / maskBit) | 0) % 3 === 2) continue;

      const take = nums[index] & slot;
      const skip = dp(index + 1, mask + maskBit);
      max = Math.max(max, take + skip);
    }

    memo[mask] = max;
    return max;
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
