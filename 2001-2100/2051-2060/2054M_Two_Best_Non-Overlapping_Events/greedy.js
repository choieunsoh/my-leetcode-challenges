// 2054. Two Best Non-Overlapping Events
// https://leetcode.com/problems/two-best-non-overlapping-events/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function (events) {
  const times = [];
  for (const [startTime, endTime, eventValue] of events) {
    times.push([startTime, 1, eventValue]);
    times.push([endTime + 1, 0, eventValue]);
  }
  times.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  let result = 0;
  let maxValue = 0;
  for (const [, type, eventValue] of times) {
    if (type === 1) {
      result = Math.max(result, eventValue + maxValue);
    } else {
      maxValue = Math.max(maxValue, eventValue);
    }
  }
  return result;
};

var events = [
  [1, 3, 2],
  [4, 5, 2],
  [2, 4, 3],
];
var expected = 4;
var result = maxTwoEvents(events);
console.log(result, result === expected);

var events = [
  [1, 3, 2],
  [4, 5, 2],
  [1, 5, 5],
];
var expected = 5;
var result = maxTwoEvents(events);
console.log(result, result === expected);

var events = [
  [1, 5, 3],
  [1, 5, 1],
  [6, 6, 5],
];
var expected = 8;
var result = maxTwoEvents(events);
console.log(result, result === expected);
