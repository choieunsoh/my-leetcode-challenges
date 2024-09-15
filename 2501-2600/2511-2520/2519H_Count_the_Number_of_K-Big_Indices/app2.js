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
    const n = nums.length;
    const validLeftSide = new Array(n).fill(false);

    const pq = new PriorityQueue({ compare: (a, b) => b - a });
    for (let i = 0; i < n; i++) {
      if (pq.size() && pq.front() < nums[i]) {
        validLeftSide[i] = true;
      }

      pq.enqueue(nums[i]);

      if (pq.size() > k) {
        pq.dequeue();
      }
    }

    return validLeftSide;
  }

  function calcIndicesWithBothValidSides(nums, k, validLeftSide) {
    const n = nums.length;
    const pq = new PriorityQueue({ compare: (a, b) => b - a });

    let kBigIndices = 0;
    for (let i = n - 1; i >= 0; i--) {
      if (pq.size() && pq.front() < nums[i] && validLeftSide[i]) {
        kBigIndices++;
      }

      pq.enqueue(nums[i]);

      if (pq.size() > k) {
        pq.dequeue();
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
