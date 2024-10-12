// 2406. Divide Intervals Into Minimum Number of Groups
// https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/description/
// Line Sweep Algorithm
// T.C.: O(n * m)
// S.C.: O(n)
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minGroups = function (intervals) {
  let minStart = Number.MAX_SAFE_INTEGER;
  let maxEnd = Number.MIN_SAFE_INTEGER;
  for (const [start, end] of intervals) {
    minStart = Math.min(minStart, start);
    maxEnd = Math.max(maxEnd, end + 1);
  }

  const events = new Array(maxEnd + 2).fill(0);
  for (const [start, end] of intervals) {
    events[start]++;
    events[end + 1]--;
  }

  let groups = 0;
  let maxConcurrent = 0;
  for (let time = minStart; time < maxEnd; time++) {
    maxConcurrent += events[time];
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
