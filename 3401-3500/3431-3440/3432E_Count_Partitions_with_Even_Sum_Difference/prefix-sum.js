// 3432. Count Partitions with Even Sum Difference
// https://leetcode.com/problems/count-partitions-with-even-sum-difference/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function (nums) {
  const n = nums.length;
  const prefixSum = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    prefixSum[i] = (prefixSum[i - 1] ?? 0) + nums[i];
  }

  const total = prefixSum[n - 1];
  if (total % 2 !== 0) {
    return 0;
  }

  let count = 0;
  for (let i = 0; i < n - 1; i++) {
    const left = prefixSum[i];
    const right = total - left;
    if (Math.abs(left - right) % 2 === 0) {
      count++;
    }
  }
  return count;
};

var nums = [10, 10, 3, 7, 6];
var expected = 4;
var result = countPartitions(nums);
console.log(result, result === expected);

var nums = [1, 2, 2];
var expected = 0;
var result = countPartitions(nums);
console.log(result, result === expected);

var nums = [2, 4, 6, 8];
var expected = 3;
var result = countPartitions(nums);
console.log(result, result === expected);
