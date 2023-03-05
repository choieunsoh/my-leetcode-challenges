// 973. K Closest Points to Origin
// https://leetcode.com/problems/k-closest-points-to-origin/
const { PriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  function comparer([x1, y1], [x2, y2]) {
    const a = x1 ** 2 + y1 ** 2;
    const b = x2 ** 2 + y2 ** 2;
    return a - b;
  }

  const pq = new PriorityQueue(comparer, points);
  const result = [];
  for (let i = 0; i < k; i++) {
    result.push(pq.dequeue());
  }
  return result;
};

var points = [
    [1, 3],
    [-2, 2],
  ],
  k = 1;
var expected = [[-2, 2]];
var result = kClosest(points, k);
console.log(result, result.join() == expected.join());

var points = [
    [3, 3],
    [5, -1],
    [-2, 4],
  ],
  k = 2;
var expected = [
  [3, 3],
  [-2, 4],
];
var result = kClosest(points, k);
console.log(result, result.join() == expected.join());
