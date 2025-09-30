// 2221. Find Triangular Sum of an Array
// https://leetcode.com/problems/find-triangular-sum-of-an-array/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function (nums) {
  const n = nums.length;
  let result = 0;
  let C = 1n; // use BigInt for exact binomial coefficients

  for (let k = 0; k < n; k++) {
    result = (result + Number(((C % 10n) * BigInt(nums[k])) % 10n)) % 10;

    // Update C: C(n-1, k+1) = C(n-1, k) * (n-1-k)/(k+1)
    C = (C * BigInt(n - 1 - k)) / BigInt(k + 1);
  }
  return result;
};

var nums = [1, 2, 3, 4, 5];
var expected = 8;
var result = triangularSum(nums);
console.log(result, result === expected);

var nums = [5];
var expected = 5;
var result = triangularSum(nums);
console.log(result, result === expected);

var nums = Array.from({ length: 1000 }, (_, i) => i);
var expected = 6;
var result = triangularSum(nums);
console.log(result, result === expected);
