// 2332. The Latest Time to Catch a Bus
// https://leetcode.com/problems/the-latest-time-to-catch-a-bus/description/
// T.C.: O(n log n + m log m)
// S.C.: O(1)
/**
 * @param {number[]} buses
 * @param {number[]} passengers
 * @param {number} capacity
 * @return {number}
 */
var latestTimeCatchTheBus = function (buses, passengers, capacity) {
  buses.sort((a, b) => a - b);
  passengers.sort((a, b) => a - b);

  let passengerIndex = 0;
  let currentCapacity = 0;
  for (const departureTime of buses) {
    currentCapacity = 0;
    while (
      currentCapacity < capacity &&
      passengerIndex < passengers.length &&
      passengers[passengerIndex] <= departureTime
    ) {
      currentCapacity++;
      passengerIndex++;
    }
  }

  let result = currentCapacity !== capacity ? buses[buses.length - 1] : passengers[passengerIndex - 1];
  const passengerSet = new Set(passengers);
  while (passengerSet.has(result)) {
    result--;
  }
  return result;
};

var buses = [10, 20],
  passengers = [2, 17, 18, 19],
  capacity = 2;
var expected = 16;
var result = latestTimeCatchTheBus(buses, passengers, capacity);
console.log(result, result === expected);

var buses = [20, 30, 10],
  passengers = [19, 13, 26, 4, 25, 11, 21],
  capacity = 2;
var expected = 20;
var result = latestTimeCatchTheBus(buses, passengers, capacity);
console.log(result, result === expected);
