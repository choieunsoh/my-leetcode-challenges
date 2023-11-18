// 1094. Car Pooling
// https://leetcode.com/problems/car-pooling/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  let max = Math.max(...trips.map(([, , to]) => to));
  const passengers = new Array(max + 1).fill(0);
  for (let i = 0; i < trips.length; i++) {
    const [people, from, to] = trips[i];
    passengers[from] += people;
    passengers[to] -= people;
  }

  for (let i = 0; i < passengers.length; i++) {
    passengers[i] += passengers[i - 1] ?? 0;
    if (passengers[i] > capacity) return false;
  }
  return true;
};

var trips = [
    [2, 1, 5],
    [3, 3, 7],
  ],
  capacity = 4;
var expected = false;
var result = carPooling(trips, capacity);
console.log(result, result === expected);

var trips = [
    [2, 1, 5],
    [3, 3, 7],
  ],
  capacity = 5;
var expected = true;
var result = carPooling(trips, capacity);
console.log(result, result === expected);

var trips = [
    [9, 0, 1],
    [3, 3, 7],
  ],
  capacity = 4;
var expected = false;
var result = carPooling(trips, capacity);
console.log(result, result === expected);
