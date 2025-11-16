// 1184. Distance Between Bus Stops
// https://leetcode.com/problems/distance-between-bus-stops/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function (distance, start, destination) {
  const n = distance.length;
  const total = distance.reduce((sum, dist) => sum + dist, 0);
  let current = 0;
  let index = start;
  while (index % n !== destination) {
    current += distance[index % n];
    index++;
  }
  return Math.min(current, total - current);
};

var distance = [1, 2, 3, 4],
  start = 0,
  destination = 1;
var expected = 1;
var result = distanceBetweenBusStops(distance, start, destination);
console.log(result, result === expected);

var distance = [1, 2, 3, 4],
  start = 0,
  destination = 2;
var expected = 3;
var result = distanceBetweenBusStops(distance, start, destination);
console.log(result, result === expected);

var distance = [1, 2, 3, 4],
  start = 0,
  destination = 3;
var expected = 4;
var result = distanceBetweenBusStops(distance, start, destination);
console.log(result, result === expected);
