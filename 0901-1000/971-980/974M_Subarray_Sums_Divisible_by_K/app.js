// 974. Subarray Sums Divisible by K
// https://leetcode.com/problems/subarray-sums-divisible-by-k/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
  let result = 0;
  const modCounting = Array(k).fill(0);
  modCounting[0] = 1;
  let prefixMod = 0;
  for (const num of nums) {
    prefixMod = (prefixMod + num) % k;
    if (prefixMod < 0) prefixMod += k;
    result += modCounting[prefixMod]++;
  }

  return result;
};

var nums = [4, 5, 0, -2, -3, 1],
  k = 5;
var expected = 7;
var result = subarraysDivByK(nums, k);
console.log(result, result === expected);

var nums = [5],
  k = 9;
var expected = 0;
var result = subarraysDivByK(nums, k);
console.log(result, result === expected);
