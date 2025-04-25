// 2845. Count of Interesting Subarrays
// https://leetcode.com/problems/count-of-interesting-subarrays/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} modulo
 * @param {number} k
 * @return {number}
 */
var countInterestingSubarrays = function (nums, modulo, k) {
  const n = nums.length;
  const counts = new Map();
  let result = 0;
  let prefix = 0;
  counts.set(0, 1);
  for (let i = 0; i < n; i++) {
    prefix += nums[i] % modulo === k ? 1 : 0;
    result += counts.get((prefix - k + modulo) % modulo) ?? 0;
    counts.set(prefix % modulo, (counts.get(prefix % modulo) ?? 0) + 1);
  }
  return result;
};

var nums = [3, 2, 4],
  modulo = 2,
  k = 1;
var expected = 3;
var result = countInterestingSubarrays(nums, modulo, k);
console.log(result, result === expected);

var nums = [3, 1, 9, 6],
  modulo = 3,
  k = 0;
var expected = 2;
var result = countInterestingSubarrays(nums, modulo, k);
console.log(result, result === expected);
