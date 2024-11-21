// 3354. Make Array Elements Equal to Zero
// https://leetcode.com/problems/make-array-elements-equal-to-zero/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var countValidSelections = function (nums) {
  const n = nums.length;
  const prefixSum = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i];
  }

  let count = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] !== 0) continue;
    const leftSum = prefixSum[i];
    const rightSum = prefixSum[n] - prefixSum[i + 1];
    const diff = Math.abs(leftSum - rightSum);
    if (diff === 0) {
      count += 2;
    } else if (diff === 1) {
      count++;
    }
  }
  return count;
};

var nums = [1, 0, 2, 0, 3];
var expected = 2;
var result = countValidSelections(nums);
console.log(result, result === expected);

var nums = [2, 3, 4, 0, 4, 1, 0];
var expected = 0;
var result = countValidSelections(nums);
console.log(result, result === expected);

var nums = [16, 13, 10, 0, 0, 0, 10, 6, 7, 8, 7];
var expected = 3;
var result = countValidSelections(nums);
console.log(result, result === expected);
