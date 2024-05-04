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
  const MAX_YEAR = 2050;
  const prefixSum = new Array(101).fill(0);
  for (const [birth, death] of logs) {
    prefixSum[birth - MIN_YEAR]++;
    prefixSum[death - MIN_YEAR]--;
  }

  let maxPopulation = 0;
  let currentPopulation = 0;
  let result = 0;
  for (let year = MIN_YEAR; year < MAX_YEAR; year++) {
    currentPopulation += prefixSum[year - MIN_YEAR];
    if (currentPopulation > maxPopulation) {
      maxPopulation = currentPopulation;
      result = year;
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
