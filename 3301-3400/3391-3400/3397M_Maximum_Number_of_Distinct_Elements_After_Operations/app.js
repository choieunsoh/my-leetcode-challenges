// 3397. Maximum Number of Distinct Elements After Operations
// https://leetcode.com/problems/maximum-number-of-distinct-elements-after-operations/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxDistinctElements = function (nums, k) {
  nums.sort((a, b) => a - b);
  const temp = [nums[0] - k];
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    const last = temp[temp.length - 1];
    if (last >= num + k) continue;

    const next = Math.max(last + 1, num - k);
    temp.push(next);
  }
  return temp.length;
};

var nums = [1, 2, 2, 3, 3, 4],
  k = 2;
var expected = 6;
var result = maxDistinctElements(nums, k);
console.log(result, result === expected);

var nums = [4, 4, 4, 4],
  k = 1;
var expected = 3;
var result = maxDistinctElements(nums, k);
console.log(result, result === expected);

// 5 6 7 6 7 8
// 5 6 7 8 9 10
var nums = [6, 7, 6, 6, 7],
  k = 1;
var expected = 4;
var result = maxDistinctElements(nums, k);
console.log(result, result === expected);

var nums = [6, 9, 6, 6, 9],
  k = 1;
var expected = 5;
var result = maxDistinctElements(nums, k);
console.log(result, result === expected);
