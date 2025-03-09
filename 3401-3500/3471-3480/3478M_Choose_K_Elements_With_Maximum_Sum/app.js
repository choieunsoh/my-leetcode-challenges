// 3478. Choose K Elements With Maximum Sum
// https://leetcode.com/problems/choose-k-elements-with-maximum-sum/description/
// T.C.: O(n log n)
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
  const nums = nums1.map((num, i) => [num, i]).sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const minHeap = new PriorityQueue({ compare: (a, b) => a - b });
  let sum = 0;
  for (let i = 0, j = 0; i < n; i++) {
    while (j < i && nums[j][0] < nums[i][0]) {
      sum += nums2[nums[j][1]];
      minHeap.enqueue(nums2[nums[j][1]]);
      if (minHeap.size() > k) {
        sum -= minHeap.dequeue();
      }
      j++;
    }
    result[nums[i][1]] = sum;
  }
  return result;
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
