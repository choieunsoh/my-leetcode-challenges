// 2054. Two Best Non-Overlapping Events
// https://leetcode.com/problems/two-best-non-overlapping-events/description/
// T.C.: O(n log n)
// S.C.: O(n)
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function (events) {
  events.sort((a, b) => a[0] - b[0]);
  const pq = new MinPriorityQueue({ compare: (a, b) => a[0] - b[0] });

  let maxTwoEventsValue = 0;
  let maxValue = 0;
  for (const [startTime, endTime, eventValue] of events) {
    while (!pq.isEmpty() && pq.front()[0] < startTime) {
      const [, value] = pq.dequeue();
      maxValue = Math.max(maxValue, value);
    }
    maxTwoEventsValue = Math.max(maxTwoEventsValue, eventValue + maxValue);
    pq.enqueue([endTime, eventValue]);
  }
  return maxTwoEventsValue;
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
