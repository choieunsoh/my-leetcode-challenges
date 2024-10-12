// 2406. Divide Intervals Into Minimum Number of Groups
// https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minGroups = function (intervals) {
  const events = [];
  for (const [start, end] of intervals) {
    events.push([start, 1]);
    events.push([end + 1, -1]);
  }
  events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  let groups = 0;
  let maxConcurrent = 0;
  for (const [, sign] of events) {
    maxConcurrent += sign;
    groups = Math.max(groups, maxConcurrent);
  }

  return groups;
};

var intervals = [
  [5, 10],
  [6, 8],
  [1, 5],
  [2, 3],
  [1, 10],
];
var expected = 3;
var result = minGroups(intervals);
console.log(result, result === expected);

var intervals = [
  [1, 3],
  [5, 6],
  [8, 10],
  [11, 13],
];
var expected = 1;
var result = minGroups(intervals);
console.log(result, result === expected);

var intervals = [[1, 1]];
var expected = 1;
var result = minGroups(intervals);
console.log(result, result === expected);
