// 2147. Number of Ways to Divide a Long Corridor
// https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} corridor
 * @return {number}
 */
var numberOfWays = function (corridor) {
  const MOD = 1e9 + 7;
  let result = 1;
  let seats = 0;
  let start = 0;

  // Skip initial plants
  let j = 0;
  while (corridor[j] === 'P') {
    j++;
  }

  // Check if there are enough characters left to form a section
  if (j >= corridor.length - 1) {
    return 0;
  }

  for (let i = j; i < corridor.length; i++) {
    if (corridor[i] === 'P') continue;
    seats++;
    if (seats === 2) {
      start = i;
    } else if (seats === 3) {
      result = (result * (i - start)) % MOD;
      seats = 1;
    }
  }

  // Check for an odd number of seats
  if (seats !== 2) {
    return 0;
  }

  return result;
};

var corridor = 'SSPPSPS';
var expected = 3;
var result = numberOfWays(corridor);
console.log(result, result === expected);

var corridor = 'PPSPSP';
var expected = 1;
var result = numberOfWays(corridor);
console.log(result, result === expected);

var corridor = 'S';
var expected = 0;
var result = numberOfWays(corridor);
console.log(result, result === expected);
