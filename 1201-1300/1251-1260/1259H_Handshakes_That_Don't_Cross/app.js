// 1259. Handshakes That Don't Cross
// https://leetcode.com/problems/handshakes-that-dont-cross/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number} numPeople
 * @return {number}
 */
var numberOfWays = function (numPeople) {
  const MOD = BigInt(1e9 + 7);
  const halfPeople = numPeople >> 1;
  const memo = new Array(halfPeople + 1).fill(-1n);
  memo[0] = 1n;
  dp(halfPeople);
  return Number(memo[halfPeople]);

  function dp(numPeople) {
    if (numPeople === 1) return 1n;
    if (memo[numPeople] !== -1n) return memo[numPeople];

    let result = 0n;
    for (let leftSide = 0; leftSide < numPeople; leftSide++) {
      const rightSide = numPeople - leftSide - 1;
      result = (result + dp(leftSide) * dp(rightSide)) % MOD;
    }
    return (memo[numPeople] = result);
  }
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
