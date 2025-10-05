// 3701. Compute Alternating Sum
// https://leetcode.com/problems/compute-alternating-sum/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSum = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      sum += nums[i];
    } else {
      sum -= nums[i];
    }
  }
  return sum;
};

var nums = [1, 3, 5, 7];
var expected = -4;
var result = alternatingSum(nums);
console.log(result, result === expected);

var nums = [100];
var expected = 100;
var result = alternatingSum(nums);
console.log(result, result === expected);
