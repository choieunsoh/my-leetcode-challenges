// 57. Insert Interval
// https://leetcode.com/problems/insert-interval/
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const result = [];
  const len = intervals.length;
  const [newStart, newEnd] = newInterval;
  for (let i = 0; i < len; i++) {
    const [start] = intervals[i];
    if (newStart < start) {
      intervals.splice(i, 0, [newStart, newEnd]);
      break;
    }
  }
  if (intervals.length === len) {
    intervals.push([newStart, newEnd]);
  }

  let [prevStart, prevEnd] = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    if (start <= prevEnd) {
      prevStart = Math.min(prevStart, start);
      prevEnd = Math.max(prevEnd, end);
    } else {
      result.push([prevStart, prevEnd]);
      [prevStart, prevEnd] = [start, end];
    }
  }
  result.push([prevStart, prevEnd]);
  return result;
};

var intervals = [
    [1, 3],
    [6, 9],
  ],
  newInterval = [2, 5];
var expected = [
  [1, 5],
  [6, 9],
];
var result = insert(intervals, newInterval);
console.log(result, result.join() === expected.join());

var intervals = [
    [1, 2],
    [3, 5],
    [6, 7],
    [8, 10],
    [12, 16],
  ],
  newInterval = [4, 8];
var expected = [
  [1, 2],
  [3, 10],
  [12, 16],
];
var result = insert(intervals, newInterval);
console.log(result, result.join() === expected.join());

var intervals = [
    [1, 3],
    [6, 9],
  ],
  newInterval = [3, 5];
var expected = [
  [1, 5],
  [6, 9],
];
var result = insert(intervals, newInterval);
console.log(result, result.join() === expected.join());

var intervals = [
    [1, 3],
    [6, 9],
  ],
  newInterval = [9, 15];
var expected = [
  [1, 3],
  [6, 15],
];
var result = insert(intervals, newInterval);
console.log(result, result.join() === expected.join());

var intervals = [
    [1, 3],
    [6, 9],
  ],
  newInterval = [11, 15];
var expected = [
  [1, 3],
  [6, 9],
  [11, 15],
];
var result = insert(intervals, newInterval);
console.log(result, result.join() === expected.join());
