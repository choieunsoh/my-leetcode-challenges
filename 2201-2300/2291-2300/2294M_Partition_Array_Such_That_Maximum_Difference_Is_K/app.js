// 2294. Partition Array Such That Maximum Difference Is K
// https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function (nums, k) {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  let count = 0;
  let index = 0;
  while (index < n) {
    const max = nums[index] + k;
    while (index < n && nums[index] <= max) {
      index++;
    }
    count++;
  }
  return count;
};

var nums = [3, 6, 1, 2, 5],
  k = 2;
var expected = 2;
var result = partitionArray(nums, k);
console.log(result, result === expected);

var nums = [1, 2, 3],
  k = 1;
var expected = 2;
var result = partitionArray(nums, k);
console.log(result, result === expected);

var nums = [2, 2, 4, 5],
  k = 0;
var expected = 3;
var result = partitionArray(nums, k);
console.log(result, result === expected);
