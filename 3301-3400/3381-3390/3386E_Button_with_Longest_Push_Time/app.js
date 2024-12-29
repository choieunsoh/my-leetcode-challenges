// 3386. Button with Longest Push Time
// https://leetcode.com/problems/button-with-longest-push-time/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[][]} events
 * @return {number}
 */
var buttonWithLongestTime = function (events) {
  let result = 0;
  let maxTime = 0;
  let startTime = 0;
  for (const [index, endTime] of events) {
    const time = endTime - startTime;
    if (time > maxTime) {
      result = index;
      maxTime = time;
    } else if (time === maxTime) {
      result = Math.min(result, index);
    }
    startTime = endTime;
  }
  return result;
};

var events = [
  [1, 2],
  [2, 5],
  [3, 9],
  [1, 15],
];
var expected = 1;
var result = buttonWithLongestTime(events);
console.log(result, result === expected);

var events = [
  [10, 5],
  [1, 7],
];
var expected = 10;
var result = buttonWithLongestTime(events);
console.log(result, result === expected);

var events = [
  [8, 4],
  [7, 6],
  [19, 9],
  [8, 14],
  [13, 15],
  [2, 16],
  [2, 18],
];
var expected = 8;
var result = buttonWithLongestTime(events);
console.log(result, result === expected);

var events = [
  [9, 4],
  [19, 5],
  [2, 8],
  [3, 11],
  [2, 15],
];
var expected = 2;
var result = buttonWithLongestTime(events);
console.log(result, result === expected);
