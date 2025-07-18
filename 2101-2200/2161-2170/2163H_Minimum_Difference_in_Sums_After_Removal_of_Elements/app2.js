// 2163. Minimum Difference in Sums After Removal of Elements
// https://leetcode.com/problems/minimum-difference-in-sums-after-removal-of-elements/description/
// T.C.: O(n log n)
// S.C.: O(n)
const { PriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDifference = function (nums) {
  const n = nums.length / 3;

  const firstN = nums.slice(0, n);
  const maxPQ = PriorityQueue.fromArray(firstN, (a, b) => b - a);
  const min = Array(n + 1);
  min[0] = firstN.reduce((acc, v) => acc + v, 0);
  for (let i = 1; i <= n; i++) {
    if (nums[n - 1 + i] < maxPQ.front()) {
      const tmp = maxPQ.pop();
      maxPQ.push(nums[n - 1 + i]);
      min[i] = min[i - 1] + nums[n - 1 + i] - tmp;
    } else {
      min[i] = min[i - 1];
    }
  }

  const secondN = nums.slice(2 * n);
  const minPQ = PriorityQueue.fromArray(secondN, (a, b) => a - b);
  const max = Array(n + 1).fill(0);
  max[n] = secondN.reduce((acc, v) => acc + v, 0);
  for (let i = 1; i <= n; i++) {
    if (nums[2 * n - i] > minPQ.front()) {
      const tmp = minPQ.pop();
      minPQ.push(nums[2 * n - i]);
      max[n - i] = max[n - i + 1] - tmp + nums[2 * n - i];
    } else {
      max[n - i] = max[n - i + 1];
    }
  }

  let result = Number.MAX_VALUE;
  for (let i = 0; i <= n; i++) {
    result = Math.min(result, min[i] - max[i]);
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
