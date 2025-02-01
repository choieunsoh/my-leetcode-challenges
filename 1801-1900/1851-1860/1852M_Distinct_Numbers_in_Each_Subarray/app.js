// 1852. Distinct Numbers in Each Subarray
// https://leetcode.com/problems/distinct-numbers-in-each-subarray/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var distinctNumbers = function (nums, k) {
  const n = nums.length;
  const result = new Uint32Array(n - k + 1).fill(0);
  const counts = new Map();
  for (let i = 0; i < k; i++) {
    counts.set(nums[i], (counts.get(nums[i]) ?? 0) + 1);
  }
  result[0] = counts.size;

  for (let i = k; i < n; i++) {
    const leftNum = nums[i - k];
    const rightNum = nums[i];
    counts.set(leftNum, counts.get(leftNum) - 1);
    if (counts.get(leftNum) === 0) {
      counts.delete(leftNum);
    }
    counts.set(rightNum, (counts.get(rightNum) ?? 0) + 1);
    result[i - k + 1] = counts.size;
  }

  return result;
};

var nums = [1, 2, 3, 2, 2, 1, 3],
  k = 3;
var expected = [3, 2, 2, 2, 3];
var result = distinctNumbers(nums, k);
console.log(result, result.join() === expected.join());

var nums = [1, 1, 1, 1, 2, 3, 4],
  k = 4;
var expected = [1, 2, 3, 4];
var result = distinctNumbers(nums, k);
console.log(result, result.join() === expected.join());
