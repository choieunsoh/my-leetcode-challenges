// 2054. Two Best Non-Overlapping Events
// https://leetcode.com/problems/two-best-non-overlapping-events/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function (events) {
  const endEvents = [...events];
  endEvents.sort((a, b) => a[1] - b[1]);
  events.sort((a, b) => a[0] - b[0]);

  let previousValue = 0;
  let result = 0;
  let currentEndTime = 0;

  for (const [startTime, , eventValue] of events) {
    while (endEvents[currentEndTime][1] < startTime) {
      const [, , endValue] = endEvents[currentEndTime++];
      previousValue = Math.max(endValue, previousValue);
    }
    result = Math.max(result, previousValue + eventValue);
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
