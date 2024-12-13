// 2593. Find Score of an Array After Marking All Elements
// https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/description/
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var findScore = function (nums) {
  const n = nums.length;
  const marked = new Array(n).fill(false);
  const pq = new MinPriorityQueue({ compare: (a, b) => a[0] - b[0] || a[1] - b[1] });
  for (let i = 0; i < n; i++) {
    pq.enqueue([nums[i], i]);
  }

  let score = 0;
  while (!pq.isEmpty()) {
    const [num, index] = pq.dequeue();
    if (marked[index]) continue;
    score += num;
    marked[index] = true;
    if (index > 0) marked[index - 1] = true;
    if (index < n - 1) marked[index + 1] = true;
  }
  return score;
};

var nums = [2, 1, 3, 4, 5, 2];
var expected = 7;
var result = findScore(nums);
console.log(result, result === expected);

var nums = [2, 3, 5, 1, 3, 2];
var expected = 5;
var result = findScore(nums);
console.log(result, result === expected);

var nums = [5, 1, 1, 7, 2, 4];
var expected = 3;
var result = findScore(nums);
console.log(result, result === expected);
