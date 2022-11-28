// 373. Find K Pairs with Smallest Sums
// https://leetcode.com/problems/find-k-pairs-with-smallest-sums/
const { MinHeap } = require('../../../_utils/heap');
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  const result = [];
  if (nums1.length === 0 || nums2.length === 0 || k === 0) return result;
  const heap = new MinHeap([], (a, b) => a[0] + a[1] - b[0] - b[1]);
  for (let i = 0; i < nums1.length; i++) {
    heap.push([nums1[i], nums2[0], 0]);
  }
  while (k-- > 0 && heap.length > 0) {
    const [num1, num2, index] = heap.pop();
    result.push([num1, num2]);

    if (index === nums2.length - 1) continue;
    const next = index + 1;
    heap.push([num1, nums2[next], next]);
  }
  return result;
};

var nums1 = [1, 7, 11],
  nums2 = [2, 4, 6],
  k = 3;
var expected = [
  [1, 2],
  [1, 4],
  [1, 6],
];
var result = kSmallestPairs(nums1, nums2, k);
console.log(result, result.join() == expected.join());

var nums1 = [1, 1, 2],
  nums2 = [1, 2, 3],
  k = 2;
var expected = [
  [1, 1],
  [1, 1],
];
var result = kSmallestPairs(nums1, nums2, k);
console.log(result, result.join() == expected.join());

var nums1 = [1, 2],
  nums2 = [3],
  k = 3;
var expected = [
  [1, 3],
  [2, 3],
];
var result = kSmallestPairs(nums1, nums2, k);
console.log(result, result.join() == expected.join());
