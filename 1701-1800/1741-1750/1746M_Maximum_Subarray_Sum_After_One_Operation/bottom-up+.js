// 1746. Maximum Subarray Sum After One Operation
// https://leetcode.com/problems/maximum-subarray-sum-after-one-operation/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumAfterOperation = function (nums) {
  let prevMaxSum = nums[0];
  let prevSquaredMaxSum = nums[0] * nums[0];
  let maxSum = prevSquaredMaxSum;
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    const squaredNum = nums[i] * nums[i];
    // without square
    const currMaxSum = Math.max(num, num + prevMaxSum);
    // with square
    const currSquaredMaxSum = Math.max(squaredNum, squaredNum + prevMaxSum, num + prevSquaredMaxSum);

    maxSum = Math.max(maxSum, currMaxSum, currSquaredMaxSum);
    prevMaxSum = currMaxSum;
    prevSquaredMaxSum = currSquaredMaxSum;
  }

  return maxSum;
};

var nums = [2, -1, -4, -3];
var expected = 17;
var result = maxSumAfterOperation(nums);
console.log(result, result === expected);

var nums = [1, -1, 1, 1, -1, -1, 1];
var expected = 4;
var result = maxSumAfterOperation(nums);
console.log(result, result === expected);
