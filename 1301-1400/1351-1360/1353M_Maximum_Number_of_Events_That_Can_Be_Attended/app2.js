// 1353. Maximum Number of Events That Can Be Attended
// https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/description/
// T.C.: O(n log n)
// S.C.: O(n)
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function (events) {
  const n = events.length;
  let maxDay = 0;
  for (const event of events) {
    maxDay = Math.max(maxDay, event[1]);
  }
  events.sort((a, b) => a[0] - b[0]);

  let result = 0;
  const pq = new MinPriorityQueue();
  for (let startDay = 1, eventIndex = 0; startDay <= maxDay; startDay++) {
    while (eventIndex < n && events[eventIndex][0] <= startDay) {
      pq.enqueue(events[eventIndex][1]);
      eventIndex++;
    }
    while (!pq.isEmpty() && pq.front() < startDay) {
      pq.dequeue();
    }
    if (!pq.isEmpty()) {
      pq.dequeue();
      result++;
    }
  }
  return result;
};

var events = [
  [1, 2],
  [2, 3],
  [3, 4],
];
var expected = 3;
var result = maxEvents(events);
console.log(result, result === expected);

var events = [
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 2],
];
var expected = 4;
var result = maxEvents(events);
console.log(result, result === expected);

var events = [
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 3],
];
var expected = 4;
var result = maxEvents(events);
console.log(result, result === expected);

var events = [
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 3],
  [2, 4],
];
var expected = 4;
var result = maxEvents(events);
console.log(result, result === expected);

var events = [
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 3],
  [2, 3],
];
var expected = 4;
var result = maxEvents(events);
console.log(result, result === expected);

var events = [
  [1, 1],
  [1, 1],
  [1, 1],
];
var expected = 1;
var result = maxEvents(events);
console.log(result, result === expected);

var events = [
  [1, 2],
  [11, 12],
  [21, 22],
];
var expected = 3;
var result = maxEvents(events);
console.log(result, result === expected);

var events = [
  [1, 2],
  [1, 2],
  [3, 3],
  [1, 5],
  [1, 5],
];
var expected = 5;
var result = maxEvents(events);
console.log(result, result === expected);

var events = [
  [1, 2],
  [1, 2],
  [1, 6],
  [1, 2],
  [1, 2],
];
var expected = 3;
var result = maxEvents(events);
console.log(result, result === expected);

var events = [
  [1, 4],
  [4, 4],
  [2, 2],
  [3, 4],
  [1, 1],
];
var expected = 4;
var result = maxEvents(events);
console.log(result, result === expected);
