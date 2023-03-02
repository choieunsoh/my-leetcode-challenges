// 56. Merge Intervals
// https://leetcode.com/problems/merge-intervals/
var merge = function (intervals: number[][]): number[][] {
  if (intervals.length === 0) return [];
  intervals.sort((a, b) => a[0] - b[0]);
  const result: number[][] = [];
  let current = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= current[1]) {
      current[1] = Math.max(current[1], intervals[i][1]);
    } else {
      result.push(current);
      current = intervals[i];
    }
  }
  result.push(current);

  return result;
};

var intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
var expected = [
  [1, 6],
  [8, 10],
  [15, 18],
];
var result = merge(intervals);
console.log(result, result.join() === expected.join());

var intervals = [
  [1, 4],
  [4, 5],
];
var expected = [[1, 5]];
var result = merge(intervals);
console.log(result, result.join() === expected.join());

var intervals = [
  [1, 3],
  [2, 9],
  [8, 10],
  [10, 18],
];
var expected = [[1, 18]];
var result = merge(intervals);
console.log(result, result.join() === expected.join());

var intervals = [
  [1, 4],
  [0, 4],
];
var expected = [[0, 4]];
var result = merge(intervals);
console.log(result, result.join() === expected.join());

var intervals = [
  [2, 3],
  [4, 5],
  [6, 7],
  [8, 9],
  [1, 10],
];
var expected = [[1, 10]];
var result = merge(intervals);
console.log(result, result.join() === expected.join());
