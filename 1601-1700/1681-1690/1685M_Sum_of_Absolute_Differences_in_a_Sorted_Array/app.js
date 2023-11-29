// 1685. Sum of Absolute Differences in a Sorted Array
// https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function (nums) {
  const n = nums.length;
  const result = new Array(n);
  const totalSum = nums.reduce((sum, num) => sum + num, 0);
  let leftSum = 0;
  for (let i = 0; i < n; i++) {
    const rightSum = totalSum - leftSum - nums[i];
    const leftCount = i;
    const rightCount = n - 1 - i;
    const leftTotal = leftCount * nums[i] - leftSum;
    const rightTotal = rightSum - rightCount * nums[i];
    result[i] = leftTotal + rightTotal;
    leftSum += nums[i];
  }
  return result;
};

var nums = [2, 3, 5];
var expected = [4, 3, 5];
var result = getSumAbsoluteDifferences(nums);
console.log(result, result.join() === expected.join());

var nums = [1, 4, 6, 8, 10];
var expected = [24, 15, 13, 15, 21];
var result = getSumAbsoluteDifferences(nums);
console.log(result, result.join() === expected.join());
