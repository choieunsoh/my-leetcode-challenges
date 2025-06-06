// 3478. Choose K Elements With Maximum Sum
// https://leetcode.com/problems/choose-k-elements-with-maximum-sum/description/
// T.C.: O(n^2 log k)
// S.C.: O(n)
const { PriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var findMaxSum = function (nums1, nums2, k) {
  const n = nums1.length;
  const result = new Array(n).fill(0);
  const sortedIndices = findValidIndices(nums1);
  for (let i = 0; i < n; i++) {
    let sum = 0;
    const num1 = nums1[i];
    const lessIndices = sortedIndices[i];
    const minHeap = new PriorityQueue({ compare: (a, b) => a - b });
    for (const idx of lessIndices) {
      if (nums1[idx] >= num1) continue;

      const num2 = nums2[idx];
      sum += num2;

      minHeap.enqueue(num2);
      if (minHeap.size() > k) {
        sum -= minHeap.dequeue();
      }
    }
    result[i] = sum;
  }

  return result;

  function findValidIndices(nums1) {
    const n = nums1.length;
    const sortedIndices = [...nums1.keys()].sort((a, b) => nums1[a] - nums1[b]);
    const validIndices = Array.from({ length: n }, () => []);
    const seenIndices = [];
    for (let i = 0; i < n; i++) {
      const idx = sortedIndices[i];
      validIndices[idx] = [...seenIndices];
      seenIndices.push(idx);
    }
    return validIndices;
  }
};

var nums1 = [4, 2, 1, 5, 3],
  nums2 = [10, 20, 30, 40, 50],
  k = 2;
var expected = [80, 30, 0, 80, 50];
var result = findMaxSum(nums1, nums2, k);
console.log(result, result.join() === expected.join());

var nums1 = [2, 2, 2, 2],
  nums2 = [3, 1, 2, 3],
  k = 1;
var expected = [0, 0, 0, 0];
var result = findMaxSum(nums1, nums2, k);
console.log(result, result.join() === expected.join());

var nums1 = [18, 11, 24, 9, 10, 11, 7, 29, 16],
  nums2 = [28, 26, 27, 4, 2, 19, 23, 1, 2],
  k = 1;
var expected = [26, 23, 28, 23, 23, 23, 0, 28, 26];
var result = findMaxSum(nums1, nums2, k);
console.log(result, result.join() === expected.join());
