// 2054. Two Best Non-Overlapping Events
// https://leetcode.com/problems/two-best-non-overlapping-events/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function (events) {
  events.sort((a, b) => a[0] - b[0]);
  const memo = Array.from({ length: events.length }, () => new Array(3).fill(-1));
  return findTwoEvents(0, 0);

  function findTwoEvents(index, count) {
    if (count === 2 || index === events.length) return 0;

    if (memo[index][count] !== -1) return memo[index][count];

    const [, endTime, eventValue] = events[index];
    const nextIndex = findNextEventIndex(index, endTime);

    let take = eventValue;
    if (nextIndex < events.length && events[nextIndex][0] > endTime) {
      take += findTwoEvents(nextIndex, count + 1);
    }
    const skip = findTwoEvents(index + 1, count);
    return (memo[index][count] = Math.max(take, skip));
  }

  function findNextEventIndex(currIndex, endTime) {
    let left = currIndex + 1;
    let right = events.length - 1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (events[mid][0] > endTime) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return left;
  }
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
