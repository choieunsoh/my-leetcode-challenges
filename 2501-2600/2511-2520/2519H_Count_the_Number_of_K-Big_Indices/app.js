// 2519. Count the Number of K-Big Indices
// https://leetcode.com/problems/count-the-number-of-k-big-indices/description/
// T.C.: O(n log k)
// S.C.: O(n)
const { PriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var kBigIndices = function (nums, k) {
  const validLeftSide = calcIndicesWithValidLeftSide(nums, k);
  return calcIndicesWithBothValidSides(nums, k, validLeftSide);

  function calcIndicesWithValidLeftSide(nums, k) {
    const validLeftSide = new Set();

    const pq = new PriorityQueue({ compare: (a, b) => b - a });
    for (let i = 0; i < k; i++) pq.enqueue(nums[i]);

    for (let i = k; i < nums.length - k; i++) {
      const biggest = pq.front();
      if (biggest < nums[i]) {
        validLeftSide.add(i);
        continue;
      }

      if (biggest > nums[i]) {
        pq.dequeue();
        pq.enqueue(nums[i]);
      }
    }

    return validLeftSide;
  }

  function calcIndicesWithBothValidSides(nums, k, validLeftSide) {
    const pq = new PriorityQueue({ compare: (a, b) => b - a });
    for (let i = nums.length - 1; i > nums.length - k - 1; i--) pq.enqueue(nums[i]);

    let kBigIndices = 0;
    for (let i = nums.length - k - 1; i >= k; i--) {
      const biggest = pq.front();
      if (biggest < nums[i] && validLeftSide.has(i)) {
        kBigIndices++;
        continue;
      }

      if (biggest > nums[i]) {
        pq.dequeue();
        pq.enqueue(nums[i]);
      }
    }

    return kBigIndices;
  }
};

var nums = [2, 3, 6, 5, 2, 3],
  k = 2;
var expected = 2;
var result = kBigIndices(nums, k);
console.log(result, result === expected);

var nums = [1, 1, 1],
  k = 3;
var expected = 0;
var result = kBigIndices(nums, k);
console.log(result, result === expected);
