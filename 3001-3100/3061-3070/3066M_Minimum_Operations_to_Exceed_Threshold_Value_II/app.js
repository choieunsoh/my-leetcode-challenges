// 3066. Minimum Operations to Exceed Threshold Value II
// https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii/description/
// T.C.: O(n log n)
// S.C.: O(n)
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  let ops = 0;
  const pq = new MinPriorityQueue();
  for (const num of nums) {
    pq.enqueue(num);
  }

  while (pq.front().element < k) {
    const num1 = pq.dequeue().element;
    const num2 = pq.dequeue().element;
    const num = num1 * 2 + num2;
    pq.enqueue(num);
    ops++;
  }
  return ops;
};

var nums = [2, 11, 10, 1, 3],
  k = 10;
var expected = 2;
var result = minOperations(nums, k);
console.log(result, result === expected);

var nums = [1, 1, 2, 4, 9],
  k = 20;
var expected = 4;
var result = minOperations(nums, k);
console.log(result, result === expected);

var nums = [999999999, 999999999, 999999999],
  k = 1000000000;
var expected = 2;
var result = minOperations(nums, k);
console.log(result, result === expected);

var nums = [69, 89, 57, 31, 84, 97, 50, 38, 91, 86],
  k = 91;
var expected = 4;
var result = minOperations(nums, k);
console.log(result, result === expected);

var nums = [19, 44, 61, 96, 84, 79, 84, 61, 97, 44],
  k = 44;
var expected = 1;
var result = minOperations(nums, k);
console.log(result, result === expected);

var nums = [72, 94, 72, 18, 20, 80, 97, 1],
  k = 72;
var expected = 3;
var result = minOperations(nums, k);
console.log(result, result === expected);
