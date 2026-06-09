// 3689. Maximum Total Subarray Value I
// https://leetcode.com/problems/maximum-total-subarray-value-i/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxTotalValue = function (nums, k) {
  const maxVal = Math.max(...nums);
  const minVal = Math.min(...nums);
  return (maxVal - minVal) * k;
};

var nums = [1, 3, 2],
  k = 2;
var expected = 4;
var result = maxTotalValue(nums, k);
console.log(result, result === expected);

var nums = [4, 2, 5, 1],
  k = 3;
var expected = 12;
var result = maxTotalValue(nums, k);
console.log(result, result === expected);
