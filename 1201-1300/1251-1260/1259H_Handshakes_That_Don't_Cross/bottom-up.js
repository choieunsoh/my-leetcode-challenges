// 1259. Handshakes That Don't Cross
// https://leetcode.com/problems/handshakes-that-dont-cross/description/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {number} numPeople
 * @return {number}
 */
var numberOfWays = function (numPeople) {
  const MOD = BigInt(1e9 + 7);
  const halfPeople = numPeople >> 1;
  const dp = new Array(halfPeople + 1).fill(0n);
  dp[0] = 1n;
  for (let people = 1; people <= halfPeople; people++) {
    for (let leftSide = 0; leftSide < people; leftSide++) {
      const rightSide = people - leftSide - 1;
      dp[people] = (dp[people] + dp[leftSide] * dp[rightSide]) % MOD;
    }
  }
  return Number(dp[halfPeople]);
};

var numPeople = 4;
var expected = 2;
var result = numberOfWays(numPeople);
console.log(result, result === expected);

var numPeople = 6;
var expected = 5;
var result = numberOfWays(numPeople);
console.log(result, result === expected);

var numPeople = 140;
var expected = 685542858;
var result = numberOfWays(numPeople);
console.log(result, result === expected);
