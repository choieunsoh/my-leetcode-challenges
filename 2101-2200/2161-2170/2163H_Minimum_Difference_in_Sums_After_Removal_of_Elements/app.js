// 2163. Minimum Difference in Sums After Removal of Elements
// https://leetcode.com/problems/minimum-difference-in-sums-after-removal-of-elements/description/
// T.C.: O(n log n)
// S.C.: O(n)
const { MaxPriorityQueue, MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDifference = function (nums) {
  const n = nums.length / 3;
  const part1 = new Array(n + 1).fill(0);
  let sum = 0;

  const pqSmall = new MaxPriorityQueue();
  for (let i = 0; i < n; ++i) {
    sum += nums[i];
    pqSmall.enqueue(nums[i]);
  }

  part1[0] = sum;
  for (let i = n; i < n * 2; ++i) {
    sum += nums[i];
    pqSmall.enqueue(nums[i]);
    sum -= pqSmall.dequeue();
    part1[i - (n - 1)] = sum;
  }

  let part2 = 0;
  const pqBig = new MinPriorityQueue();
  for (let i = n * 3 - 1; i >= n * 2; --i) {
    part2 += nums[i];
    pqBig.enqueue(nums[i]);
  }

  let result = part1[n] - part2;
  for (let i = n * 2 - 1; i >= n; --i) {
    part2 += nums[i];
    pqBig.enqueue(nums[i]);
    part2 -= pqBig.dequeue();
    result = Math.min(result, part1[i - n] - part2);
  }
  return result;
};

var nums = [3, 1, 2];
var expected = -1;
var result = minimumDifference(nums);
console.log(result, result === expected);

var nums = [7, 9, 5, 8, 1, 3];
var expected = 1;
var result = minimumDifference(nums);
console.log(result, result === expected);
