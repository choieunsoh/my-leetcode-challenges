// 1436. Destination City
// https://leetcode.com/problems/destination-city/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  const map = new Map(paths);
  let startCity = paths[0][0];
  while (startCity) {
    const nextCity = map.get(startCity);
    if (!nextCity) return startCity;
    startCity = nextCity;
  }
  return '';
};

var paths = [
  ['London', 'New York'],
  ['New York', 'Lima'],
  ['Lima', 'Sao Paulo'],
];
var expected = 'Sao Paulo';
var result = destCity(paths);
console.log(result, result === expected);

var paths = [
  ['B', 'C'],
  ['D', 'B'],
  ['C', 'A'],
];
var expected = 'A';
var result = destCity(paths);
console.log(result, result === expected);

var paths = [['A', 'Z']];
var expected = 'Z';
var result = destCity(paths);
console.log(result, result === expected);
