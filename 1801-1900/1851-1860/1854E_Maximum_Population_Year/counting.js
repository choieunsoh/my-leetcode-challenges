// 1854. Maximum Population Year
// https://leetcode.com/problems/maximum-population-year/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function (logs) {
  const MIN_YEAR = 1950;
  const counts = new Array(101).fill(0);
  let max = 0;
  let result = 2050;
  for (const [birth, death] of logs) {
    for (let year = birth; year < death; year++) {
      counts[year - MIN_YEAR]++;
      if (counts[year - MIN_YEAR] > max) {
        max = counts[year - MIN_YEAR];
        result = year;
      } else if (counts[year - MIN_YEAR] === max) {
        result = Math.min(result, year);
      }
    }
  }
  return result;
};

var logs = [
  [1993, 1999],
  [2000, 2010],
];
var expected = 1993;
var result = maximumPopulation(logs);
console.log(result, result === expected);

var logs = [
  [1950, 1961],
  [1960, 1971],
  [1970, 1981],
];
var expected = 1960;
var result = maximumPopulation(logs);
console.log(result, result === expected);

var logs = [
  [2033, 2034],
  [2039, 2047],
  [1998, 2042],
  [2047, 2048],
  [2025, 2029],
  [2005, 2044],
  [1990, 1992],
  [1952, 1956],
  [1984, 2014],
];
var expected = 2005;
var result = maximumPopulation(logs);
console.log(result, result === expected);
