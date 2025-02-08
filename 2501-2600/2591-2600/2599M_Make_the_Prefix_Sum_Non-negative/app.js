// 2599. Make the Prefix Sum Non-negative
// https://leetcode.com/problems/make-the-prefix-sum-non-negative/description/
// T.C.: O(n log n)
// S.C.: O(n)
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[]} nums
 * @return {number}
 */
var makePrefSumNonNegative = function (nums) {
  let prefixSum = 0;
  let operations = 0;
  const pq = new MinPriorityQueue();
  for (const num of nums) {
    if (num < 0) {
      pq.enqueue(num);
    }

    prefixSum += num;
    while (prefixSum < 0) {
      const minNegative = pq.dequeue().element;
      prefixSum -= minNegative;
      operations++;
    }
  }
  return operations;
};

var nums = [2, 3, -5, 4];
var expected = 0;
var result = makePrefSumNonNegative(nums);
console.log(result, result === expected);

var nums = [3, -5, -2, 6];
var expected = 1;
var result = makePrefSumNonNegative(nums);
console.log(result, result === expected);

var nums = [6, -6, -3, 3, 1, 5, -4, -3, -2, -3, 4, -1, 4, 4, -2, 6, 0];
var expected = 1;
var result = makePrefSumNonNegative(nums);
console.log(result, result === expected);
