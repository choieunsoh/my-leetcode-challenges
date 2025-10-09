// 2651. Calculate Delayed Arrival Time
// https://leetcode.com/problems/calculate-delayed-arrival-time/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
var findDelayedArrivalTime = function (arrivalTime, delayedTime) {
  return (arrivalTime + delayedTime) % 24;
};

var arrivalTime = 15,
  delayedTime = 5;
var expected = 20;
var result = findDelayedArrivalTime(arrivalTime, delayedTime);
console.log(result, result === expected);

var arrivalTime = 13,
  delayedTime = 11;
var expected = 0;
var result = findDelayedArrivalTime(arrivalTime, delayedTime);
console.log(result, result === expected);
