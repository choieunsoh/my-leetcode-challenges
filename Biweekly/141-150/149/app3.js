/**
 * @param {number} eventTime
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @return {number}
 */
var maxFreeTime = function (eventTime, startTime, endTime) {
  return 0;
};

var eventTime = 5,
  startTime = [1, 3],
  endTime = [2, 5];
var expected = 2;
var result = maxFreeTime(eventTime, startTime, endTime);
console.log(result, result === expected);

var eventTime = 10,
  startTime = [0, 7, 9],
  endTime = [1, 8, 10];
var expected = 7;
var result = maxFreeTime(eventTime, startTime, endTime);
console.log(result, result === expected);

var eventTime = 10,
  startTime = [0, 3, 7, 9],
  endTime = [1, 4, 8, 10];
var expected = 6;
var result = maxFreeTime(eventTime, startTime, endTime);
console.log(result, result === expected);

var eventTime = 5,
  startTime = [0, 1, 2, 3, 4],
  endTime = [1, 2, 3, 4, 5];
var expected = 0;
var result = maxFreeTime(eventTime, startTime, endTime);
console.log(result, result === expected);
