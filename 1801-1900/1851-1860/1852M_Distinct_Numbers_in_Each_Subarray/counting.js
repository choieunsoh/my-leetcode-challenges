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
  const maxNum = Math.max(...nums);
  const counts = new Uint32Array(maxNum + 1).fill(0);
  let distinctCount = 0;
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    counts[num]++;
    if (counts[num] === 1) {
      distinctCount++;
    }

    if (i >= k) {
      const leftNum = nums[i - k];
      counts[leftNum]--;
      if (counts[leftNum] === 0) {
        distinctCount--;
      }
    }

    if (i >= k - 1) {
      result[i - k + 1] = distinctCount;
    }
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
