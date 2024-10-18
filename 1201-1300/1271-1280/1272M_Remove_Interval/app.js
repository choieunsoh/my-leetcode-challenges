// 1272. Remove Interval
// https://leetcode.com/problems/remove-interval/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[][]} intervals
 * @param {number[]} toBeRemoved
 * @return {number[][]}
 */
var removeInterval = function (intervals, toBeRemoved) {
  const result = [];
  const [r1, r2] = toBeRemoved;
  for (const [start, end] of intervals) {
    if (end < r1 || start > r2) {
      result.push([start, end]);
    } else {
      if (start < r1) result.push([start, r1]);
      if (end > r2) result.push([r2, end]);
    }
  }
  return result;
};

var intervals = [
    [0, 2],
    [3, 4],
    [5, 7],
  ],
  toBeRemoved = [1, 6];
var expected = [
  [0, 1],
  [6, 7],
];
var result = removeInterval(intervals, toBeRemoved);
console.log(result, result.join() === expected.join());

var intervals = [[0, 5]],
  toBeRemoved = [2, 3];
var expected = [
  [0, 2],
  [3, 5],
];
var result = removeInterval(intervals, toBeRemoved);
console.log(result, result.join() === expected.join());

var intervals = [
    [-5, -4],
    [-3, -2],
    [1, 2],
    [3, 5],
    [8, 9],
  ],
  toBeRemoved = [-1, 4];
var expected = [
  [-5, -4],
  [-3, -2],
  [4, 5],
  [8, 9],
];
var result = removeInterval(intervals, toBeRemoved);
console.log(result, result.join() === expected.join());
