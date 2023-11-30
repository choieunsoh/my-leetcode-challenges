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
  let result = 1n;
  let seats = 0;
  let start = 0;
  for (let i = 0; i < corridor.length; i++) {
    const ch = corridor[i];
    if (ch === 'P') continue;

    seats++;
    if (seats === 2) {
      start = i;
    } else if (seats === 3) {
      result = (result * BigInt(i - start)) % BigInt(MOD);
      seats = 1;
    }
  }

  if (seats !== 2) {
    return 0;
  }
  return Number(result);
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
