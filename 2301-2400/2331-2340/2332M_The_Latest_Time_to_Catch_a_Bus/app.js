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

  let passengerIndex = -1;
  let currentCapacity = 0;
  for (const departureTime of buses) {
    const left = passengerIndex + 1;
    const right = left + capacity - 1 < passengers.length ? left + capacity - 1 : passengers.length - 1;
    passengerIndex = searchPassenger(left, right, departureTime);
    currentCapacity = passengerIndex - left + 1;
  }

  let result = currentCapacity !== capacity ? buses[buses.length - 1] : passengers[passengerIndex--] - 1;
  while (passengerIndex >= 0 && result === passengers[passengerIndex]) {
    result--;
    passengerIndex--;
  }
  return result;

  function searchPassenger(left, right, target) {
    while (left <= right) {
      const mid = (left + right) >> 1;
      const arrivalTime = passengers[mid];
      if (arrivalTime === target) return mid;
      if (arrivalTime < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return left - 1;
  }
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

var buses = [5],
  passengers = [7, 8],
  capacity = 1;
var expected = 5;
var result = latestTimeCatchTheBus(buses, passengers, capacity);
console.log(result, result === expected);
