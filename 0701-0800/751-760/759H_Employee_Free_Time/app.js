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
  const employeeSchedule = schedule.flatMap((interval) => interval);
  employeeSchedule.sort((a, b) => a.start - b.start);
  const output = [];
  let currEnd = null;
  for (let interval of employeeSchedule) {
    if (interval.start <= currEnd || currEnd === null) {
      currEnd = Math.max(interval.end, currEnd ?? 0);
      continue;
    }
    output.push(new Interval(currEnd, interval.start));
    currEnd = interval.end;
  }
  return output;
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
