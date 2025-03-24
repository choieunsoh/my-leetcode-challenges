// 3169. Count Days Without Meetings
// https://leetcode.com/problems/count-days-without-meetings/description/
// T.C.: O(n log n)
// S.C.: O(n)
const { TreeMap } = require('../../../_utils/tree-map');
/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function (days, meetings) {
  const dayMap = new TreeMap();
  let prefixSum = 0;
  let freeDays = 0;
  let previousDay = days;

  for (const [start, end] of meetings) {
    // Set first day of meetings
    previousDay = Math.min(previousDay, start);

    // Process start and end of meeting
    dayMap.put(start, dayMap.getOrDefault(start, 0) + 1);
    dayMap.put(end + 1, dayMap.getOrDefault(end + 1, 0) - 1);
  }

  // Add all days before the first day of meetings
  freeDays += previousDay - 1;
  for (const currentDay of dayMap.keySet()) {
    // Add current range of days without a meeting
    if (prefixSum === 0) {
      freeDays += currentDay - previousDay;
    }
    prefixSum += dayMap.get(currentDay);
    previousDay = currentDay;
  }

  // Add all days after the last day of meetings
  freeDays += days - previousDay + 1;
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
