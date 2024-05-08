// 1353. Maximum Number of Events That Can Be Attended
// https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/description/
// T.C.: O(n log n)
// S.C.: O(n)
const { PriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function (events) {
  const n = events.length;
  events.sort((a, b) => a[0] - b[0]);
  let result = 0;
  const pqEnds = new PriorityQueue({ compare: (a, b) => a - b });
  for (let startDay = 0, i = 0; i < n || !pqEnds.isEmpty(); startDay++) {
    if (pqEnds.isEmpty()) startDay = events[i][0];

    while (i < n && events[i][0] === startDay) {
      pqEnds.enqueue(events[i][1]);
      i++;
    }
    while (!pqEnds.isEmpty() && pqEnds.front() < startDay) {
      pqEnds.dequeue();
    }
    if (!pqEnds.isEmpty()) {
      pqEnds.dequeue();
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
