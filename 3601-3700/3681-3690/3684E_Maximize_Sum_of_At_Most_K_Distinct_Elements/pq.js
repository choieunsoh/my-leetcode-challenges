// 3684. Maximize Sum of At Most K Distinct Elements
// https://leetcode.com/problems/maximize-sum-of-at-most-k-distinct-elements/description/
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
// T.C.: O(n + u log k)
// S.C.: O(k)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxKDistinct = function (nums, k) {
  // Use a Set to efficiently get unique numbers in O(n) time.
  const uniqueNums = new Set(nums);

  // A min-heap is ideal for finding the top k elements without sorting all unique numbers.
  // This is much faster when the number of unique elements is large, but k is small.
  // Note: This solution assumes a MinPriorityQueue class is available.
  const minHeap = new MinPriorityQueue();

  for (const num of uniqueNums) {
    if (minHeap.size() < k) {
      // Fill the heap until it contains k elements.
      minHeap.enqueue(num);
    } else if (num > minHeap.front()) {
      // If a new number is larger than the smallest element in the heap, replace it.
      minHeap.dequeue();
      minHeap.enqueue(num);
    }
  }

  // The heap now contains the top k (or fewer) largest distinct elements.
  // Extract them and sort into the required descending order.
  const result = minHeap.toArray();
  return result.sort((a, b) => b - a);
};

var nums = [84, 93, 100, 77, 90],
  k = 3;
var expected = [100, 93, 90];
var result = maxKDistinct(nums, k);
console.log(result, result.join() === expected.join());

var nums = [84, 93, 100, 77, 93],
  k = 3;
var expected = [100, 93, 84];
var result = maxKDistinct(nums, k);
console.log(result, result.join() === expected.join());

var nums = [1, 1, 1, 2, 2, 2],
  k = 6;
var expected = [2, 1];
var result = maxKDistinct(nums, k);
console.log(result, result.join() === expected.join());
