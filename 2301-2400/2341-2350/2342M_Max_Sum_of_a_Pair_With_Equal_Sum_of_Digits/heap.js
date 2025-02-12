// 2342. Max Sum of a Pair With Equal Sum of Digits
// https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/description/
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
// T.C.: O(n log m)
// S.C.: O(log m)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
  let maxSum = -1;
  const digitSumGroups = Array.from({ length: 82 }, () => new MinPriorityQueue());
  for (const num of nums) {
    const sum = sumDigit(num);
    digitSumGroups[sum].enqueue(num);

    if (digitSumGroups[sum].size() > 2) {
      digitSumGroups[sum].dequeue();
    }
  }

  for (const pq of digitSumGroups) {
    if (pq.size() === 2) {
      const num1 = pq.dequeue().element;
      const num2 = pq.dequeue().element;
      maxSum = Math.max(maxSum, num1 + num2);
    }
  }
  return maxSum;

  function sumDigit(num) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = (num / 10) | 0;
    }
    return sum;
  }
};

var nums = [18, 43, 36, 13, 7];
var expected = 54;
var result = maximumSum(nums);
console.log(result, result === expected);

var nums = [10, 12, 19, 14];
var expected = -1;
var result = maximumSum(nums);
console.log(result, result === expected);

var nums = [18, 43, 36, 13, 7, 27, 45];
var expected = 81;
var result = maximumSum(nums);
console.log(result, result === expected);
