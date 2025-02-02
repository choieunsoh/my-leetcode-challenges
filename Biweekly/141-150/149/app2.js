/**
 * @param {number} eventTime
 * @param {number} k
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @return {number}
 */
var maxFreeTime = function (eventTime, k, startTime, endTime) {
  return 0;
};

var eventTime = 5,
  k = 1,
  startTime = [1, 3],
  endTime = [2, 5];
var expected = 2;
var result = maxFreeTime(eventTime, k, startTime, endTime);
console.log(result, result === expected);

var eventTime = 10,
  k = 1,
  startTime = [0, 2, 9],
  endTime = [1, 4, 10];
var expected = 6;
var result = maxFreeTime(eventTime, k, startTime, endTime);
console.log(result, result === expected);

var eventTime = 5,
  k = 2,
  startTime = [0, 1, 2, 3, 4],
  endTime = [1, 2, 3, 4, 5];
var expected = 0;
var result = maxFreeTime(eventTime, k, startTime, endTime);
console.log(result, result === expected);
