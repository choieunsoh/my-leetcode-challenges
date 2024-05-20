// 1863. Sum of All Subset XOR Totals
// https://leetcode.com/problems/sum-of-all-subset-xor-totals/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  let result = 0;
  for (const num of nums) {
    result |= num;
  }
  return result << (nums.length - 1);
};

var nums = [1, 3];
var expected = 6;
var result = subsetXORSum(nums);
console.log(result, result === expected);

var nums = [5, 1, 6];
var expected = 28;
var result = subsetXORSum(nums);
console.log(result, result === expected);

var nums = [3, 4, 5, 6, 7, 8];
var expected = 480;
var result = subsetXORSum(nums);
console.log(result, result === expected);
