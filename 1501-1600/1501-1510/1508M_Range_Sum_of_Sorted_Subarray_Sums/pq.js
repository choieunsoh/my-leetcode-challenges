// 1508. Range Sum of Sorted Subarray Sums
// https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/description/
// T.C.: O(n^2 log n)
// S.C.: O(n)
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function (nums, n, left, right) {
  const heap = new MinPriorityQueue((x) => x[0]);
  const MOD = 1e9 + 7;
  let result = 0;
  for (let i = 0; i < n; i++) {
    heap.enqueue([nums[i], i]);
  }

  for (let i = 1; i <= right; i++) {
    const [sum, idx] = heap.dequeue();
    if (i >= left) result = (result + sum) % MOD;
    // extend the subarray if it's not at the last idx
    if (idx < n - 1) heap.enqueue([sum + nums[idx + 1], idx + 1]);
  }
  return result;
};

var nums = [1, 2, 3, 4],
  n = 4,
  left = 1,
  right = 5;
var expected = 13;
var result = rangeSum(nums, n, left, right);
console.log(result, result === expected);

var nums = [1, 2, 3, 4],
  n = 4,
  left = 3,
  right = 4;
var expected = 6;
var result = rangeSum(nums, n, left, right);
console.log(result, result === expected);

var nums = [1, 2, 3, 4],
  n = 4,
  left = 1,
  right = 10;
var expected = 50;
var result = rangeSum(nums, n, left, right);
console.log(result, result === expected);
