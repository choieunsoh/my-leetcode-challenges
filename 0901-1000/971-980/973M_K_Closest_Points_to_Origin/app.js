// 973. K Closest Points to Origin
// https://leetcode.com/problems/k-closest-points-to-origin/
const { MinHeap } = require('../../../_utils/heap');
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  const result = [];
  const heap = new MinHeap(points, comparer);
  for (let i = 0; i < k; i++) {
    result.push(heap.pop());
  }
  return result;

  function comparer(a, b) {
    return a[0] ** 2 + a[1] ** 2 - b[0] ** 2 - b[1] ** 2;
  }
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
