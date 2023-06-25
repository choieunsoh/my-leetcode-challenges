// 2750. Ways to Split Array Into Good Subarrays
// https://leetcode.com/problems/ways-to-split-array-into-good-subarrays/
/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfGoodSubarraySplits = function (nums) {
  let zeroCount = 0;
  const counts = [];
  for (const num of nums) {
    if (num === 0) {
      zeroCount++;
    } else {
      counts.push(zeroCount);
      zeroCount = 0;
    }
  }
  if (counts.length === 0) return 0;

  const MOD = 1e9 + 7;
  let result = 1;
  for (let i = 1; i < counts.length; i++) {
    result = (result * (counts[i] + 1)) % MOD;
  }
  return result;
};

var nums = [0, 1, 0, 0, 1];
var expected = 3;
var result = numberOfGoodSubarraySplits(nums);
console.log(result, result === expected);

var nums = [0, 1, 0];
var expected = 1;
var result = numberOfGoodSubarraySplits(nums);
console.log(result, result === expected);
