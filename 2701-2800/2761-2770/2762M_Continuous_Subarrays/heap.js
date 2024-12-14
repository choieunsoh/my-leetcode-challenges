// 2762. Continuous Subarrays
// https://leetcode.com/problems/continuous-subarrays/
// T.C.: O(n log n)
// S.C.: O(n)
const { MinPriorityQueue, MaxPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[]} nums
 * @return {number}
 */
var continuousSubarrays = function (nums) {
  let count = 0;

  const minHeap = new MinPriorityQueue({ priority: (x) => nums[x] });
  const maxHeap = new MaxPriorityQueue({ priority: (x) => nums[x] });

  let left = 0;
  let right = 0;
  while (right < nums.length) {
    minHeap.enqueue(right);
    maxHeap.enqueue(right);

    // While window violates |nums[i] - nums[j]| ≤ 2 condition
    // Shrink window from left and remove outdated indices
    while (left < right && nums[maxHeap.front().element] - nums[minHeap.front().element] > 2) {
      left++;

      // Remove indices that are now outside window
      while (!maxHeap.isEmpty() && maxHeap.front().element < left) {
        maxHeap.dequeue();
      }
      while (!minHeap.isEmpty() && minHeap.front().element < left) {
        minHeap.dequeue();
      }
    }

    // Add count of all valid subarrays ending at right
    count += right - left + 1;
    right++;
  }

  return count;
};

var nums = [65, 66, 67, 66, 66, 65, 64, 65, 65, 64];
var expected = 43;
var result = continuousSubarrays(nums);
console.log(result, result === expected);

var nums = [5, 4, 2, 4];
var expected = 8;
var result = continuousSubarrays(nums);
console.log(result, result === expected);

var nums = [1, 2, 3];
var expected = 6;
var result = continuousSubarrays(nums);
console.log(result, result === expected);

var nums = [31, 30, 31, 32];
var expected = 10;
var result = continuousSubarrays(nums);
console.log(result, result === expected);
