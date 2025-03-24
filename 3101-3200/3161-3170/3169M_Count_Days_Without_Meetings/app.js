// 3169. Count Days Without Meetings
// https://leetcode.com/problems/count-days-without-meetings/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function (days, meetings) {
  let freeDays = 0;
  let lastEnd = 0;
  meetings.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  for (const [start, end] of meetings) {
    if (start > lastEnd + 1) {
      freeDays += start - lastEnd - 1;
    }
    lastEnd = Math.max(lastEnd, end);
  }
  freeDays += days - lastEnd;
  return freeDays;
};

var days = 10,
  meetings = [
    [5, 7],
    [1, 3],
    [9, 10],
  ];
var expected = 2;
var result = countDays(days, meetings);
console.log(result, result === expected);

var days = 5,
  meetings = [
    [2, 4],
    [1, 3],
  ];
var expected = 1;
var result = countDays(days, meetings);
console.log(result, result === expected);

var days = 6,
  meetings = [[1, 6]];
var expected = 0;
var result = countDays(days, meetings);
console.log(result, result === expected);

var days = 57,
  meetings = [
    [3, 49],
    [23, 44],
    [21, 56],
    [26, 55],
    [23, 52],
    [2, 9],
    [1, 48],
    [3, 31],
  ];
var expected = 1;
var result = countDays(days, meetings);
console.log(result, result === expected);
