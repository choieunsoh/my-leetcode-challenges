// 435. Non-overlapping Intervals
// https://leetcode.com/problems/non-overlapping-intervals/
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  let count = 0;
  intervals.sort((a, b) => a[1] - b[1]);
  let prevEnd = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    if (start < prevEnd) {
      count++;
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
