// 3264. Final Array State After K Multiplication Operations I
// https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-i/description/
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
// T.C.: O(n + k log n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function (nums, k, multiplier) {
  const pq = new MinPriorityQueue({ compare: (a, b) => a[0] - b[0] || a[1] - b[1] });
  for (let i = 0; i < nums.length; i++) {
    pq.enqueue([nums[i], i]);
  }

  for (let i = 0; i < k; i++) {
    const [top, index] = pq.dequeue();
    pq.enqueue([top * multiplier, index]);
  }

  const result = new Array(nums.length);
  while (!pq.isEmpty()) {
    const [top, index] = pq.dequeue();
    result[index] = top;
  }
  return result;
};

var nums = [2, 1, 3, 5, 6],
  k = 5,
  multiplier = 2;
var expected = [8, 4, 6, 5, 6];
var result = getFinalState(nums, k, multiplier);
console.log(result, result.join() === expected.join());

var nums = [1, 2],
  k = 3,
  multiplier = 4;
var expected = [16, 8];
var result = getFinalState(nums, k, multiplier);
console.log(result, result.join() === expected.join());

var nums = [2, 2],
  k = 1,
  multiplier = 5;
var expected = [10, 2];
var result = getFinalState(nums, k, multiplier);
console.log(result, result.join() === expected.join());
