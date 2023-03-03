// 435. Non-overlapping Intervals
// https://leetcode.com/problems/non-overlapping-intervals/
var eraseOverlapIntervals = function (intervals: number[][]): number {
  let count = 0;
  intervals.sort((a, b) => a[0] - b[0]);
  let prevEnd = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    if (start < prevEnd) {
      count++;
      prevEnd = Math.min(prevEnd, end);
    } else {
      prevEnd = end;
    }
  }
  return count;
};

var intervals = [
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 3],
];
var expected = 1;
var result = eraseOverlapIntervals(intervals);
console.log(result, expected, result === expected);

var intervals = [
  [1, 2],
  [1, 2],
  [1, 2],
];
var expected = 2;
var result = eraseOverlapIntervals(intervals);
console.log(result, expected, result === expected);

var intervals = [
  [1, 2],
  [2, 3],
];
var expected = 0;
var result = eraseOverlapIntervals(intervals);
console.log(result, expected, result === expected);

var intervals = [
  [1, 100],
  [11, 22],
  [1, 11],
  [2, 12],
];
var expected = 2;
var result = eraseOverlapIntervals(intervals);
console.log(result, expected, result === expected);

var intervals = [
  [0, 2],
  [1, 3],
  [2, 4],
  [3, 5],
  [4, 6],
];
var expected = 2;
var result = eraseOverlapIntervals(intervals);
console.log(result, expected, result === expected);
