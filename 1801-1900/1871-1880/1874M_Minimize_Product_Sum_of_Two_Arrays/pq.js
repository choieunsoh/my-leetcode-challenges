// 1874. Minimize Product Sum of Two Arrays
// https://leetcode.com/problems/minimize-product-sum-of-two-arrays/description/
// T.C.: O(n log n)
// S.C.: O(n)
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minProductSum = function (nums1, nums2) {
  nums1.sort((a, b) => b - a);
  const minPq = new MinPriorityQueue();
  for (const num of nums2) {
    minPq.enqueue(num);
  }

  let product = 0;
  for (let i = 0; i < nums1.length; i++) {
    product += nums1[i] * minPq.dequeue();
  }
  return product;
};

var nums1 = [5, 3, 4, 2],
  nums2 = [4, 2, 2, 5];
var expected = 40;
var result = minProductSum(nums1, nums2);
console.log(result, result === expected);

var nums1 = [2, 1, 4, 5, 7],
  nums2 = [3, 2, 4, 8, 6];
var expected = 65;
var result = minProductSum(nums1, nums2);
console.log(result, result === expected);
