// 1086. High Five
// https://leetcode.com/problems/high-five/description/
// T.C.: O(n log n)
// S.C.: O(n)
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[][]} items
 * @return {number[][]}
 */
var highFive = function (items) {
  const scores = new Map();
  for (const [id, score] of items) {
    if (!scores.has(id)) {
      scores.set(id, new MinPriorityQueue());
    }
    const pq = scores.get(id);
    pq.enqueue(score);
    if (pq.size() > 5) pq.dequeue();
  }

  const result = [];
  for (const [id, pq] of scores) {
    const totalScore = pq.toArray().reduce((sum, score) => sum + score.element, 0);
    result.push([id, (totalScore / 5) | 0]);
  }
  result.sort((a, b) => a[0] - b[0]);
  return result;
};

var items = [
  [1, 91],
  [1, 92],
  [2, 93],
  [2, 97],
  [1, 60],
  [2, 77],
  [1, 65],
  [1, 87],
  [1, 100],
  [2, 100],
  [2, 76],
];
var expected = [
  [1, 87],
  [2, 88],
];
var result = highFive(items);
console.log(result, result.join() === expected.join());

var items = [
  [1, 100],
  [7, 100],
  [1, 100],
  [7, 100],
  [1, 100],
  [7, 100],
  [1, 100],
  [7, 100],
  [1, 100],
  [7, 100],
];
var expected = [
  [1, 100],
  [7, 100],
];
var result = highFive(items);
console.log(result, result.join() === expected.join());

var items = [
  [5, 91],
  [5, 92],
  [3, 93],
  [3, 97],
  [5, 60],
  [3, 77],
  [5, 65],
  [5, 87],
  [5, 100],
  [3, 100],
  [3, 76],
];
var expected = [
  [3, 88],
  [5, 87],
];
var result = highFive(items);
console.log(result, result.join() === expected.join());
