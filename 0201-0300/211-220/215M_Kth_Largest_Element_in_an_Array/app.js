// 215. Kth Largest Element in an Array
// https://leetcode.com/problems/kth-largest-element-in-an-array/
const { MinHeap, TinyQueue } = require('../../../_utils/heap');
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const heap = new TinyQueue(nums, (a, b) => b - a);
  console.log(heap);
  let index = 0;
  while (index++ < k - 1) {
    heap.pop();
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
