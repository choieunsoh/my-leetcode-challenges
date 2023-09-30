// 215. Kth Largest Element in an Array
// https://leetcode.com/problems/kth-largest-element-in-an-array/
// T.C.: O(k log N)
// S.C.: O(N)
const { MinHeap } = require('../../../_utils/heap');
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const heap = new MinHeap();
  for (const num of nums) {
    if (heap.length < k) {
      heap.push(num);
    } else if (num > heap.peek()) {
      heap.pop();
      heap.push(num);
    }
  }

  return heap.pop();
};

var nums = [3, 2, 1, 5, 6, 4],
  k = 2;
var expected = 5;
var result = findKthLargest(nums, k);
console.log(result, result === expected);

var nums = [3, 2, 3, 1, 2, 4, 5, 5, 6],
  k = 4;
var expected = 4;
var result = findKthLargest(nums, k);
console.log(result, result === expected);
