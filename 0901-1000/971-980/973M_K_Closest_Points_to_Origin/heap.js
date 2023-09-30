// 973. K Closest Points to Origin
// https://leetcode.com/problems/k-closest-points-to-origin/
// T.C.: O(n log k)
// S.C.: O(k)
const { MaxHeap } = require('../../../_utils/heap');
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  const heap = new MaxHeap([], comparer);
  for (const point of points) {
    if (heap.length < k) {
      heap.push(point);
      continue;
    }

    if (comparer(point, heap.peek()) > 0) {
      heap.pop();
      heap.push(point);
    }
  }
  return heap.data;

  function comparer([x1, y1], [x2, y2]) {
    const a = distance(x1, y1);
    const b = distance(x2, y2);
    return b - a;
  }
  function distance(x, y) {
    return x ** 2 + y ** 2;
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
  [-2, 4],
  [3, 3],
];
var result = kClosest(points, k);
console.log(result, result.join() == expected.join());
