// 3362. Zero Array Transformation III
// https://leetcode.com/problems/zero-array-transformation-iii/description/
// T.C.: O(n + m log m)
// S.C.: O(n + m)
const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var maxRemoval = function (nums, queries) {
  queries.sort((a, b) => a[0] - b[0]);
  const n = nums.length;
  const pq = new MaxPriorityQueue();
  const delta = new Array(n + 1).fill(0);
  let operations = 0;
  for (let i = 0, j = 0; i < n; i++) {
    operations += delta[i];
    while (j < queries.length && queries[j][0] === i) {
      pq.enqueue(queries[j][1]);
      j++;
    }
    while (operations < nums[i] && !pq.isEmpty() && pq.front() >= i) {
      const max = pq.dequeue();
      delta[max + 1]--;
      operations++;
    }
    if (operations < nums[i]) {
      return -1;
    }
  }
  return pq.size();
};

var nums = [2, 0, 2],
  queries = [
    [0, 2],
    [0, 2],
    [1, 1],
  ];
var expected = 1;
var result = maxRemoval(nums, queries);
console.log(result, result === expected);

var nums = [1, 1, 1, 1],
  queries = [
    [1, 3],
    [0, 2],
    [1, 3],
    [1, 2],
  ];
var expected = 2;
var result = maxRemoval(nums, queries);
console.log(result, result === expected);

var nums = [1, 2, 3, 4],
  queries = [[0, 3]];
var expected = -1;
var result = maxRemoval(nums, queries);
console.log(result, result === expected);
