// 1288. Remove Covered Intervals
// https://leetcode.com/problems/remove-covered-intervals/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function (intervals) {
  // Sort by start point.
  // If two intervals share the same start point,
  // put the longer one to be the first.
  intervals.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

  let count = 0;
  let prevEnd = 0;
  for (const [, end] of intervals) {
    // if current interval is not covered
    // by the previous one
    if (prevEnd < end) {
      count++;
      prevEnd = end;
    }
  }
  return count;
};

var intervals = [
  [1, 4],
  [3, 6],
  [2, 8],
];
var expected = 2;
var result = removeCoveredIntervals(intervals);
console.log(result, result === expected);

var intervals = [
  [1, 4],
  [2, 3],
];
var expected = 1;
var result = removeCoveredIntervals(intervals);
console.log(result, result === expected);
