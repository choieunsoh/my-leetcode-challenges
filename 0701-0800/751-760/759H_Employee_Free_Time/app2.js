// 759. Employee Free Time
// https://leetcode.com/problems/employee-free-time/description/
// T.C.: O(N log N)
// S.C.: O(N)
/**
 * // Definition for an Interval.
 * function Interval(start, end) {
 *    this.start = start;
 *    this.end = end;
 * };
 */

/**
 * @param {Interval[][]} schedule
 * @return {Interval[]}
 */
var employeeFreeTime = function (schedule) {
  const OPEN = 0;
  const CLOSE = 1;
  const events = [];
  for (const employee of schedule) {
    for (const iv of employee) {
      const start = iv.start ?? iv[0];
      const end = iv.end ?? iv[1];
      events.push([start, OPEN]);
      events.push([end, CLOSE]);
    }
  }

  events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  const result = [];
  let prev = -1;
  let bal = 0;
  for (const event of events) {
    if (bal === 0 && prev >= 0) {
      result.push(typeof Interval === 'function' ? new Interval(prev, event[0]) : [prev, event[0]]);
    }
    bal += event[1] === OPEN ? 1 : -1;
    prev = event[0];
  }

  return result;
};

var schedule = [
  [
    [1, 2],
    [5, 6],
  ],
  [[1, 3]],
  [[4, 10]],
];
var expected = [[3, 4]];
var result = employeeFreeTime(schedule);
console.log(result, result.join() === expected.join());

var schedule = [
  [
    [1, 3],
    [6, 7],
  ],
  [[2, 4]],
  [
    [2, 5],
    [9, 12],
  ],
];
var expected = [
  [5, 6],
  [7, 9],
];
var result = employeeFreeTime(schedule);
console.log(result, result.join() === expected.join());
